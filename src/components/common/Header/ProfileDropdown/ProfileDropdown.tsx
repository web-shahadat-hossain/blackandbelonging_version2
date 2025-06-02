import { useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { ProfileIcon } from "../../../../assets/icons/icons";
import userImg from "../../../../assets/images/author.webp";
import { resetUser, setAuth } from "../../../../features/user/user.slice";
import { ROUTES, TOAST_MESSAGE } from "../../../../utils/constant";
import ConfirmModal from "../../Modals/ConfirmModal/ConfirmModal";
import styles from "./ProfileDropdown.module.scss";

const ProfileDropdown = () => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const { userDetails } = useAppSelector((state) => state.user);
  const handleClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleLogout = () => {
    dispatch(setAuth(false));
    dispatch(resetUser());
    // auth.signOut();
    toast.success(TOAST_MESSAGE.LOGGED_OUT);
  };
  return (
    <>
      <Dropdown className={styles.dropdown}>
        <Dropdown.Toggle className={styles.dropdown_btn} ref={ref}>
          <ProfileIcon />
        </Dropdown.Toggle>
        <Dropdown.Menu className={styles.dropdown_menu}>
          <div className={styles.profile_details}>
            <img src={userDetails.userImg || userImg} alt="user image" />
            <h3>{userDetails.displayName}</h3>
          </div>
          <ul>
            <li>
              <NavLink onClick={handleClick} to={ROUTES.SETTINGS}>
                Settings
              </NavLink>
            </li>
            <hr />
            <li>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setShow(true);
                  handleClick();
                }}
                to={""}
              >
                Logout
              </Link>
            </li>
          </ul>
        </Dropdown.Menu>
      </Dropdown>
      <ConfirmModal
        show={show}
        title="Are you sure?"
        subtext="Do you want to logout?"
        handleClose={() => setShow(false)}
        handleNext={handleLogout}
      />
    </>
  );
};

export default ProfileDropdown;
