import { Navigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import { isValidJWT } from "../../utils/helper";

export default function Protect({ children }) {
  const jwt = localStorage.getItem("jwt");
  if (!jwt) return <Navigate to="/" />;
  if (!isValidJWT(jwt)) return <Navigate to="/" />;
  const decodedToken = jwtDecode(jwt);
  if (!decodedToken.id) return <Navigate to="/" />;
  return children;
}
