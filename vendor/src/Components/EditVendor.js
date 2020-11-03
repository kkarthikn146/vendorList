import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import {
    Form,FormGroup,Input,Button,Label
} from 'reactstrap'

export const EditVendor = (props) => {
  
  const [selectedUser, setSelectedUser] = useState({
      id: '',
      vendorName  : '',
      title:'' ,
      contactEmail: '' ,
      websiteURL: ''
    })
    const history = useHistory();
    const currentUserId = props.match.params.id;
  
    useEffect(() => {
      const userId = currentUserId;


      axios.get('/api/'+userId)
      .then((response)=>{
        var data = response.data;
        setSelectedUser(data[0]);
       // console.log(data[0]);
       // console.log("Single Data received..");
      })
      .catch((error)=>{
        console.log(error);
      });
      
    }, [ currentUserId])
  
    const onChange = (e) => {
      setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }
  
    const onSubmit = (e) => {
      e.preventDefault();


      axios({
        url:'http://localhost:3000/api/update',
        method:'POST',
        data:selectedUser
      })
      .then(()=>{
        console.log("Data updated  successfully");
      })
      .catch(()=>{
        console.log("Internel server error");
      })

      

      history.push("/")
    }

    return (
        <div>
           <Form onSubmit={onSubmit}>
                <FormGroup>
                <Label>Vendor Name</Label>
                <Input type="text" value={selectedUser.vendorName} onChange={onChange} name="vendorName" placeholder="" required></Input>
                </FormGroup>
                <FormGroup>
                <Label>Type</Label>
                <Input type="text" value={selectedUser.title} onChange={onChange} name="title" placeholder="" required></Input>
                </FormGroup>
                <FormGroup>
                <Label>Contact Email</Label>
                <Input type="text" value={selectedUser.contactEmail} onChange={onChange} name="contactEmail" placeholder="" required></Input>
                </FormGroup>
                <FormGroup>
                <Label>Website URL</Label>
                <Input type="text" value={selectedUser.websiteURL} onChange={onChange} name="websiteURL" placeholder="" required></Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
                <Link to="/" className="btn btn-danger ml-2 ">cancel</Link>
            </Form>
        </div>
    )
}
//rmdir /s /q .git