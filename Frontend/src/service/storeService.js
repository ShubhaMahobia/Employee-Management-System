import axios from 'axios';
import { json } from 'react-router-dom';
import { isLoggedIn } from '../Pages/auth';
const API_BASE_URL ="http://localhost:8080";

class userService{

    
addStore(store){
    return axios.post(API_BASE_URL + "/jumpstart/addStore",store)
}

loginUser(LoginDetail){
    return axios.post(API_BASE_URL + "/api/v1/auth/login",LoginDetail).then((Response)=> Response.data)
}

getAllStore() {
    return axios.get(API_BASE_URL + "/jumpstart/viewStore")
}

deleteStore(storeId){
    return axios.delete(API_BASE_URL + "/deleteStore" + "/" + storeId)
}
}


export default new userService()