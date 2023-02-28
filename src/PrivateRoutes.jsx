import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "./service/authorize";


const PrivateRoutes = () => {
 //let auth = { token: false };
 
  return getUser() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;