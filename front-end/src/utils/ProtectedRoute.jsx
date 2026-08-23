import { Navigate } from "react-router-dom";

import { isAuthenticated } from "./auth";

const PrivateRoute = ({ children }) =>
  isAuthenticated() ? children : <Navigate to="/login" replace />;

export default PrivateRoute;
