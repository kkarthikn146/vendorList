// eslint-disable-next-line
import React,{useState,useEffect} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import axios from 'axios';
import {
    ListGroup,ListGroupItem,Button
} from 'reactstrap'

const AllVendor = () => {

    const [vendorList,setVendorList] = useState({});
    useEffect(()=>{
      axios.get('/api')
      .then((response)=>{
        var data = response.data;
        setVendorList(data);
        console.log("Data received..");
        
      })
      .catch((error)=>{
        console.log(error);
      });
    },[])
    
    //remove the vendor.
    function removeUser(id){
     var del = {delValue:id};
      axios({
        url:'http://localhost:3000/api/delete',
        method:'POST',
        data:del
      })
      .then(()=>{
        console.log("Data deleted successfully");

      })
      .catch(()=>{
        console.log("Internel server error");
      });

      window.location.reload(false);
}

    return (
        <ListGroup className="mt-4">
          {vendorList.length > 0 ? (
            <>
            <ListGroupItem className="d-flex">
            <span className="values name title">Vendor Name</span><span className="values title">Type</span><span className="values title">Contact Email</span><span className="values title">Website URL</span>
            </ListGroupItem>
            
              {vendorList.map(vendor => (
                <ListGroupItem className="d-flex" key={vendor.id}>
                  <span className="values name">{vendor.vendorName}</span><span className="values">{vendor.title}</span><span className="values">{vendor.contactEmail}</span><span className="values">{vendor.websiteURL}</span>
                  <div className="ml-auto">
                    <Link to={`/edit/${vendor.id}`}  style={{backgroundColor:"#273c75",color:"white"}}  className="btn mr-1"><EditIcon /></Link>
                    <Button  onClick={()=>removeUser(vendor.id)} style={{backgroundColor:"#7f8fa6"}} ><DeleteIcon /></Button>   
                  </div>
                </ListGroupItem>
              ))}

            </>
          ) : vendorList.length === 0 ? <h4 className="text-center">There is no vendors in the List</h4>:(
              <h4 className="text-center">Loading...</h4>
            )
            }
            
        </ListGroup>
      )

}

export default AllVendor


