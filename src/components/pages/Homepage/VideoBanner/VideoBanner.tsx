import styles from "./VideoBanner.module.scss";

const VideoBanner = () => {
    return (
        <section className={styles.banner}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/sTnckrACUfQ?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <div className={styles.text}>
                <h2>Celebrate Yourself, Your History, and Your Way of Life with Black and Belonging.</h2>
            </div>
        </section>
    )
}

export default VideoBanner
