import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../../../utils/constant";
import "./Playbook.scss";
import PlayBookSidebar from "./PlayBookSidebar/PlayBookSidebar";
import PlaybookContent from "./PlaybookContent/PlaybookContent";

const Playbook = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === ROUTES.PLAYBOOK) {
      const htmlElement = document.documentElement;
      htmlElement.style.fontSize = "100%";
      return () => {
        htmlElement.style.fontSize = "";
      };
    }
  }, [location]);

  return (
    <div className="play_book_page">
      <PlayBookSidebar />
      <PlaybookContent />
    </div>
  );
};

export default Playbook;
