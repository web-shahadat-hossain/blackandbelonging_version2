import axios from "axios"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useAppDispatch } from "../../../app/hooks"
import { setHomepage } from "../../../features/homepage/homepage.slice"
import { API } from "../../../utils/constant"
import Loader from "../../common/Loader/Loader"
import Achievements from "./Achievements/Achievements"
import Banner from "./Banner/Banner"
import Contact from "./Contact/Contact"
import Mixtapes from "./Mixtapes/Mixtapes"
import News from "./News/News"
// import VideoBanner from "./VideoBanner/VideoBanner"


type HomeType = {
    banner_title: string,
    banner_description: string,
    section_two_box_1_text: string,
    section_two_box_1_count: string,
    section_two_box_2_text: string,
    section_two_box_2_count: string,
    section_two_box_3_text: string,
    section_two_box_3_count: string,
    section_two_box_4_text: string,
    section_two_box_4_count: string,
    last_section_title: string,
    last_section_description: string,
    last_section_button_text: string,
    last_section_button_link: string,
}

const Homepage = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const getHomepageData = async () => {
        setLoading(true);
        try {
            const response = await axios.get<{ data: HomeType }>(API.GET_HOME);
            if (response.data && response.data.data) {
                dispatch(setHomepage(response.data.data));
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
        }
    }
    useEffect(() => {
        getHomepageData();
    }, [])
    return (
        <>
            {
                loading && <Loader />
            }
            <Helmet>
                <title>
                    Home | Black and Belonging
                </title>
            </Helmet>
            <Banner />
            <Achievements />
            <Mixtapes />
            {/* <VideoBanner /> */}
            <News />
            <Contact />
        </>
    )
}

export default Homepage
