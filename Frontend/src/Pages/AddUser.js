import React from "react";
import userService from "../service/userService";
class AddUser extends React.Component{
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
    window.location.reload();
    
  }


 // render 
 render(){
    return (
        <div className="container">
          <h1 className="title">Registration Form</h1>
        <form>
                <div className="form-group">
                    <input type="text" className="form-control" onChange={this.changeFirstName}   placeholder="Enter FirstName "></input>   
                </div>
                <br/>
                <div className="form-group">
                    <input type="text" className="form-control" onChange={this.changeLastName}  placeholder="Enter LastName"></input>
                <br/>  
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" onChange={this.changeemail} placeholder="Enter Email" ></input>
                </div>
                <br/>
                <div className="form-group">
                    <input type="text" className="form-control" onChange={this.changePhoneNumber} placeholder="Enter Phone Number" ></input>
                </div>
                <br/>
                <div className="form-group">
                  <p>Enter Date of Joining</p>
                    <input type="date" className="form-control" onChange={this.changejoinedOn} placeholder="Enter Date of Joining" ></input>
                </div>
                <br/>
                <div className="form-group">
                    <input type="text" className="form-control" onChange={this.changeuserName} placeholder="Enter UserName" ></input>
                </div>
                <br/>
                <div className="form-group">
                    <input type="password" className="form-control" onChange={this.changePassword} placeholder="Enter Password" ></input>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary" onClick={this.addUser}>SAVE</button>
        </form>
</div>
    );
 }


}
export default AddUser