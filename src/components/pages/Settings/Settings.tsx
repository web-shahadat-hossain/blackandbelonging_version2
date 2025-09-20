import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Badge,
  Nav,
  Tab,
  Table,
} from "react-bootstrap";
import Banner from "../../common/Banner/Banner";
import styles from "./Settings.module.scss";
import { useAppSelector } from "../../../app/hooks";
import { Form, Formik, Field } from "formik";
import Input from "../../common/Formik/Input/Input";
import { getComputedDate } from "../../../utils/utils";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { useMemo } from "react";
import axios from "axios";
import { API } from "../../../utils/constant";
import toast from "react-hot-toast";

/** ------------------ API helpers ------------------ */
async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`/api${path}`, {
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    credentials: "include",
    ...init,
  });
  const ct = res.headers.get("content-type") || "";
  const data = ct.includes("application/json")
    ? await res.json()
    : await res.text();
  if (!res.ok) {
    const msg =
      (data as any)?.message ||
      (typeof data === "string" ? data : "Request failed");
    throw new Error(msg);
  }
  return data as T;
}

const updateMe = (
  payload: Partial<{
    username: string;
    displayName: string;
    first_name: string;
  }>
) =>
  apiFetch<{ user: any }>("/user/me", {
    method: "PUT",
    body: JSON.stringify(payload),
  });

const createAuthorRequest = async (payload: {
  areas: string[];
  goal: string;
}) => {
  try {
    let response = await axios.post(
      API.AUTHORREQUEST,
      {
        categories: [...payload.areas],
        goalDescription: payload.goal,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      }
    );
    console.log(response.data);
    return response.data; // same as your previous apiFetch return
  } catch (error: any) {
    // Handle error
    if (error.response) {
      throw new Error(error.response.data?.message || "Request failed");
    } else {
      throw new Error(error.message || "Network error");
    }
  }
};

/** ------------------ Validation ------------------ */
const Areas = ["blogs", "events", "polls"] as const;

const ProfileSchema = Yup.object({
  username: Yup.string().min(3, "Min 3 characters").required("Required"),
  displayName: Yup.string().min(2, "Min 2 characters").required("Required"),
  first_name: Yup.string().min(2, "Min 2 characters").required("Required"),
});

const RequestSchema = Yup.object({
  areas: Yup.array()
    .of(Yup.mixed<(typeof Areas)[number]>().oneOf(Areas as any))
    .min(1, "Pick at least one"),
  goal: Yup.string().min(10, "Please describe more").required("Required"),
});

/** ------------------ Meta (labels + desc) ------------------ */
const areasMeta: Record<
  (typeof Areas)[number],
  { label: string; desc: string }
> = {
  blogs: {
    label: "Blogs",
    desc: "Write articles, stories, and opinion pieces for our community.",
  },
  events: {
    label: "Events",
    desc: "Propose, host, or cover events—recaps, announcements, highlights.",
  },
  polls: {
    label: "Polls",
    desc: "Create community polls to gather insights and engagement.",
  },
};

