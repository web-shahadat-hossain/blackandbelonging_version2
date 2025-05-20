import axios from "axios";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { API } from "../../../../utils/constant";
import { playbookType } from "../Playbooks/usePlaybooks";

export const usePlaybook = () => {
    const [playbook, setPlaybook] = useState<playbookType>();
    const [loading, setLoading] = useState(false);
    const getPlaybook = useCallback(async (id: string) => {
        setLoading(true);
        try {
            const response = await axios.get<{ data: playbookType, message: string }>(API.PLAYBOOK.GET_SINGLE_PLAYBOOK.replace(":id", id));
            if (response.data) {
                setPlaybook(response.data.data);
                // toast.success(response.data.message);
                setLoading(false);
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
        loading,
        playbook,
        getPlaybook,
        setLoading,
    }
}