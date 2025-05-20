import gray from "../../assets/images/Gray.png";
import ali from "../../assets/images/Ali.png";
import melina from "../../assets/images/Swinton.png";
import alah from "../../assets/images/Allah 1.png";
import LinkedIn from "../../assets/images/linkedin.png";
import { TEAM_LINKED_LINKS } from "../../utils/constant";

function AboutAuthor() {
  const authors = [
    {
      id: 1,
      imgSrc: gray,
      authname: "Dr. DeLeon Gray",
      linkedinUrl: TEAM_LINKED_LINKS.deleon,
    },
    {
      id: 2,
      imgSrc: ali,
      authname: "Dr. Joanna Ali",
      linkedinUrl: TEAM_LINKED_LINKS.Joanna,
    },
    {
      id: 3,
      imgSrc: alah,
      authname: "Dr. Kia Allah",
      linkedinUrl: TEAM_LINKED_LINKS.Kia,
    },
    {
      id: 4,
      imgSrc: melina,
      authname: "Malenia Swinton",
      linkedinUrl: TEAM_LINKED_LINKS.Malenia,
    },
  ];
  const handleImageClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="aboutAuthor">
      <h3>About The Authors</h3>
      <div className="authors-container">
        {authors.map((author) => (
          <div className="author-box" key={author.id}>
            <img
              src={author.imgSrc}
              onClick={() => handleImageClick(author.linkedinUrl)}
              alt="imgs"
            />
            <h4>{author.authname}</h4>
            <span>
              <img
                src={LinkedIn}
                alt="LinkedIn"
                onClick={() => handleImageClick(author.linkedinUrl)}
                style={{ cursor: "pointer" }} // Optional: changes cursor to pointer
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutAuthor;
