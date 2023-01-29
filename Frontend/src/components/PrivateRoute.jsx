import React from "react";
import { Outlet ,Navigate } from "react-router-dom";
import { isLoggedIn } from "../Pages/auth";

const PrivateRoute = () =>{


    if(isLoggedIn()){
        return <Outlet/>
    }else
        return <Navigate to={"/login"}></Navigate>

}

export default PrivateRoute