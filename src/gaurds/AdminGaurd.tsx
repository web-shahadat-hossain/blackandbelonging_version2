import { ReactNode } from "react";
import { useAppSelector } from "../app/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../utils/constant";

type propTypes = {
  children?: ReactNode;
};

const AdminGaurd = (props: propTypes) => {
  const { isAdmin } = useAppSelector((state) => state.user);
  const location = useLocation();
  if (!isAdmin) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }
  return props.children;
};

export default AdminGaurd;
