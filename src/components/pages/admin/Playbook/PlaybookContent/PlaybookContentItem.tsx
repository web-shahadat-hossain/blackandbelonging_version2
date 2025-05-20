import axios from "axios";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { API } from "../../../../../utils/constant";
import Button from "../../../../common/Button/Button";
import { subTabType } from "../useSubTabs";
import { TrashIcon2 } from "../../../../../assets/icons/icons";

type PropTypes = subTabType & {
  eventKey: string;
  updateItemTitle: (eventKey: string, newTitle: string) => void;
  deleteItem: (eventKey: string) => void;
  addItem: (_obj?: any, start?: boolean) => void;
  index: number;
  getsubTabs: (id: string) => Promise<void>;
  component: Function;
};

const PlaybookContentItem = ({
  id: subTabId,
  playbookSubtabName,
  addItem,
  playbookSubtabContent,
  eventKey,
  updateItemTitle,
  deleteItem,
  component,
  getsubTabs,
  ...rest
}: PropTypes) => {
  const { id, tabId } = useParams();
  const [loading, setLoading] = useState(false);
  const parsetContent =
    playbookSubtabContent && JSON.parse(playbookSubtabContent);

  console.log({ parsetContent });

  const handleAdd = async () => {
    if (id && tabId) {
      setLoading(true);

      const eachTemplatePayload = {
        id: id,
        createdAt: new Date().toUTCString(),
        playbookSubtabContent: JSON.stringify(""),
        playbookSubtabName: playbookSubtabName,
        playbookTabId: tabId,
        updatedAt: new Date().toUTCString(),
        sectionId: rest.sectionId,
      };

      try {
        const response = await axios.post<{ message: string }>(
          API.PLAYBOOK.CREATE_SUBTAB,
          {
            playbookTabId: tabId,
            playbookSubtabName: playbookSubtabName,
            playbookSubtabContent: JSON.stringify(eachTemplatePayload),
          }
        );

        if (response.data) {
          setLoading(false);
          toast.success(response.data.message);
          getsubTabs(tabId);
        }
      } catch (error: any) {
        if (error?.response?.data?.message) {
          if (typeof error?.response?.data?.message === "string") {
            toast.error(error.response.data.message);
          } else {
            error?.response?.data?.message.forEach((item: string) =>
              toast.error(item)
            );
          }
        }
        setLoading(false);
      }
    }
  };

  const handleUpdate = async () => {
    if (id && tabId) {
      setLoading(true);

      const eachTemplatePayload = {
        id: id,
        createdAt: new Date().toUTCString(),
        playbookSubtabContent: JSON.stringify(""),
        playbookSubtabName: playbookSubtabName,
        playbookTabId: tabId,
        updatedAt: new Date().toUTCString(),
        sectionId: rest?.sectionId,
      };

      try {
        const response = await axios.put<{ message: string }>(
          API.PLAYBOOK.UPDATE_SUBTAB.replace(":id", subTabId),
          {
            playbookTabId: tabId,
            playbookSubtabName: playbookSubtabName,
            playbookSubtabContent: JSON.stringify(eachTemplatePayload),
          }
        );
        if (response?.data) {
          setLoading(false);
          toast.success(response?.data?.message);
          getsubTabs(tabId);
        }
      } catch (error: any) {
        if (error?.response?.data?.message) {
          if (typeof error?.response?.data?.message === "string") {
            toast.error(error.response.data.message);
          } else {
            error?.response?.data?.message.forEach((item: string) =>
              toast.error(item)
            );
          }
        }
        setLoading(false);
      }
    }
  };

  return (
    <Accordion.Item eventKey={`${eventKey}`}>
      {eventKey !== undefined && (
        <button
          onClick={() => deleteItem(eventKey)}
          className="remove_btn"
          type="button"
        >
          <TrashIcon2 />
        </button>
      )}
      <Accordion.Header>{playbookSubtabName}</Accordion.Header>
      <Accordion.Body>
        <input
          name=""
          className="tab_title_input"
          value={playbookSubtabName}
          onChange={(e) => updateItemTitle(eventKey, e.target.value)}
        />
        <div className="tab_content_here"></div>
        {subTabId ? (
          <Button onClick={handleUpdate} loading={loading}>
            Update Sub Tab
          </Button>
        ) : (
          <Button onClick={handleAdd} loading={loading}>
            Create Sub Tab
          </Button>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PlaybookContentItem;
