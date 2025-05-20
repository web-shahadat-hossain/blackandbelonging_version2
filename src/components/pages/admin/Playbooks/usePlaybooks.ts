import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { API } from "../../../../utils/constant";

export type playbookType = {
  id: string;
  title: string;
  slug: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export const usePlaybooks = () => {
  const [playbooks, setPlaybooks] = useState<playbookType[]>([]);
  const [loading, setLoading] = useState(false);
  const getPlaybooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get<{
        data: playbookType[];
        message: string;
      }>(API.PLAYBOOK.PLAYBOOKS);
      if (response.data) {
        setPlaybooks(response.data.data);
        // toast.success(response.data.message);
        setLoading(false);
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
  }, []);
  useEffect(() => {
    getPlaybooks();
  }, []);
  return {
    loading,
    playbooks,
    getPlaybooks,
  };
};
