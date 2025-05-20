import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { API } from "../../../../utils/constant";

export type subTabType = {
  id: string;
  playbookTabId: string;
  playbookSubtabName: string;
  playbookSubtabContent: string;
  sectionId: string;
  createdAt: string;
  updatedAt: string;
  component: any;
};

export const initialTemplate: subTabType = {
  id: "",
  createdAt: "",
  playbookSubtabContent: '{"title":"new title","paragraph":"new paragraph"}',
  playbookSubtabName: "Sample Title",
  playbookTabId: "",
  updatedAt: "",
  sectionId: "Banner",
  component: () => {
    return null;
  },
};

export const useSubTabs = () => {
  const [subtabs, setsubTabs] = useState<subTabType[]>([]);
  const [filteredSubtabs, setFilteredSubtabs] = useState<subTabType[]>([]);
  const [loading, setLoading] = useState(false);

  const getsubTabs = async (id: string) => {
    setLoading(true);
    try {
      const response = await axios.get<{ data: subTabType[]; message: string }>(
        API.PLAYBOOK.GET_SUBTABS.replace(":id", id)
      );
      if (response.data) {
        const arr = extractTemplateArray(response.data.data);
        setsubTabs([]);
        setsubTabs(() => {
          const newSubTabs = [...arr];
          return newSubTabs;
        });
        setLoading(false);
        setFilteredSubtabs(() => {
          const newSubTabs = [...arr];
          return newSubTabs;
        });
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

  const extractTemplateArray = (data: Array<subTabType>) => {
    const arr = [...data];
    const subTabsArray = arr.map((item) => {
      const parsedContent = JSON.parse(item?.playbookSubtabContent);
      return {
        ...parsedContent,
        id: item?.id,
      };
    });
    return [...subTabsArray];
  };

  return {
    subtabs: [...subtabs],
    loading,
    getsubTabs,
    setLoading,
    setsubTabs,
    filteredSubtabs,
    setFilteredSubtabs,
  };
};
