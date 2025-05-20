import "../pages/admin/Playbooks/Playbooks.scss";
import citeImg from "../../assets/icons/citeplaybook.png";
function SitePlayBook() {
  return (
    <div className="sitePlayBook">
      <h3 className="commonPlayHead">How To Cite This Playbook</h3>
      <p className="sitePlayBook_text">
        Gray, D. L., Ali, J., Allah, K., & Swinton, M. (2024). B&B Blitz: Using
        practical belonging insights to structure youth-led initiatives in
        schools and communities. Durham, NC: Black and Belonging.
      </p>
      <div className="sitePlayBook_inner">
        <img src={citeImg} alt="imgs" />
        <div className="sitePlayBook_inner_right">
          <h3>Acknowledgments</h3>
          <p>
            We want to give a heartfelt shout-out to the Student Experience
            Research Network (SERN) and MacKenzie Scott for supporting our
            efforts to bring this resource to life and ensure its widespread
            reach. This support has provided young people with the protected
            thinking time needed to reflect on the principles and practices
            underlying their successful youth-led initiatives. Our supporters
            have demonstrated a steadfast commitment to connect students,
            community organizations, leaders, scholars, and educators in order
            to build bridges across isolated systems and stakeholders. Please
            note that this practical resource is designed to elevate the
            perspectives of our youth collaborators (as well as our own
            learnings from supporting youth-led initiatives). Therefore, these
            views may not necessarily represent the position of the various
            organizations and supporters that we are affiliated with.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SitePlayBook;
