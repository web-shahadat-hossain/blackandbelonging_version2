import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import NoRecord from "../../common/NoRecord/NoRecord";
import Spinner from "../../common/Spinner/Spinner";
import { useSubTabs } from "../admin/Playbook/useSubTabs";
import { mainTabsType } from "../admin/Playbook/useTabs";

type propType = mainTabsType & {
  handleClick: (id: string) => void;
  active: boolean;
  onItemClick: () => void;
};

const UserPlaybookSidebarDropdown = ({
  active,
  handleClick,
  playbookTabName,
  onItemClick,
  id,
}: propType) => {
  const { loading, getsubTabs, filteredSubtabs } = useSubTabs();
  useEffect(() => {
    if (id) {
      getsubTabs(id);
    }
  }, [id]);
  return (
    <Dropdown>
      <Dropdown.Toggle
        className={active ? "active" : ""}
        onClickCapture={() => handleClick(id)}
      >
        {playbookTabName}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {loading ? (
          <Spinner />
        ) : filteredSubtabs.length > 0 ? (
          filteredSubtabs.map((item) => {
            return (
              <button
                onClick={() => {
                  onItemClick();
                  let targetDiv = document.getElementById(item.id);
                  targetDiv.scrollIntoView({
                    behavior: "smooth", // Smooth scrolling
                    block: "center", // Vertically center
                    inline: "center", // Horizontally center (optional)
                  });
                }}
              >
                {item.playbookSubtabName}
              </button>
            );
          })
        ) : (
          <NoRecord />
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserPlaybookSidebarDropdown;
