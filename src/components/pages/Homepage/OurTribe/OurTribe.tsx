// import { motion, useScroll, useTransform, } from "framer-motion";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import Slider from "react-slick";
import { CloseIcon } from "../../../../assets/icons/icons";
import tribe1 from "../../../../assets/images/tribe/1.png";
import tribe2 from "../../../../assets/images/tribe/2.jpg";
import tribe3 from "../../../../assets/images/tribe/3.jpg";
import tribe5 from "../../../../assets/images/tribe/5.jpg";
import tribe4 from "../../../../assets/images/tribe/4.jpg";
import tribe6 from "../../../../assets/images/tribe/6.jpg";
import tribe7 from "../../../../assets/images/tribe/7.jpg";
import tribe8 from "../../../../assets/images/tribe/8.jpg";
import tribe9 from "../../../../assets/images/tribe/9.jpg";
import tribe10 from "../../../../assets/images/tribe/10.jpg";
import tribe11 from "../../../../assets/images/tribe/11.jpg";
import tribe12 from "../../../../assets/images/tribe/12.jpg";
import tribe13 from "../../../../assets/images/tribe/13.png";
import tribe14 from "../../../../assets/images/tribe/14.jpg";
import tribe15 from "../../../../assets/images/tribe/15.jpg";
import tribe16 from "../../../../assets/images/tribe/16.jpg";
import tribe17 from "../../../../assets/images/tribe/17.jpg";
import tribe18 from "../../../../assets/images/tribe/18.jpg";
import tribe19 from "../../../../assets/images/tribe/19.jpg";
import tribe20 from "../../../../assets/images/tribe/20.jpg";
import tribe21 from "../../../../assets/images/tribe/21.jpg";
import tribe22 from "../../../../assets/images/tribe/22.jpg";
import tribe23 from "../../../../assets/images/tribe/23.jpg";
import tribe24 from "../../../../assets/images/tribe/24.jpg";
import tribe25 from "../../../../assets/images/tribe/25.jpg";
import tribe26 from "../../../../assets/images/tribe/26.jpg";
import tribe27 from "../../../../assets/images/tribe/27.jpg";
import tribe28 from "../../../../assets/images/tribe/28.jpg";
import tribe29 from "../../../../assets/images/tribe/29.jpg";
import tribe30 from "../../../../assets/images/tribe/30.jpg";
import tribe31 from "../../../../assets/images/tribe/31.jpg";
import tribe32 from "../../../../assets/images/tribe/32.jpg";
import tribe33 from "../../../../assets/images/tribe/33.jpg";
import tribe34 from "../../../../assets/images/tribe/34.jpg";
import tribe35 from "../../../../assets/images/tribe/35.jpg";
import tribe36 from "../../../../assets/images/tribe/36.jpg";
import tribe37 from "../../../../assets/images/tribe/37.jpg";
import tribe38 from "../../../../assets/images/tribe/38.jpg";
import tribe39 from "../../../../assets/images/tribe/39.jpg";
import tribe40 from "../../../../assets/images/tribe/40.jpg";
import tribe41 from "../../../../assets/images/tribe/41.jpg";
import tribe42 from "../../../../assets/images/tribe/42.jpg";
import tribe43 from "../../../../assets/images/tribe/43.jpg";
import tribe44 from "../../../../assets/images/tribe/44.jpg";
import tribe45 from "../../../../assets/images/tribe/45.jpg";
import tribe46 from "../../../../assets/images/tribe/46.jpg";
import tribe47 from "../../../../assets/images/tribe/47.jpg";
import tribe48 from "../../../../assets/images/tribe/48.jpg";
import tribe49 from "../../../../assets/images/tribe/49.jpg";
import tribe50 from "../../../../assets/images/tribe/50.jpg";
import tribe51 from "../../../../assets/images/tribe/51.jpg";
import tribe52 from "../../../../assets/images/tribe/52.jpg";
import tribe53 from "../../../../assets/images/tribe/53.jpg";
import tribe54 from "../../../../assets/images/tribe/54.jpg";
import tribe57 from "../../../../assets/images/tribe/57.jpg";
import HeadingText from "../../../common/HeadingText/HeadingText";
import styles from "./OurTribe.module.scss";

