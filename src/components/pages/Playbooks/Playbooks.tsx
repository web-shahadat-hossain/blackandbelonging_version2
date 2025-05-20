import "./Playbooks.scss";
import PlayPurpose from "../../Purpose/PlayPurpose";
import playbanner from "../../../../public/playbooksCoverImg.png";
import SitePlayBook from "../../SitePlayBook/SitePlayBook";
import AboutAuthor from "../../AboutAuthor/AboutAuthor";
import { useState, useEffect } from "react";
import Loader from "../../common/Loader/Loader";
import { Helmet } from "react-helmet";

const Playbooks = () => {
  const [loading, setLoading] = useState(true); // Set initial loading to true

  useEffect(() => {
    // Simulating data fetch with a timeout
    const fetchData = async () => {
      setLoading(true); // Show loader at start of async operation
      try {
        // Simulate a delay for data fetching
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false); // Hide loader after async operation completes
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Helmet>
        <title>About | Black and Belonging</title>
      </Helmet>
      <div className="playbook-container">
        <div className="playbook-container_banner">
          <img src={playbanner} alt="Playbooks Banner" />
        </div>
        <PlayPurpose />
        <SitePlayBook />
        <AboutAuthor />
      </div>
    </>
  );
};

export default Playbooks;
