import axios from "axios";
import { Form, Formik, FormikValues } from "formik";
import parse from "html-react-parser";
import moment from "moment";
import { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import {
  CalenderIcon,
  LeftIcon,
  LocationIcon,
  UserIcon,
} from "../../../assets/icons/icons";
import { API, REGEX } from "../../../utils/constant";
import Banner from "../../common/Banner/Banner";
import Button from "../../common/Button/Button";
import Input from "../../common/Formik/Input/Input";
import Phone from "../../common/Formik/Phone/Phone";
import Shimmer from "../../common/Shimmer/Shimmer";
import styles from "./ViewRsvp.module.scss";

const ViewRsvp = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [rsvp, setRsvp] = useState<any>({});

  const validationSchema = Yup.object({
    fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
    email: Yup.string()
      .required("Required")
      .matches(REGEX.EMAIL, "Invalid Email"),
    phone: Yup.string().required("Required"),
  });
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
  };

  const handleSubmit = async (values: FormikValues, formikProps: any) => {
    try {
      let response = await axios.post(API.RSVP.ADD_PARTICIPANT, {
        firstname: values.fname,
        lastname: values?.lname,
        email: values?.email,
        phone: values?.phone,
      });
      if (response.status === 200) {
        toast.success(response.data.message);
        formikProps.resetForm();
        formikProps.setSubmitting(false);
      }
    } catch (error: any) {
      formikProps.resetForm();
      toast.error(error.message);
      formikProps.setSubmitting(false);
    }
  };

  const fetchRsvp = async (id: string) => {
    setLoading(true);
    try {
      let response = await axios.get(`${API.RSVP.GET_RSVP.replace(":id", id)}`);
      if (response.data && response.data.data) {
        console.log({ data: response.data.data });
        setRsvp(response.data.data);
      }
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const fetchRsvps = async (): Promise<string | undefined> => {
    setLoading(true);
    try {
      let response = await axios.get(
        API.RSVP.GET_ALL.replace(":rows", `${1000}`).replace(":page", `${1}`)
      );
      if (response.data && response.data.data) {
        let foundItem = response.data.data.rows.find(
          (item: any) => item.slug === id
        );
        if (foundItem) {
          setLoading(false);
          return foundItem.id;
        }
      }
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRsvps().then((response) => {
      if (response) {
        fetchRsvp(response);
      }
    });
  }, [id]);
  return (
    <>
      <Helmet>
        <title>{rsvp?.title || ""} | Black and Belonging</title>
      </Helmet>
      <Banner title={rsvp?.title} />
      <section className={styles.view_rsvp}>
        <Container>
          <Button className={styles.back_btn} onClick={() => navigate(-1)}>
            <LeftIcon /> Back
          </Button>
          <Row>
            <Col md={6}>
              <div className={styles.rsvp_left}>
                <div className={styles.rsvp_video}>
                  {loading ? (
                    <Shimmer fluid height={300} />
                  ) : (
                    <video controls>
                      <source src={rsvp?.video_link} />
                    </video>
                  )}
                </div>
                <div className={styles.rsvp_details}>
                  <div className={styles.dates}>
                    <div>
                      <h4>
                        <CalenderIcon />
                        Start
                      </h4>
                      <p>
                        {loading ? (
                          <Shimmer width={"50%"} height={18} />
                        ) : (
                          moment(rsvp?.rsvp_start).format("MMMM Do YYYY")
                        )}
                      </p>
                    </div>
                    <div>
                      <h4>
                        <CalenderIcon />
                        End
                      </h4>
                      <p>
                        {loading ? (
                          <Shimmer width={"50%"} height={18} />
                        ) : (
                          moment(rsvp?.rsvp_end).format("MMMM Do YYYY")
                        )}
                      </p>
                    </div>
                  </div>
                  <div className={styles.location}>
                    <div>
                      <p>
                        <LocationIcon />
                        {loading ? (
                          <Shimmer width={"50%"} height={18} />
                        ) : (
                          rsvp?.rsvp_location
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <Tab.Container id="rsvp-tabs" defaultActiveKey="overview">
                  <Nav>
                    <Nav.Item>
                      <Nav.Link eventKey="overview">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="apply">How to Apply</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="process">The Process</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="overview">
                      {parse(rsvp?.overview || "")}
                    </Tab.Pane>
                    <Tab.Pane eventKey="apply">
                      {parse(rsvp?.how_to_apply || "")}
                    </Tab.Pane>
                    <Tab.Pane eventKey="process">
                      {parse(rsvp?.the_process || "")}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
            <Col md={6}>
              <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >
                {(formik) => (
                  <Form className={styles.form}>
                    <Row>
                      <Col md={6}>
                        <Input
                          name="fname"
                          label="First Name"
                          required
                          icon={<UserIcon />}
                        />
                      </Col>
                      <Col md={6}>
                        <Input
                          name="lname"
                          label="Last Name"
                          required
                          icon={<UserIcon />}
                        />
                      </Col>
                      <Col md={12}>
                        <Input
                          name="email"
                          label="Email"
                          type="email"
                          required
                          icon={<UserIcon />}
                        />
                      </Col>
                      <Col md={12}>
                        <Phone
                          onChange={(phone) =>
                            formik.setFieldValue("phone", phone)
                          }
                          value={formik.values.phone}
                          error={
                            typeof formik.errors.phone === "string"
                              ? formik.errors.phone
                              : undefined
                          }
                          label="Phone"
                          placeholder=""
                        />
                      </Col>
                      <Col md={12}>
                        <Button
                          fluid
                          type="submit"
                          disabled={!formik.isValid || formik.isSubmitting}
                          loading={formik.isSubmitting}
                        >
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ViewRsvp;