const OurTribe = () => {
    const [show, setShow] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const data = [
        {
            original: tribe1,
            thumbnail: tribe1,
        },
        {
            original: tribe2,
            thumbnail: tribe2,
        },
        {
            original: tribe3,
            thumbnail: tribe3,
        },
        {
            original: tribe4,
            thumbnail: tribe4,
        },
        {
            original: tribe5,
            thumbnail: tribe5,
        },
        {
            original: tribe6,
            thumbnail: tribe6,
        },
        {
            original: tribe7,
            thumbnail: tribe7,
        },
        {
            original: tribe8,
            thumbnail: tribe8,
        },
        {
            original: tribe9,
            thumbnail: tribe9,
        },
        {
            original: tribe10,
            thumbnail: tribe10,
        },
        {
            original: tribe11,
            thumbnail: tribe11,
        },
        {
            original: tribe12,
            thumbnail: tribe12,
        },
        {
            original: tribe13,
            thumbnail: tribe13,
        },
        {
            original: tribe14,
            thumbnail: tribe14,
        },
        {
            original: tribe15,
            thumbnail: tribe15,
        },
        {
            original: tribe16,
            thumbnail: tribe16,
        },
        {
            original: tribe17,
            thumbnail: tribe17,
        },
        {
            original: tribe18,
            thumbnail: tribe18,
        },
        {
            original: tribe19,
            thumbnail: tribe19,
        },
        {
            original: tribe20,
            thumbnail: tribe20,
        },
        {
            original: tribe21,
            thumbnail: tribe21,
        },
        {
            original: tribe22,
            thumbnail: tribe22,
        },
        {
            original: tribe23,
            thumbnail: tribe23,
        },
        {
            original: tribe24,
            thumbnail: tribe24,
        },
        {
            original: tribe25,
            thumbnail: tribe25,
        },
        {
            original: tribe26,
            thumbnail: tribe26,
        },
        {
            original: tribe27,
            thumbnail: tribe27,
        },
        {
            original: tribe28,
            thumbnail: tribe28,
        },
        {
            original: tribe29,
            thumbnail: tribe29,
        },
        {
            original: tribe30,
            thumbnail: tribe30,
        },
        {
            original: tribe31,
            thumbnail: tribe31,
        },
        {
            original: tribe32,
            thumbnail: tribe32,
        },
        {
            original: tribe33,
            thumbnail: tribe33,
        },
        {
            original: tribe34,
            thumbnail: tribe34,
        },
        {
            original: tribe35,
            thumbnail: tribe35,
        },
        {
            original: tribe36,
            thumbnail: tribe36,
        },
        {
            original: tribe37,
            thumbnail: tribe37,
        },
        {
            original: tribe38,
            thumbnail: tribe38,
        },
        {
            original: tribe39,
            thumbnail: tribe39,
        },
        {
            original: tribe40,
            thumbnail: tribe40,
        },
        {
            original: tribe41,
            thumbnail: tribe41,
        },
        {
            original: tribe42,
            thumbnail: tribe42,
        },
        {
            original: tribe43,
            thumbnail: tribe43,
        },
        {
            original: tribe44,
            thumbnail: tribe44,
        },
        {
            original: tribe45,
            thumbnail: tribe45,
        },
        {
            original: tribe46,
            thumbnail: tribe46,
        },
        {
            original: tribe47,
            thumbnail: tribe47,
        },
        {
            original: tribe48,
            thumbnail: tribe48,
        },
        {
            original: tribe49,
            thumbnail: tribe49,
        },
        {
            original: tribe50,
            thumbnail: tribe50,
        },
        {
            original: tribe51,
            thumbnail: tribe51,
        },
        {
            original: tribe52,
            thumbnail: tribe52,
        },
        {
            original: tribe53,
            thumbnail: tribe53,
        },
        {
            original: tribe54,
            thumbnail: tribe54,
        },
        {
            original: tribe57,
            thumbnail: tribe57,
        },
    ];
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 8,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        slidesToScroll: 1,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 499,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    }
    return (
        <>
            <section className={`${styles.our_tribe} our_tribe`}>
                <HeadingText className={styles.title}>Our Tribe</HeadingText>
                <Slider {...settings}>
                    {
                        data.map((item, index) => <img key={item.thumbnail} onClick={() => { setShow(true); setStartIndex(index) }} src={item.thumbnail} alt="tribe memebr" />)
                    }
                </Slider>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    centered
                    className={styles.gallery_modal}
                    backdropClassName='gallery_modal'
                >
                    <button onClick={() => setShow(false)} className={styles.close_btn}><CloseIcon /></button>
                    <ImageGallery showFullscreenButton={false} startIndex={startIndex} items={data} />
                </Modal>
            </section>
        </>
    )
}

export default OurTribe
