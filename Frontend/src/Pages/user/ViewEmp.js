
import React from 'react';
import userService from '../../service/userService';
//Component
class Viewemployee extends React.Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {users:[]};
  }

  //ComponentDidMount
  componentDidMount(){
    //method-to call the API(HTTP)
    console.log ("In Component Did Mount");
    userService.getAllUser()
    .then(res=>{
      console.log("Res data is "+JSON.stringify(res.data))
      this.setState({users:res.data})
    })
    .catch(console.log)
  }
  // render 
  render(){
    return (
        <body >
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-2"> 
        <table style={{marginTop:"5vh"}} className="table table-hover">
            <thead>
            <tr>
                <th scope="col">User Id</th>
                <th scope="col">User Name</th>
                <th scope="col">First Name</th>
                <th scope="col"> Last Name</th>
                <th scope="col"> ROLE</th>
                <th scope="col"> Email</th>
                <th scope="col"> Phone Number</th>
                <th scope="col"> Joined On</th>
          

            </tr>
            </thead>
            <tbody>
        {this.state.users.map((users)=>(



            <tr>
                <th scope="row">{users.id}</th> 
                <td>{users.userName}</td>
                <td>{users.firstName}</td>
                <td>{users.lastName}</td>
                <td>{users.role}</td>
                <td>{users.email}</td>
                <td>{users.phoneNumber}</td>
                <td>{users.joinedOn}</td>
                
            </tr>
 ))}
 

            </tbody>
            </table>
       </div>

      </div>
      </body>
  );
  }
  
}

// Need to export 
export default Viewemployee

