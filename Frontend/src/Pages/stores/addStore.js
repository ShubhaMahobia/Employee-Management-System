import React from "react";
import storeService from "../../service/storeService";
class AddStore extends React.Component{
//constructor

constructor(props){
    super(props)
    this.state = {
        storeName:'',
        city:'',
        pinCode:'',
        storeType:''
    };

   
}

  componentDidMount(){
    console.log ("In Component Did Mount");

  }

  
  changeCity=(event)=>{
    console.log("in the city  Handler");
    console.log(event.target.value);
    this.setState({city:event.target.value})
  }

  changeStoreName=(event)=>{
    console.log("in the Store Name  Handler");
    console.log(event.target.value);
    this.setState({storeName:event.target.value})
  }

  changePinCode=(event)=>{
    console.log("in the PinCode  Handler");
    console.log(event.target.value);
    this.setState({pinCode:event.target.value})
  }

  changeStoreType=(event)=>{
    console.log("in the StoreType  Handler");
    console.log(event.target.value);
    this.setState({storeType:event.target.value})
  }
  
  
 


   addStore=(event)=>{
    event.preventDefault();
    let stores ={
    "storeName" : this.state.storeName,
    "city" : this.state.city,
    "pinCode" : this.state.pinCode,
    "storeType" : this.state.storeType
    }


    if(this.state.storeName != '' && this.state.city != '' && this.state.storeType != '' && this.state.pinCode != '' ){
      storeService.addStore(stores);
      alert("Store Added Successfully!")
      window.location.reload();
    }
    else{
      alert("Please fill the details correctly")
    }
   
  }




 // render 
 render(){
    return (
        <div className="container mt-4 col-5">
          <h6 className="display-6">STORE REGISTRATION FORM</h6>
        <form>
                <div style={{marginTop : "2vh"}} className="form-group">
                    <input type="text" className="form-control" onChange={this.changeStoreName}   placeholder="Enter Store Name"></input>
                    
                </div>
                <div style={{marginTop : "2vh"}} className="form-group">
                    <input type="text" className="form-control" onChange={this.changeCity}  placeholder="Enter City"></input>
                    
                </div>
                <div style={{marginTop : "2vh"}}  className="form-group">
                    <input type="text" className="form-control" onChange={this.changePinCode} placeholder="Enter City Pincode" ></input>
                </div>
                <div style={{marginTop : "2vh"}}  className="form-group">
                    <input type="text" className="form-control" onChange={this.changeStoreType} placeholder="Enter Store Type" ></input>
                </div>
                <button  style={{marginTop : "2vh"}} type="submit" className="btn btn-primary  w-100" onClick={this.addStore}>SAVE</button>
        </form>
</div>
    );
 }


}
export default AddStore