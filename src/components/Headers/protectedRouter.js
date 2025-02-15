import { HiHome } from "react-icons/hi";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Home from "./home";



const ProtectedRoutes=({children})=>{
    // const navi=useNavigate();
    // const token=localStorage.getItem("oauthToken");
    // console.log(token);
    // if(!token)
    // {
    //    return <Home/>
    // }
    // return ;
    const token = localStorage.getItem("oauthToken"); // Check if the user is authenticated
    return token ? <Outlet /> : <Navigate to="/home" />;



}
export default ProtectedRoutes;