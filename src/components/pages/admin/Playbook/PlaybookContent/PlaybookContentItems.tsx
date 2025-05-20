import React from "react";
import { Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Spinner from "../../../../common/Spinner/Spinner";
import { useSubTabs } from "../useSubTabs";
import PlaybookContentItem from "./PlaybookContentItem";
import { API } from "../../../../../utils/constant";
import axios from "axios";

const PlaybookContentItems = () => {
  const { tabId } = useParams();

  const { subtabs, getsubTabs, loading: isLoading, setsubTabs } = useSubTabs();

  const addItem = (_obj: any, start?: boolean) => {
    if (start) {
      setsubTabs((prev) => [_obj, ...prev]);
    } else {
      setsubTabs((prev) => [...prev, _obj]);
    }
  };

  const updateItemTitle = (key: string, newTitle: string) => {
    setsubTabs((items) =>
      items.map((item) =>
        item.id === key ? { ...item, playbookSubtabName: newTitle } : item
      )
    );
  };

  const handleDelete = async (id: any) => {
    try {
      const response: any = await axios.delete(
        API.PLAYBOOK.DELETE_SUBTAB.replace(":id", id)
      );

      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
      } else {
        console.error("Delete failed");
      }
    } catch (error) {
      console.error("Error Delete subTab:", error);
    } finally {
      getsubTabs(tabId);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-start align-items-center">
        <h3>Add steps</h3>
      </div>
      <Accordion defaultActiveKey="1">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <Spinner />
          </div>
        ) : (
          <>
            {subtabs.map((item, index) => (
              <React.Fragment key={item.id}>
                <PlaybookContentItem
                  {...item}
                  eventKey={item.id}
                  updateItemTitle={updateItemTitle}
                  addItem={addItem}
                  deleteItem={handleDelete}
                  index={index}
                  getsubTabs={getsubTabs}
                  id={item.id}
                  component={item.component}
                />
              </React.Fragment>
            ))}
          </>
        )}
      </Accordion>
    </>
  );
};

export default PlaybookContentItems;
