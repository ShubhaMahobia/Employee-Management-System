

import { json } from "react-router-dom"

//isLoggedIN 
export const isLoggedIn =()=>{
    let data = localStorage.getItem("data")
    if(data==null){
        return false
    }
    else
        return true
};


//do login=> data => set to localStorage

export const doLogin = (data,next) =>{
    localStorage.setItem("data",JSON.stringify(data));
    next()
}



//do logout 

export const doLogout = (next) =>{
    localStorage.removeItem("data")
    next()
}


//get currentUser

export const getCurrentUserDetail = () =>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data"))?.user;
    }else
        return undefined;
}