/** ------------------ Component ------------------ */
const Settings = () => {
  const { userDetails } = useAppSelector((state) => state.user);

  const initialValues = useMemo(
    () => ({
      username: userDetails?.username || "",
      displayName: userDetails?.displayName || "",
      email: userDetails?.email || "",
      first_name: userDetails?.first_name || "",
      registeredDate: getComputedDate(
        userDetails?.registeredDate || ""
      ).formattedDate(),
      userId: userDetails?.userId,
      role: userDetails?.role,
      userType: userDetails?.userType, // "USER" | "AUTHOR"
    }),
    [userDetails]
  );

  const isAuthor = initialValues.userType === "AUTHOR";

  return (
    <>
      <Helmet>
        <title>Settings | Black and Belonging</title>
      </Helmet>

      <section className={styles.settings}>
        <Banner title="Settings" />

        <Container>
          <div className={styles.header}>
            <div>
              <h2 className={styles.pageTitle}>Account Settings</h2>
              <p className={styles.pageSub}>
                Manage your profile and{" "}
                {isAuthor && "submit an author request."}
              </p>
            </div>

            <div className={styles.badges}>
              <Badge
                bg={isAuthor ? "success" : "secondary"}
                className={styles.roleBadge}
              >
                {isAuthor ? "AUTHOR" : "USER"}
              </Badge>
              {initialValues.email && (
                <Badge
                  bg="dark"
                  className={styles.emailBadge}
                  title={initialValues.email}
                >
                  {initialValues.email}
                </Badge>
              )}
            </div>
          </div>

          {/* Tabs */}
          <Tab.Container defaultActiveKey="profile">
            <Nav variant="pills" className={styles.segmentTabs}>
              <Nav.Item>
                <Nav.Link eventKey="profile">Profile</Nav.Link>
              </Nav.Item>
              {isAuthor && (
                <Nav.Item>
                  <Nav.Link eventKey="author">Author Request</Nav.Link>
                </Nav.Item>
              )}
            </Nav>

            <Tab.Content>
              {/* ========== PROFILE TAB ========== */}
              <Tab.Pane eventKey="profile">
                <Card
                  className={`${styles.card} shadow-sm`}
                  style={{ marginTop: "1.2rem" }}
                >
                  <Card.Body>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={ProfileSchema}
                      enableReinitialize
                      onSubmit={async (values, { setSubmitting }) => {
                        try {
                          await updateMe({
                            username: values.username,
                            displayName: values.displayName,
                            first_name: values.first_name,
                          });
                          alert("Profile updated");
                        } catch (e: any) {
                          alert(e.message || "Update failed");
                        } finally {
                          setSubmitting(false);
                        }
                      }}
                    >
                      {({ isSubmitting }) => (
                        <Form className={styles.form}>
                          <Row>
                            <Col md={6}>
                              <Input name={"first_name"} label="First name" />
                            </Col>
                            <Col md={6}>
                              <Input
                                name={"displayName"}
                                label="Display Name"
                              />
                            </Col>
                            <Col md={6}>
                              <Input name={"username"} label="Username" />
                            </Col>
                            <Col md={6}>
                              <Input
                                disabled
                                name={"email"}
                                label="Email"
                                type="email"
                              />
                            </Col>
                            <Col md={6}>
                              <Input
                                disabled
                                name={"userType"}
                                label="Account Type"
                              />
                            </Col>
                          </Row>
                          <div style={{ marginTop: "1.2rem" }}>
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              style={{
                                padding: "0.6rem 1.8rem",
                                backgroundColor: "#FF014F",
                                borderColor: "#fff",
                              }}
                            >
                              Save Changes
                            </Button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </Card.Body>
                </Card>
              </Tab.Pane>

              {/* ========== AUTHOR REQUEST TAB (ONLY IF AUTHOR) ========== */}
              {isAuthor && (
                <Tab.Pane eventKey="author">
                  <Card
                    className={`${styles.card} shadow-sm`}
                    style={{ marginTop: "1.2rem" }}
                  >
                    <Card.Body>
                      <div className={styles.sectionHead}>
                        <h4>Contribute as an Author</h4>
                        <p className={styles.muted}>
                          Choose where you want to contribute and tell us your
                          goal.
                        </p>
                      </div>

                      <Formik
                        initialValues={{ areas: [] as string[], goal: "" }}
                        validationSchema={RequestSchema}
                        onSubmit={async (
                          values,
                          { resetForm, setSubmitting }
                        ) => {
                          try {
                            await createAuthorRequest(values);
                            toast(
                              "Request submitted! Admin will review it shortly."
                            );
                            resetForm();
                          } catch (e: any) {
                            alert(e.message || "Submit failed");
                          } finally {
                            setSubmitting(false);
                          }
                        }}
                      >
                        {({
                          errors,
                          touched,
                          isSubmitting,
                          values,
                          setFieldValue,
                        }) => (
                          <Form>
                            <Row className="g-3">
                              <Col lg={7}>
                                {/* Toolbar */}
                                <div className={styles.toolbar}>
                                  <span className={styles.label}>
                                    Select areas
                                  </span>
                                  <div className={styles.toolbarActions}>
                                    <Button
                                      size="sm"
                                      className={styles.ghostBtn}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setFieldValue("areas", [...Areas]);
                                      }}
                                    >
                                      Select all
                                    </Button>
                                    <Button
                                      size="sm"
                                      className={styles.ghostBtn}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setFieldValue("areas", []);
                                      }}
                                    >
                                      Clear
                                    </Button>
                                  </div>
                                </div>

                                {/* Table of areas */}
                                <Table
                                  responsive
                                  hover
                                  className={styles.areasTable}
                                >
                                  <thead>
                                    <tr>
                                      <th style={{ width: 88 }}>Select</th>
                                      <th>Area</th>
                                      <th>Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {Areas.map((key) => (
                                      <tr key={key}>
                                        <td>
                                          <label className={styles.checkbox}>
                                            <Field
                                              type="checkbox"
                                              name="areas"
                                              value={key}
                                              className={styles.checkboxInput}
                                            />
                                            <span
                                              className={styles.visuallyHidden}
                                            >
                                              {areasMeta[key].label}
                                            </span>
                                          </label>
                                        </td>
                                        <td className={styles.areaName}>
                                          <span className={styles.badgePill}>
                                            {areasMeta[key].label}
                                          </span>
                                        </td>
                                        <td className={styles.areaDesc}>
                                          {areasMeta[key].desc}
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </Table>

                                {touched.areas && errors.areas ? (
                                  <div className={styles.errorText}>
                                    {String(errors.areas)}
                                  </div>
                                ) : null}

                                {/* Goal textarea */}
                                <div
                                  style={{
                                    marginTop: "1.2rem",
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <label className={styles.label}>
                                    Please describe the goal
                                  </label>
                                  <Field
                                    as="textarea"
                                    name="goal"
                                    rows={5}
                                    className={styles.textarea}
                                    placeholder="Tell us what you plan to publish and your goals"
                                  />
                                </div>

                                <div
                                  className={styles.actionsRight}
                                  style={{ marginTop: "4.2rem" }}
                                >
                                  <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{
                                      padding: "0.6rem 1.8rem",
                                      backgroundColor: "#FF014F",
                                      borderColor: "#fff",
                                    }}
                                    className={styles.submitBtn}
                                  >
                                    Submit request
                                  </Button>
                                </div>
                              </Col>

                              {/* Summary card */}
                              <Col lg={5}>
                                <Card className={styles.summaryCard}>
                                  <Card.Body>
                                    <h5 className={styles.summaryTitle}>
                                      Summary
                                    </h5>

                                    <div className={styles.summaryBlock}>
                                      <div className={styles.summaryLabel}>
                                        Selected areas
                                      </div>
                                      <div className={styles.badgeWrap}>
                                        {values.areas.length === 0 ? (
                                          <span className={styles.muted}>
                                            No areas selected yet
                                          </span>
                                        ) : (
                                          values.areas.map((a) => (
                                            <span
                                              key={a}
                                              className={styles.smallPill}
                                            >
                                              {
                                                areasMeta[
                                                  a as (typeof Areas)[number]
                                                ].label
                                              }
                                            </span>
                                          ))
                                        )}
                                      </div>
                                    </div>

                                    <div className={styles.summaryBlock}>
                                      <div className={styles.summaryLabel}>
                                        Goal length
                                      </div>
                                      <div className={styles.muted}>
                                        {values.goal?.length || 0} characters
                                      </div>
                                    </div>

                                    <div className={styles.summaryTip}>
                                      Tip: Be specific about topics, frequency,
                                      and audience. That helps admins approve
                                      your request faster.
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                          </Form>
                        )}
                      </Formik>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              )}
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>
    </>
  );
};

export default Settings;
