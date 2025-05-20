import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { API, ROUTES } from "../../../utils/constant";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import RsvpModal from "../../common/Modals/RsvpModal/RsvpModal";
import styles from "./HomeLayout.module.scss";
import axios from "axios";
import toast from "react-hot-toast";
import ChangePassword from "../../common/Modals/ChangePassword/ChangePassword";
import { decrypt } from "../../../utils/utils";


const HomeLayout = () => {
    const location = useLocation();
    const { id,} = useParams();
    const [showChange, setShowChange] = useState(false)
    const [email,setEmail]= useState("")
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const encryptedData = urlParams.get('data');
        console.log("page loaded>>>",encryptedData);
        if (encryptedData) {
          // Decode the URL-encoded parameter, then decrypt
          const decodedData = decodeURIComponent(encryptedData);
          console.log("page loaded>>>",decodedData);

          const result = decrypt(decodedData);
          console.log("page loaded>>>result",result);

          if (result) {
            let details= JSON.parse(result)
            const {otp , email , type}= details
            setEmail(email)
            if (otp && email && email) {
                handleSubmit(type, email, otp)
            }
          }
        }
      }, [location.search]);
    
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const paths = [
        ROUTES.VIEW_MIXTAPE_TRACKLIST.replace(":id", String(id)),
        ROUTES.VIEW_MIXTAPE.replace(":id", String(id)),
    ];

    const handleSubmit = (type: string, email: string, otp: string) => {
        // setLoading(true);
        axios.post(API.VERFIY_EMAIL, {
            type,
            email,
            otp,

        }).then(response => {
            if(response.status===200){
            toast.success(response.data.message);

                type === "ForgotPassword" && setShowChange(true)
                setTimeout(() => {
                    navigate(ROUTES.LOGIN);
                }, 200);
            }
            // setShowChange&& setShowChange(true)
            // props.handleClose()
            

        }).catch((error: any) => {
            if (error.response.data && error.response.data.message) {
                return toast.error(error.response.data.message)
            }
            return toast.error(error.message);
        }).finally(() => {


        })
    }
 
    useEffect(() => {
        if (paths.filter(item => location.pathname === item).length > 0) {

        } else {
            // window.scrollTo(0, 0);
            window.scroll({ top: 0, behavior: "instant" })
        }
    }, [location])

    useEffect(() => {
        if (location.search && location.search.split("?")[1].split("=")[1] === ROUTES.RSVP) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [location])

    return (
        <>
            <main className={styles.layout}>
                <Header />
                <Outlet />
                <Footer />
                <RsvpModal show={show} handleClose={() => { setShow(false); navigate(-1) }} />
                <ChangePassword
                    show={showChange}
                    email={email}
                    handleClose={() => setShowChange(false)}
                />
            </main>
        </>
    )
}

export default HomeLayout
