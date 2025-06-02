import { useState } from "react";
import "../pages/Playbooks/Playbooks.scss";
import tick from "../../assets/icons/tick_pink.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../features/loading/loading.slice";
import axios from "axios";
import { API } from "../../utils/constant";
import toast from "react-hot-toast";
import EmailVerifyModal from "./EmailVerifyModal";
import citeImg from "../../assets/images/06.webp";

function PlayPurpose() {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const { loading } = useSelector((state: any) => state.loading);

  const dispatch = useDispatch();

  const handleEmailVerification = async (email: string): Promise<boolean> => {
    setLoading(true);
    dispatch(setLoading(true));
    try {
      let type = "PLAYBOOK";
      let response = await axios.post(API.NEWSLETTER, { email, type });

      if (response?.data?.message) {
        toast.success("Thanks for verifying your email.");
        dispatch(setLoading(false));
        window.open(
          "https://storage.googleapis.com/blackandbelonging/videoevent/B-B-Blitz-PDF.pdf",
          "_blank"
        );
        setShowConfirmationModal(!showConfirmationModal);
        return true;
      }
    } catch (error: any) {
      console.log("error", error);
      dispatch(setLoading(false));
      toast.error(error?.response?.data?.message[0]);
      return false;
    } finally {
      dispatch(setLoading(false));
      return true;
    }
  };

  return (
    <div className="purpose-section">
      <div className="purpose-sectionInner">
        <div className="text-content">
          <h2>Purpose</h2>
          <p>
            This playbook synthesizes ideas that emerged from visioning sessions
            with youth we were supporting as they implemented youth-led
            initiatives in their schools and communities, including:
          </p>
          <ul>
            <li>
              <img src={tick} alt="pinktick" />
              School policy convenings with administrators
            </li>
            <li>
              <img src={tick} alt="pinktick" />
              Research studies about students’ in-school experiences
            </li>
            <li>
              <img src={tick} alt="pinktick" />
              Fashion shows featuring clothing items that youth designed to
              serve as conversation pieces regarding issues that are on young
              peoples’ minds and hearts.
            </li>
            <li>
              <img src={tick} alt="pinktick" />
              Cultural events that honored and affirmed youth from various
              ethnic backgrounds
            </li>
            <li>
              <img src={tick} alt="pinktick" />
              Research presentations at school staff meetings and national
              conferences
            </li>
          </ul>
          <button
            className="launch-button"
            onClick={() => setShowConfirmationModal(!showConfirmationModal)}
          >
            Launch Playbook
          </button>
        </div>
        <div className="image-content">
          <img src={citeImg} alt="Purpose Visual" />
        </div>
      </div>
      <div className="adolescent">
        <p>
          Adolescents’ sense of well-being, achievement beliefs, and academic
          performance are linked to their belonging experiences in institutional
          settings—making belonging a developmental priority and psychological
          necessity for youth. The Opportunities to Belong framework, proposed
          by Gray and colleagues (2018), offers educators tools that can enable
          them to cultivate institutional opportunities to belong by providing
          youth time and space to address barriers and inequitable institutional
          conditions that ultimately devalue and restrict the leadership
          contributions of marginalized youth. Although some youth-serving
          institutions recognize that youth experiences should inform
          decision-making on institutional policies, there are few detailed
          examples and powerful illustrations of how such opportunities can be
          structured that are well documented in publicly accessible outlets.
        </p>

        <p>
          Our hope is that this playbook will be helpful for decision-makers in
          youth-serving institutions to: (1) crystallize a working understanding
          of institutional opportunities to belong that can be applied to future
          policy and practice work; (2) integrate youths’ subject-matter
          expertise and information resources into ongoing decision-making about
          educational policies and practices; (3) challenge existing assumptions
          about substantive youth engagement in leadership roles; and (4)
          identify liberating practices and approaches that can become
          cornerstones for future youth-led initiatives. We present a set of
          plays as a starting point for developing your own plays and effective
          practices that work in your community.
        </p>
      </div>
      <EmailVerifyModal
        title="Email Verification"
        show={showConfirmationModal}
        subtext="In order to access this free resource, we kindly request that you enter your email address."
        handleClose={() => setShowConfirmationModal(!showConfirmationModal)}
        handleNext={handleEmailVerification}
        loading={loading}
        placeholder="Please enter your email to access the playbook"
      />
    </div>
  );
}

export default PlayPurpose;
