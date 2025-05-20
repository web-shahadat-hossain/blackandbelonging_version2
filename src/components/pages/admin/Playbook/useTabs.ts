import axios from "axios";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { API } from "../../../../utils/constant";

export type mainTabsType = {
    id: string,
    playbookId: string,
    playbookTabName: string,
    createdAt: string,
    updatedAt: string,
}

export const useTabs = () => {
    const [tabs, setTabs] = useState<mainTabsType[]>([]);
    const [loading, setLoading] = useState(false);
    const getTabs = useCallback(async (id: string): Promise<{ data: mainTabsType[] } | undefined> => {
        setLoading(true);
        try {
            const response = await axios.get<{ data: mainTabsType[], message: string }>(API.PLAYBOOK.GET_MAIN_TABS.replace(":id", id));
            if (response.data) {
                setTabs(response.data.data);
                // toast.success(response.data.message);
                setLoading(false);
                return { data: response.data.data };
            }
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                if (typeof error.response.data.message === "string") {
                    toast.error(error.response.data.message);
                } else {
                    error.response.data.message.forEach((item: string) => toast.error(item));
                }
            }
            setLoading(false);
        }
    }, [])

    return {
        tabs,
        loading,
        getTabs,
        setLoading,
    };
}