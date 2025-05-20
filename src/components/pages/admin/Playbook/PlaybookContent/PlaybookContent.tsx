import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  CloseIcon,
  PenIcon,
  SaveIcon,
  TrashIcon2,
} from "../../../../../assets/icons/icons";
import { API, ROUTES } from "../../../../../utils/constant";
import ConfirmModal from "../../../../common/Modals/ConfirmModal/ConfirmModal";
import NoRecord from "../../../../common/NoRecord/NoRecord";
import Spinner from "../../../../common/Spinner/Spinner";
import { playbookType } from "../../Playbooks/usePlaybooks";
import { usePlaybook } from "../usePlaybook";
import "./PlaybookContent.scss";
import PlaybookContentItems from "./PlaybookContentItems";

const PlaybookContent = () => {
  const [name, setName] = useState("");
  const [editable, setEditable] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const { slug, id, tabId } = useParams();
  const navigate = useNavigate();
  const { getPlaybook, playbook, loading, setLoading } = usePlaybook();

  const handleSubmitTitle = async () => {
    if (name) {
      setLoading(true);
      try {
        if (playbook) {
          const response = await axios.put<{
            data: playbookType;
            message: string;
          }>(API.PLAYBOOK.UPDATE_PLAYBOOK.replace(":id", playbook?.id), {
            title: name,
          });
          if (response.data) {
            toast.success(response.data.message);
            setLoading(false);
            setEditable(false);
            getPlaybook(playbook.slug);
          }
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
    } else {
      toast.error("Please enter title of the playbook", {
        duration: 1500,
        position: "top-right",
      });
    }
  };

  const handleDeletePlaybook = async () => {
    setLoading(true);
    try {
      if (playbook) {
        const response = await axios.delete<{
          data: playbookType;
          message: string;
        }>(API.PLAYBOOK.DELETE_PLAYBOOK.replace(":id", playbook?.id));
        if (response.data) {
          toast.success(response.data.message);
          setLoading(false);
          setEditable(false);
          navigate(ROUTES.ADD_PLAYBOOK);
        }
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

  useEffect(() => {
    if (id && slug) {
      getPlaybook(slug);
    }
  }, [id, slug]);

  useEffect(() => {
    if (playbook?.title) {
      setName(playbook.title);
    }
  }, [playbook]);

  return (
    <div className="play_book_content">
      <div className="play_book_content_header">
        {loading ? (
          <Spinner />
        ) : editable ? (
          <div className="change_title_input">
            <input
              type="text"
              name="title"
              placeholder="Enter playbook title"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="button" onClick={handleSubmitTitle}>
              <SaveIcon />
            </button>
          </div>
        ) : (
          <h2>{playbook?.title}</h2>
        )}
        {!loading && (
          <>
            <button
              onClick={() => setEditable(!editable)}
              className={editable ? "cancel_btn" : "edit_btn"}
            >
              {editable ? <CloseIcon /> : <PenIcon />}
            </button>
            <button
              onClick={() => setShowConfirmationModal(true)}
              className={"delete_btn"}
            >
              <TrashIcon2 />
            </button>
          </>
        )}
      </div>
      {!tabId ? (
        <NoRecord
          completeTitle="Click on tab to show subTabs"
          className="mt-5"
        />
      ) : (
        <>
          <PlaybookContentItems />
        </>
      )}
      <ConfirmModal
        title="Are you sure you want to continue"
        handleNext={handleDeletePlaybook}
        handleClose={() => setShowConfirmationModal(false)}
        show={showConfirmationModal}
        loading={loading}
      />
    </div>
  );
};

export default PlaybookContent;
