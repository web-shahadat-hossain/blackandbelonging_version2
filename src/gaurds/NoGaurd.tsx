import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { ROUTES } from "../utils/constant";
import { ReactNode } from "react";

type propTypes = {
  children?: ReactNode;
};

const NoGaurd = (props: propTypes) => {
  let { auth } = useAppSelector((state) => state.user);
  const location = useLocation();
  const from = (location.state && location.state.from.pathname) || ROUTES.HOME;

  if (auth) {
    return <Navigate to={from} replace />;
  }
  return props.children;
};

export default NoGaurd;
