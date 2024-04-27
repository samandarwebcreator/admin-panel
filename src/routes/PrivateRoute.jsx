import { Outlet } from "react-router-dom";
import ErrorForbidden from "../pages/error/Error403";

const PrivateRoutes = ({ token }) => {
  return token ? <Outlet /> : <ErrorForbidden />;
};

export default PrivateRoutes;
