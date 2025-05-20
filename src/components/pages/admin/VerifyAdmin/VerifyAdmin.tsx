import { Container } from "react-bootstrap";
import "./VerifyAdmin.scss";
import Spinner from "../../../common/Spinner/Spinner.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API, ROUTES } from "../../../../utils/constant.ts";
import toast from "react-hot-toast";
import Button from "../../../common/Button/Button.tsx";
import { useAppDispatch } from "../../../../app/hooks.ts";
import { setAdmin } from "../../../../features/user/user.slice.ts";

const VerifyAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Please wait...");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { slug, id, token } = useParams();
  const dispatch = useAppDispatch();

  const verifyAdmin = async () => {
    setLoading(true);
    try {
      await axios.get<{
        email: string;
        name: string;
      }>(API.GET_ADMIN_PROFILE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      setMessage("Redirecting...");
      dispatch(setAdmin(true));
      if (id === "playbook" && slug === "add") {
        return navigate(ROUTES.ADD_PLAYBOOK);
      }
      if (id && slug) {
        navigate(ROUTES.PLAYBOOK.replace(":slug", slug).replace(":id", id));
      }
    } catch (error: any) {
      if (
        error.response &&
        error.response.status === 401 &&
        error.response.data &&
        error.response.data.message === "Unauthorized"
      ) {
        toast.error("Unauthorized");
        setLoading(false);
        setMessage("Unauthorized, Go Back");
        setError(true);
      }
    }
  };

  useEffect(() => {
    verifyAdmin();
  }, [slug, id, token]);

  return (
    <section className="verify_admin_design">
      <Container>
        <div className="verify_admin_design_card">
          <h2>
            Verifying
            <span>{message}</span>
          </h2>
          {loading && <Spinner />}
          {error && <Button className="mt-3 d-block mx-auto">Go Back</Button>}
        </div>
      </Container>
    </section>
  );
};

export default VerifyAdmin;
