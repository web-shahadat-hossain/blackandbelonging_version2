import { Form, Formik } from "formik";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Yup } from "../../../../utils/utils";
import Button from "../../../common/Button/Button.tsx";
import Input from "../../../common/Formik/Input/Input";
import "./AddPlaybook.scss";
import axios from "axios";
import { API, ROUTES } from "../../../../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export type createPlaybookType = {
  id: string;
  status: string;
  title: string;
  slug: string;
  updatedAt: string;
  createdAt: string;
};

const AddPlaybook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    slug: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required().label("Title"),
    slug: Yup.string().required().label("Slug"),
  });
  const handleSubmit = async (values: typeof initialValues) => {
    setLoading(true);

    try {
      let response = await axios.post<{
        data: createPlaybookType;
        message: string;
      }>(API.PLAYBOOK.CREATE_PLAYBOOK, { ...values });
      if (response.data && response.data.message) {
        toast.success(response.data.message);
        setLoading(false);
        navigate(
          ROUTES.PLAYBOOK.replace(":slug", response.data.data.slug).replace(
            ":id",
            response.data.data.id
          )
        );
      }
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        if (typeof error.response.data.message === "string") {
          toast.error(error.response.data.message);
        } else {
          error.response.data.message.forEach((item: string) =>
            toast.error(item)
          );
        }
      }
      setLoading(false);
    }
  };
  return (
    <div className="add_playbook_page">
      <Container>
        <div className="add_playbook_page_card">
          <h2>Add Playbook</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Input
                name="title"
                label="Title"
                placeholder="Enter playbook title"
              />
              <Input name="slug" label="Slug" placeholder="Enter slug" />
              <Button loading={loading} fluid type="submit">
                Create
              </Button>
            </Form>
          </Formik>
        </div>
      </Container>
    </div>
  );
};

export default AddPlaybook;
