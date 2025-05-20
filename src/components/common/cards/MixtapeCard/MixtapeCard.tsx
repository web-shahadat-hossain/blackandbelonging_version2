import { Link } from "react-router-dom";
import styles from "./MixtapeCard.module.scss";

type PropTypes = {
    title?: string,
    type?: string,
    className?: string,
    category?: string,
    to?: string,
    date?: string,
    feature_image: string,
}

const MixtapeCard = (props: PropTypes) => {
    // const [loading, setLoading] = useState(true);
    // const [media, setMedia] = useState("");
    // const getMedia = async () => {
    //     try {
    //         let response = await axios.get(`${API.MEDIA}/${props.media}`);
    //         setMedia(response.data.source_url);
    //         setLoading(false);
    //     } catch (error: any) {
    //         toast.error(error.message);
    //         setLoading(false);
    //     }
    // }
    // useEffect(() => {
    //     getMedia();
    // }, [])
    return (
        <>
            <div className={`${styles.card} ${props.className || ""}`}>
                <div className={styles.card_img}>
                    {/* {loading ? <Shimmer height={150} fluid /> : <img src={media} alt={props.title} />} */}
                    <img src={props.feature_image} alt={props.title} />
                    <span className={styles.category}>{props.category}</span>
                </div>
                <Link className={styles.title} to={props.to || ""} title={props.title}>{props.title}</Link>
                <h4 className={styles.date}>{props.date}</h4>
                {/* <p className={styles.type}>{props.type}</p> */}
            </div>
        </>
    )
}

export default MixtapeCard
