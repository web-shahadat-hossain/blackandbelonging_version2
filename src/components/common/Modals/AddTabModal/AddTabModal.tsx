import { Form, Formik } from "formik";
import Modal from "../Modal/Modal";
import "./AddTabModal.scss";
import Input from "../../Formik/Input/Input";
import Button from "../../Button/Button";
import { Yup } from "../../../../utils/utils";
import { useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { API } from "../../../../utils/constant";

type PropTypes = {
  show: boolean;
  handleClose: () => void;
  getTabs: (id: string) => void;
};

const AddTabModal = ({ handleClose, show, getTabs }: PropTypes) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required().label("Name"),
  });
  const handleAdd = async (values: typeof initialValues) => {
    setLoading(true);
    try {
      const response = await axios.post<{
        data: {
          playbookId: string;
          playbookTabId: string;
          playbookTabName: string;
        };
        message: string;
      }>(API.PLAYBOOK.CREATE_TAB, {
        playbookId: id,
        playbookTabName: values.name,
      });
      if (response.data && id) {
        toast.success(response.data.message);
        handleClose();
        setLoading(false);
        getTabs(id);
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
    <Modal
      show={show}
      title={"Add Tab"}
      handleClose={handleClose}
      className="add_tab_modal"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleAdd}
      >
        <Form>
          <Input name="name" placeholder="Enter title of tab" label="Title" />
          <Button type="submit" loading={loading} fluid>
            Add
          </Button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddTabModal;
