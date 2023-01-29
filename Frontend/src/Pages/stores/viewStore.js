
import React from 'react';
import storeService from '../../service/storeService';
//Component
class ViewStore extends React.Component {

  // constructor
  constructor(props) {
    super(props);
    this.state = {stores:[]};
  }

  //ComponentDidMount
  componentDidMount(){
    //method-to call the API(HTTP)
    console.log ("In Component Did Mount");
    storeService.getAllStore()
    .then(res=>{
      console.log("Res data is "+JSON.stringify(res.data))
      this.setState({stores:res.data})
    })
    .catch(console.log)
  }


  //Delete Process 
  deleteStore=(storeId)=>{
    console.log("Inside Delete Method " + storeId);
    storeService.deleteStore(storeId)
    .then(res=>{
      this.setState({stores:this.state.stores.filter(stores=>stores.storeId != storeId )})
    });
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
                <th scope="col">Store ID</th>
                <th scope="col">STORE NAME</th>
                <th scope="col">CITY</th>
                <th scope="col"> PINCODE</th>
                <th scope="col"> STORE TYPE</th>
            </tr>
            </thead>
            <tbody>
        {this.state.stores.map((stores)=>(



            <tr>
                <th scope="row">{stores.storeId}</th> 
                <td>{stores.storeName}</td>
                <td>{stores.city}</td>
                <td>{stores.pinCode}</td>
                <td>{stores.storeType}</td>
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
export default ViewStore

