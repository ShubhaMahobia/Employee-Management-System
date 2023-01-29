
import './App.css';
import { BrowserRouter as Router,
Route, Routes,Link, useNavigate} from "react-router-dom";
import Register from './Pages/Register';
import Login from './Pages/Login/Login';
import Error from './Pages/errorPage';
import Thank from './Pages/Thankyouu';
import Dashboard from './Pages/AdminDashboard/Dashboard'
import PrivateRoute from './components/PrivateRoute';
import { ImRocket } from "@react-icons/all-files/im/ImRocket";
import UserProfile from './Pages/user/profile/Landing';
import { useEffect, useState } from 'react';
import { doLogout, isLoggedIn } from './Pages/auth';
import background from "./assets/background.png"
import LandingPage from './Pages/user/profile/Landing';
import AddStore from './Pages/stores/addStore';
import ViewStore from './Pages/stores/viewStore';
import Viewemployee from './Pages/user/ViewEmp';



function App() {

   const [login,setLogin] = useState(false)

  useEffect(()=>{

    setLogin(isLoggedIn())
  },[login])

  const logout =()=>{
    doLogout(()=>{
       setLogin(false)
       
    })
  }


  return (
    <div className="App">
      <div>
     <Router>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand px-4" href="/home"> &nbsp; Jump Start <ImRocket /></a>
      </div>
      {
        login && (
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
              <li>
                <Link  to={"/addStore"} class="nav-link px-4">Add Store</Link>
              </li>
              <li>
                <Link  to={"/view"} class="nav-link px-4">View Store </Link>
              </li>
              <li>
                <Link  to={"/addUser"} class="nav-link px-4">Add Employee </Link>
              </li>
              <li>
                <Link  to={"/viewEmp"} class="nav-link px-4">View Employee </Link>
              </li>
              <li>
                <Link onClick={logout}  to={"#"} class="nav-link px-4">Logout</Link>
              </li>
            </ul>
        )
      }

      {
        !login && (
        <ul  class="navbar-nav mr-auto mt-2 mt-lg-0 ">
          <li>
            <Link  to={"/login"} class="nav-link">Login</Link>
          </li>
          <li>
            <Link  to={"/register"} class="nav-link">Register</Link>
          </li>
        </ul>
        )
      }
</nav>
<nav>
</nav>

      <Routes>
        
        <Route path='/addUser' element = {<Register/>}>Home</Route>
        <Route path='/' element = {<Login/>}>Home</Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/thankyou' element = {<Thank/>}></Route>
        <Route path='/user' element = {<PrivateRoute/>}></Route>
        <Route path='/addStore' element = {<AddStore/>}></Route>
        <Route path='/home' element = {<LandingPage/>}></Route>
        <Route path='/register' element = {<Register/>}></Route>
        <Route path='/view' element = {<ViewStore/>}></Route>
        <Route path='/viewEmp' element = {<Viewemployee/>}></Route>
        <Route path='*' element = {<Error/>}></Route>
      </Routes>
     </Router>
    </div>
    </div>
  );
}

export default App;
