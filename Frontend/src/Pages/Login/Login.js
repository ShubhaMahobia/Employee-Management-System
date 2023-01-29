
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import userService from "../../service/userService"
import {doLogin} from "../auth/index"
import "../Login/Login.css"



function Login(){
const [LoginDetail,setLoginDetail]=useState({
   userName: '',
   password:''
})

const navigate = useNavigate()

const handleChange=(event,field)=>{

  let acutalValue = event.target.value
  setLoginDetail({
    ...LoginDetail,
    [field]:acutalValue
  })

}



const handleFormSubmit=(event)=>{
  event.preventDefault();
  console.log(LoginDetail);
  if(LoginDetail.userName === ""){
    toast("Username required");
    return;
  }
  userService.loginUser(LoginDetail).then((jwtTokenData)=>{
    console.log("userlogin : ")
    console.log(jwtTokenData)
    doLogin(jwtTokenData,()=>{
      console.log("Login detail is saved to local storage")
      navigate("/home")
      alert("Logged in Successfully")
      window.location.reload();
    })




  }).catch(error=>{
    console.log(error)
    toast.error("Something went wrong on server !!")
    alert("Username/Password are inncorrect")
  })
 
    
};

const handleReset=(event)=>{
  setLoginDetail({
    userName:"",
    password:""
  });
}

    return( 
      <body style={{backgroundColor : 'black', height: '92.1vh'}}>
        <div className="container col-3">
          <h2 style={{color : 'white', paddingTop : '20%', paddingBottom : '10%'}} className="displayy-4">LOGIN</h2>
          <form onSubmit={handleFormSubmit} >
            <div className="form-group">
            <p>
            <input className="form-control" type="text" value={LoginDetail.userName} onChange={(e)=>handleChange(e,'userName')}  name="username" placeholder="Username" required   ></input>
            </p>
            </div>
            <p>
            <input className="form-control " type="password"  name="password" onChange={(e)=>handleChange(e,'password')}  value={LoginDetail.password} placeholder="Password" required></input>
            </p>
            <p>
            <input className="btn btn-primary w-100" type="submit"  value="Login"></input>
            </p>
            <button onClick={handleReset} className="btn btn-dark w-100">Reset</button>
            <p style={{color : 'white'}} className="px-4" >Don't have Account &nbsp;<a href="/register">Signup</a></p>
          </form>
        </div>
        </body>
        
        
 )

}


export default Login