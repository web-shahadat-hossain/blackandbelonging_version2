import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../../../assets/logos/logo.png";
import { ROUTES } from "../../../utils/constant";
import Button from "../../common/Button/Button";
import NoRecord from "../../common/NoRecord/NoRecord";
import Spinner from "../../common/Spinner/Spinner";
import { usePlaybook } from "../admin/Playbook/usePlaybook";
import { useSubTabs } from "../admin/Playbook/useSubTabs";
import { useTabs } from "../admin/Playbook/useTabs";
import "./UserPlaybook.scss";
import UserPlaybookSidebarDropdown from "./UserPlaybookSidebarDropdown";
import Playbook from "./playbook";
import * as Hook from "../../../hooks/index";
import { CrossIcon } from "../../../assets/icons/icons";

const UserPlaybook = () => {
  const { slug } = useParams();
  const { width } = Hook.useWindowSize();
  const { getPlaybook, loading, playbook } = usePlaybook();
  const { getTabs, loading: tabsLoading, tabs } = useTabs();
  const { filteredSubtabs, loading: subTabsLoading, getsubTabs } = useSubTabs();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleClick = async (id: string) => {
    setActiveTab(id);
  };

  useEffect(() => {
    if (slug) {
      getPlaybook(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (playbook) {
      getTabs(playbook.id).then((response) => {
        if (response?.data) {
          setActiveTab(response?.data[0].id);
          getsubTabs(response?.data[0].id);
        }
      });
    }
  }, [playbook]);

  console.log({ isExpanded }, width < 1201);

  return (
    <div className="user_playbook">
      <div
        className={
          width < 1201 && isExpanded
            ? "user_playbook_sidebar_expanded"
            : width < 1201
            ? "toggle"
            : "user_playbook_sidebar"
        }
      >
        <div className="close-sidebar">
          {width < 1201 && isExpanded && (
            <p onClick={() => setIsExpanded(!isExpanded)}>
              <CrossIcon />
            </p>
          )}
        </div>
        <Link to="" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <ul>
          {loading || tabsLoading ? (
            <Spinner />
          ) : slug && tabs.length > 0 ? (
            tabs.map((item) => {
              return (
                <li key={item.id}>
                  <UserPlaybookSidebarDropdown
                    {...item}
                    onItemClick={() => setIsExpanded(!isExpanded)}
                    handleClick={handleClick}
                    active={activeTab === item.id}
                  />
                </li>
              );
            })
          ) : (
            <li>
              <NoRecord className="w-100" />
            </li>
          )}
          <li>
            <Button fluid onClick={() => navigate(ROUTES.USER_PLAYBOOKS)}>
              Playbooks
            </Button>
          </li>
        </ul>
      </div>
      <div className="user_play_book_content">
        <div className="user_play_book_content_header">
          {width < 1201 && (
            <button onClick={() => setIsExpanded(!isExpanded)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
          {loading ? <Spinner /> : <h2>{playbook?.title}</h2>}
        </div>
        <div className="user_playbook_content_steps">
          {loading || tabsLoading ? (
            <></>
          ) : subTabsLoading ? (
            <div className="d-flex justify-content-center">
              <Spinner />
            </div>
          ) : !activeTab ? (
            <NoRecord completeTitle="Click on tab to show steps" />
          ) : filteredSubtabs.length > 0 ? (
            filteredSubtabs.map((item) => {
              return <Playbook item={item} />;
            })
          ) : (
            <NoRecord />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPlaybook;
