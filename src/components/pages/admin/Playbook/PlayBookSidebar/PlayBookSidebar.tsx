import { useEffect, useState } from "react";
import logo from '../../../../../assets/logos/logo.png'
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { API, ROUTES } from "../../../../../utils/constant";
import Button from "../../../../common/Button/Button";
import AddTabModal from "../../../../common/Modals/AddTabModal/AddTabModal";
import NoRecord from "../../../../common/NoRecord/NoRecord";
import Spinner from "../../../../common/Spinner/Spinner";
import { mainTabsType, useTabs } from "../useTabs";
import "./PlayBookSidebar.scss";
import { TrashIcon2 } from "../../../../../assets/icons/icons";
import ConfirmModal from "../../../../common/Modals/ConfirmModal/ConfirmModal";
import axios from "axios";
import toast from "react-hot-toast";

const PlayBookSidebar = () => {
    const navigate = useNavigate();
    const { id, slug } = useParams();
    const { getTabs, tabs, loading, setLoading } = useTabs();
    const [showCreateTabModal, setShowCreateModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [details, setDetails] = useState<mainTabsType>();
    const handleDelete = async () => {
        if (details?.id && id) {
            setLoading(true);
            try {
                await axios.delete(API.PLAYBOOK.DELETE_MAIN_TAB.replace(":id", details.id))
                setLoading(false);
                setShowConfirmationModal(false);
                let tabs = await getTabs(id);
                if (tabs?.data.length === 0 && slug && id) {
                    navigate(ROUTES.PLAYBOOK.replace(":slug", slug).replace(":id", id))
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
        }
    }
    useEffect(() => {
        if (id) {
            getTabs(id);
        }
    }, [id])
    return (
        <>
            <div className="play_book_page_sidebar">
                <Link
                    to=""
                    className="logo"
                >
                    <img src={logo} alt="logo" />
                </Link>
                <ul>
                    {
                        loading ?
                            <Spinner />
                            :
                            (id && slug && tabs.length > 0) ?
                                tabs.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <NavLink
                                                to={ROUTES.PLAYBOOK_SUBTABS.replace(":slug", slug).replace(":id", id).replace(":tabId", item.id)}
                                            >
                                                {item.playbookTabName}
                                            </NavLink>
                                            <button className="delete_btn"
                                                onClick={() => { setShowConfirmationModal(true); setDetails(item) }}
                                            >
                                                <TrashIcon2 />
                                            </button>
                                        </li>
                                    )
                                })
                                :
                                <li>
                                    <NoRecord className='w-100' />
                                </li>
                    }
                    <li>
                        <Button onClick={() => setShowCreateModal(true)} fluid>Add Tab</Button>
                    </li>
                    <li className='mt-auto'>
                        <Button variant="bordered_primary" onClick={() => navigate(ROUTES.ADD_PLAYBOOK)} fluid>Add Playbook</Button>
                    </li>
                    <li>
                        <Button onClick={() => navigate(ROUTES.PLAYBOOKS)} fluid>Playbooks</Button>
                    </li>
                </ul>
            </div>
            {
                showCreateTabModal &&
                <AddTabModal
                    show={showCreateTabModal}
                    handleClose={() => setShowCreateModal(false)}
                    getTabs={getTabs}
                />
            }
            <ConfirmModal
                title="Are you sure you want to continue"
                show={showConfirmationModal}
                handleClose={() => setShowConfirmationModal(false)}
                handleNext={handleDelete}
                loading={loading}
            />
        </>
    )
}

export default PlayBookSidebar
