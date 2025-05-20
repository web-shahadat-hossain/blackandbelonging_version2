import { Container } from "react-bootstrap";
import "./Playbooks.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../utils/constant";
import { usePlaybooks } from "./usePlaybooks";
import Spinner from "../../../common/Spinner/Spinner";

const Playbooks = () => {
  const { loading, playbooks } = usePlaybooks();
  return (
    <section className="playbooks">
      <Container>
        <div className="playbooks_box">
          <h2>Playbooks</h2>
          {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner />
            </div>
          ) : (
            <ul>
              {playbooks.length > 0 ? (
                playbooks.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        to={ROUTES.PLAYBOOK.replace(":slug", item.slug).replace(
                          ":id",
                          item.id
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })
              ) : (
                <li>
                  <p>No Record Found</p>
                </li>
              )}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Playbooks;
