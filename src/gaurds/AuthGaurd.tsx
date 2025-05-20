import { ReactNode } from "react";
import { useAppSelector } from "../app/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../utils/constant";

type propTypes = {
  children?: ReactNode;
};

const AuthGaurd = (props: propTypes) => {
  const { auth } = useAppSelector((state) => state.user);
  const location = useLocation();
  if (!auth) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }
  return props.children;
};

export default AuthGaurd;
