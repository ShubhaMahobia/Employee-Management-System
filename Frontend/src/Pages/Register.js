import React from "react";
import userService from "../service/userService";
import { ImRocket } from "@react-icons/all-files/im/ImRocket";

class Register extends React.Component{
    

//constructor

constructor(props){
  super(props)
  this.state = {
      firstName:'',
      lastName:'',
      userName:'',
      email:'',
      password:'',
      phoneNumber:'',
      joinedOn:'',
      
  };

  

  

   
}

  //ComponentDidMount
  componentDidMount(){
    //method-to call the API(HTTP)
    console.log ("In Component Did Mount");
    
  
  }

  changeFirstName=(event)=>{
    this.setState({firstName:event.target.value})
  }
  changeLastName=(event)=>{
    this.setState({lastName:event.target.value})
  }
  changeuserName=(event)=>{
    this.setState({userName:event.target.value})
  }
  changeemail=(event)=>{
    this.setState({email:event.target.value})
  }
  changePhoneNumber=(event)=>{
    this.setState({phoneNumber:event.target.value})
  }
  changejoinedOn=(event)=>{
    this.setState({joinedOn:event.target.value})
  }
  changePassword=(event)=>{
    this.setState({password:event.target.value})
  }

  addUser=(event)=>{
    let user ={
    "firstName" : this.state.firstName,
    "lastName" : this.state.lastName,
    "userName" : this.state.userName,
    "email" : this.state.email,
    "password" : this.state.password,
    "phoneNumber" : this.state.phoneNumber,
    "joinedOn" : this.state.joinedOn,
    }
    
    userService.addUser(user);

    
  }


 // render 
 render(){

    return (


        
        <div className="container mt-4 col-5">
          <h2 className="display-4">Registration Jumpstart <ImRocket /></h2>
        <form action="/thankyou" >
                <div className="form-group">
                    <input type="text" className="form-control" onChange={this.changeFirstName}   placeholder="Enter First Name " required></input>   
                </div>
                <br/>
                <div className="form-group">
                    <input type="text" className="form-control" onChange={this.changeLastName}  placeholder="Enter Last Name" required></input>
                <br/>  
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" onChange={this.changeemail} placeholder="Enter Email"  required></input>
                </div>
                <br/>
                <div className="form-group">
                    <input type="number" className="form-control" onChange={this.changePhoneNumber} placeholder="Enter Phone Number"  required></input>
                </div>
                <br/>
                <div className="form-group">
                    <input type="number" className="form-control" onChange={this.changejoinedOn} placeholder="Enter Year of Joining"  required></input>
                </div>
                <br/>
                <div className="form-group">
                    <input type="text" className="form-control" onChange={this.changeuserName} placeholder="Enter UserName" required ></input>
                </div>
                <br/>
                <div className="form-group">
                    <input type="password" className="form-control" onChange={this.changePassword} placeholder="Enter Password"  required></input>
                </div>
                <br/>
                <button  className="btn btn-primary  w-100" onClick={this.addUser}>SAVE</button>
        </form>
</div>
    );
 }


}
export default Register