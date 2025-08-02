import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Loader from "../../common/Loader/Loader";
import Hero from "./Hero";
import ContentSection from "./ContentSection";
import PurposeSection from "./PurposeSection";
import AcknowledgmentsSection from "./AcknowledgmentsSection";
import ExploreInitiativesSection from "./ExploreInitiativesSection";
import AuthorsSection from "./AuthorsSection";

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
      <div style={{ backgroundColor: "#1a1a2e", color: " #ffffff" }}>
        <Hero />
        <ContentSection />
        <PurposeSection />
        <AcknowledgmentsSection />
        <ExploreInitiativesSection />
        <AuthorsSection />
      </div>
    </>
  );
};

export default Playbooks;
