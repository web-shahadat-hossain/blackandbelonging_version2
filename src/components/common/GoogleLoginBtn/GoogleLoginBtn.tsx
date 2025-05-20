import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../../app/hooks";
import google from "../../../assets/icons/google.png";
import { setAuth, setUser } from "../../../features/user/user.slice";
import { API, ENVIRONMENT, TOAST_MESSAGE } from "../../../utils/constant";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import styles from "./GoogleLoginBtn.module.scss";
import { LoginSocialGoogle, IResolveParams } from "reactjs-social-login";
type propTypes = {
  className?: string;
  text?: string;
  isLogin?: boolean;
};
const GoogleLoginBtn = (props: propTypes) => {
  const { isLogin } = props;
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  let HandleLogin = async (data: any) => {
    setLoading(true);
    try {
      const name = data?.name.split(" ");
      const userDetails = {
        // username: googleUser?.user?.email,
        token: data?.access_token,
        password: data?.access_token,
        confirmPassword: data?.access_token,
        email: data?.email,
        firstName: name[0],
        lastName: name[1],
      };
      let regiseterResponse = await axios.post(API.REGISTER, userDetails, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (regiseterResponse.status === 200) {
        setLoading(false);
        const { id, email, firstName } = regiseterResponse?.data?.data;
        console.log("🚀 ~ HandleLogin ~ id:", id);
        dispatch(
          setUser({
            first_name: firstName,
            username: email,
            displayName: firstName,
            email: email,
            userId: id,
            role: "customer",
            userImg: data?.picture,
          })
        );
        dispatch(setAuth(true));
        toast.success(TOAST_MESSAGE.LOGGED_IN);
      } else {
        setLoading(false);
        toast.error(
          regiseterResponse.data?.error?.errors?.existing_user_login[0]
        );
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  };
  let googleRegister = async (data: any) => {
    setLoading(true);
    try {
      if (isLogin) {
      }
      let response = await axios.post(API.LOGIN, {
        email: data?.email,
        token: data?.access_token,
        password: data?.access_token,
      });
      if (response.status === 200) {
        // if (response.data?.id) {
        const { name, email, given_name, picture } = data;
        dispatch(
          setUser({
            first_name: given_name,
            username: email,
            displayName: name,
            email: email,
            userId: response?.data?.data?.user_id,
            role: "customer",
            userImg: picture,
          })
        );
        dispatch(setAuth(true));
        toast.success(TOAST_MESSAGE.LOGGED_IN);

        setLoading(false);
      }
    } catch (error: any) {
      HandleLogin(data);
      // toast.error(error.response.data.message??"");
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <LoginSocialGoogle
        client_id={ENVIRONMENT.GOOGLE_KEY}
        redirect_uri={
          isLogin
            ? "https://blackandbelonging.com/login"
            : "https://blackandbelonging.com/register"
        }
        scope="openid profile email"
        onResolve={({ data }: IResolveParams) => {
          googleRegister(data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <Button className={`${styles.google_btn} ${props.className || ""}`}>
          <img src={google} alt="google logo" />
          {"Sign In with Google"}
        </Button>
      </LoginSocialGoogle>
    </>
  );
};

export default GoogleLoginBtn;
