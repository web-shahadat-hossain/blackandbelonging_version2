import axios from "axios";
import { Form, Formik, FormikValues } from "formik";
import parse from "html-react-parser";
import { useCallback, useEffect, useState } from "react";
import { Col, Container, Nav, Row, Spinner, Tab } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  CalenderIcon,
  LeftIcon,
  LocationIcon,
  SchoolIcon,
  TickIcon,
  UploadIcon,
  UserIcon,
  VideoTitleicon,
} from "../../../assets/icons/icons";
import { API, REGEX } from "../../../utils/constant";
import Banner from "../../common/Banner/Banner";
import Button from "../../common/Button/Button";
import Input from "../../common/Formik/Input/Input";
import Textarea from "../../common/Formik/Textarea/Textarea";
import Shimmer from "../../common/Shimmer/Shimmer";
import styles from "./ViewEvent.module.scss";
import * as Yup from "yup";
import ErrorText from "../../common/Formik/ErrorText/ErrorText";
import moment from "moment";
import { changeToURL } from "../../../utils/utils";
const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500 MB in bytes

const ViewEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [uploadFileLoading, setUploadFileLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [videoError, setVideoError] = useState("");
  const [event, setEvent] = useState<any>({});

  const validationSchema = Yup.object({
    fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
    email: Yup.string()
      .required("Required")
      .matches(REGEX.EMAIL, "Invalid Email"),
    school: Yup.string().required("Required"),
    // videoUrl: Yup.string().required("Required"),
    members: Yup.string().required("Required"),
    videoTitle: Yup.string().required("Required"),
  });
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    school: "",
    videoTitle: "",
    members: "",
    videoUrl: "",
  };
  const onDrop = useCallback(async (acceptedFiles: File[], fileRejections) => {
    // Handle rejections for file size or unsupported types
    if (fileRejections.length > 0) {
      fileRejections.forEach((file) => {
        file.errors.forEach((error) => {
          if (error.code === "file-too-large") {
            toast.error("Video is too large. Max file size is 500MB.");
          } else if (error.code === "file-invalid-type") {
            toast.error("File type not supported.");
          }
        });
      });
      return; // Prevent further execution if there are rejected files
    }

    if (acceptedFiles.length === 0) return; // Ensure there's a file to upload

    setUploadFileLoading(true);
    try {
      let formData = new FormData();
      formData.append("file", acceptedFiles[0]);
      let result = await axios.post(API.UPLOAD_FILE, formData, {
        onUploadProgress: (data) => {
          if (data.total) {
            setProgress(Math.round((data.loaded / data.total) * 100));
            if (data.loaded === data.total) {
              setUploadFileLoading(false);
            }
          }
        },
      });
      setUploadedFile(result.data.url);
      setVideoError("");
      setProgress(100);
      setUploadFileLoading(false);
    } catch (error: any) {
      toast.error(error.response?.data || error.message);
      setUploadedFile(null);
      setUploadFileLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      // Video MIME types
      "video/mp4": [], // MP4
      "video/quicktime": [], // MOV
      "video/x-ms-wmv": [], // WMV
      "video/x-msvideo": [], // AVI
      "video/x-flv": [], // FLV
      "video/x-matroska": [], // MKV
      "video/webm": [], // WEBM
      "video/hevc": [], // HEVC

      // Image MIME types
      "image/*": [], // All image types

      // Document MIME types
      "application/pdf": [], // PDF
      "application/msword": [], // DOC
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [], // DOCX
    },
    maxSize: MAX_FILE_SIZE,
    onDrop,
  });

  const handleSubmit = async (values: FormikValues, formikProps: any) => {
    if (!uploadedFile) {
      return setVideoError("Required");
    }
    try {
      let response = await axios.post(API.EVENT_PARTICIPATION, {
        firstname: values.fname,
        lastname: values?.lname,
        school: values?.school,
        other_details: values?.members,
        video_title: values?.videoTitle,
        video_link: changeToURL(
          (uploadedFile as string).replace(
            "https://storage.cloud.google.com/",
            "https://storage.googleapis.com/"
          )
        ),
        email: values?.email,
        event_id: event?.id,
        status: "PENDING",
      });
      if (response.status === 200) {
        toast.success(response.data.message);
        formikProps.resetForm();
        formikProps.setSubmitting(false);
        setUploadedFile(null);
        setProgress(0);
        setUploadFileLoading(false);
      }
    } catch (error: any) {
      formikProps.resetForm();
      toast.error(error.response.data.message);
      formikProps.setSubmitting(false);
      setUploadedFile(null);
      setProgress(0);
      setUploadFileLoading(false);
    }
  };

  const fetchEvent = async (id: string) => {
    setLoading(true);
    try {
      let response = await axios.get(`${API.EVENT}${id}`);
      if (response.data && response.data.data) {
        setEvent(response.data.data);
      }
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const fetchEvents = async (): Promise<string | undefined> => {
    setLoading(true);
    try {
      let response = await axios.get(
        API.EVENTS.replace(":rows", `${1000}`).replace(":page", `${1}`)
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
    fetchEvents().then((response) => {
      if (response) {
        fetchEvent(response);
      }
    });
  }, [id]);
  return (
    <>
      <Helmet>
        <title>{event?.title || ""} | Black and Belonging</title>
      </Helmet>
      <Banner title={event?.title} />
      <section className={styles.view_event}>
        <Container>
          <Button className={styles.back_btn} onClick={() => navigate(-1)}>
            <LeftIcon /> Back
          </Button>
          <Row>
            <Col md={6}>
              <div className={styles.event_left}>
                <div className={styles.event_video}>
                  {loading ? (
                    <Shimmer fluid height={300} />
                  ) : (
                    <video controls>
                      <source src={event?.video_link} />
                    </video>
                  )}
                </div>
                <div className={styles.event_details}>
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
                          moment(event?.event_start).format("MMMM Do YYYY")
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
                          moment(event?.event_end).format("MMMM Do YYYY")
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
                          event?.event_location
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <Tab.Container id="event-tabs" defaultActiveKey="overview">
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
                      {parse(event?.overview || "")}
                    </Tab.Pane>
                    <Tab.Pane eventKey="apply">
                      {parse(event?.how_to_apply || "")}
                    </Tab.Pane>
                    <Tab.Pane eventKey="process">
                      {parse(event?.the_process || "")}
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
                      <Col md={6}>
                        <Input
                          name="email"
                          label="Email"
                          type="email"
                          required
                          icon={<UserIcon />}
                        />
                      </Col>
                      <Col md={6}>
                        <Input
                          name="school"
                          label="School"
                          required
                          icon={<SchoolIcon />}
                        />
                      </Col>
                      <Col md={12}>
                        <Input
                          name="videoTitle"
                          label="Video Title"
                          required
                          icon={<VideoTitleicon />}
                        />
                      </Col>
                      <Col md={12}>
                        <Textarea
                          name="members"
                          // label={event.event_id === 11606 ?
                          //     "Please provide any additional comments or information that you would like us to consider along with your video."
                          //     :
                          //     "Names & Emails of Other Group Members"
                          // }
                          label={
                            event?.event_type === "Application"
                              ? "Please provide any additional comments or information that you would like us to consider along with your video."
                              : "Please provide the names and email addresses of any additional group members. If this is a solo project, please type N/A in the box below."
                          }
                          required
                        />
                      </Col>
                      <Col md={12}>
                        <div className={`upload_input`}>
                          <label htmlFor="upload_video">
                            Please upload your video. Max file size is 500 MB.
                          </label>
                          {!uploadFileLoading && !progress ? (
                            <div className="upload" {...getRootProps()}>
                              <input id="upload_video" {...getInputProps()} />
                              {isDragActive ? (
                                <p>Drop the files here ...</p>
                              ) : (
                                <p>
                                  <UploadIcon />
                                  Drag and drop video anywhere on the page
                                </p>
                              )}
                            </div>
                          ) : uploadFileLoading ? (
                            <div className="upload">
                              <Spinner />
                            </div>
                          ) : uploadedFile ? (
                            <div className="upload uploaded">
                              <p>
                                <TickIcon /> Your video has been uploaded but
                                needs to be submitted. Please submit when you
                                are ready!
                              </p>
                            </div>
                          ) : (
                            <div className="upload upload_loading">
                              <p>{progress}% Uploaded...</p>
                              <div>
                                <span style={{ width: `${progress}%` }}></span>
                              </div>
                            </div>
                          )}
                          {videoError && <ErrorText>{videoError}</ErrorText>}
                        </div>
                      </Col>
                      <Col md={12}>
                        <Button
                          fluid
                          type="submit"
                          // disabled={(!formik.isValid || formik.isSubmitting) || (uploadFileLoading && Boolean(progress))}
                          disabled={
                            uploadFileLoading ||
                            (Boolean(progress) && !uploadedFile) ||
                            !formik.isValid ||
                            formik.isSubmitting
                          }
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

export default ViewEvent;
