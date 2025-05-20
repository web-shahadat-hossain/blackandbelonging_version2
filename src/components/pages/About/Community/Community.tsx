import { Container } from "react-bootstrap";
import { useAppSelector } from "../../../../app/hooks";
import { parse } from "../../../../utils/constant";
import HeadingText from "../../../common/HeadingText/HeadingText";
import styles from "./Community.module.scss";
import CommunityBox from "./CommunityBox/CommunityBox";

const Community = () => {
  const {
    section_two_main_title,
    section_two_title,
    section_two_description,
    section_three_title,
    section_three_description,
    section_four_title,
    section_four_description,
  } = useAppSelector((state) => state.about.about);
  return (
    <>
      <section className={styles.community}>
        <Container>
          <HeadingText className={styles.title}>
            {parse(section_two_main_title)}
          </HeadingText>
          <CommunityBox
            title={parse(section_two_title)}
            index={1}
            img={
              "https://blackandbelonging.com/static/media/about1%20(1).bddc4dcb5c0fd0b557db.webp"
            }
            text={parse(section_two_description)}
          />
          <CommunityBox
            title={parse(section_three_title)}
            index={2}
            img={
              "https://blackandbelonging.com/static/media/about1%20(2).ffe6f9fa6413dc3246b2.webp"
            }
            text={parse(section_three_description)}
          />
          <CommunityBox
            title={parse(section_four_title)}
            index={3}
            img={
              "https://blackandbelonging.com/static/media/about1%20(1)%20(1).56297f2d82f402e3b360.webp"
            }
            text={parse(section_four_description)}
          />
        </Container>
      </section>
    </>
  );
};

export default Community;
