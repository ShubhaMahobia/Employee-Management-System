import axios from 'axios';
import { json } from 'react-router-dom';
import { isLoggedIn } from '../Pages/auth';
const API_BASE_URL ="http://localhost:8080";

class userService{

    
addUser(user){
    return axios.post(API_BASE_URL + "/jumpstart/register",user)
}

loginUser(LoginDetail){
    return axios.post(API_BASE_URL + "/api/v1/auth/login",LoginDetail).then((Response)=> Response.data)
}

getAllUser() {
    return axios.get(API_BASE_URL + "/jumpstart/viewUsers")
}


getCurrentUser() {
    if(!isLoggedIn()) {
        return Promise.reject("No access token set.");
    }else{
        return({
            url: API_BASE_URL + "/api/v1/auth/userinfo",
            method: 'GET'
        });
    }



   
    
}
}


export default new userService()