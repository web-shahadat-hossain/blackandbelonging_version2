import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Application from "./Application";
import WebsiteLoader from "./components/common/WebsiteLoader/WebsiteLoader";
import ReactGA from "react-ga4";
import { STREAM_DETAILS } from "./utils/constant";
import { formatDate } from "./utils/helpers";

ReactGA.initialize(STREAM_DETAILS.MEASUREMENT_ID);

function App() {
  const [loading, setLoading] = useState(true);
  const today = formatDate(new Date());
  console.log(today);
  useEffect(() => {
    if (Number(localStorage.getItem("reload")) === 0) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    localStorage.setItem(
      "reload",
      JSON.stringify(Number(localStorage.getItem("reload")) + 1)
    );
  }, []);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Homepage",
    });
  }, []);

  return (
    <>
      {loading && Number(localStorage.getItem("reload")) === 0 ? (
        <WebsiteLoader />
      ) : null}
      <Toaster />
      <Application />
    </>
  );
}

export default App;
