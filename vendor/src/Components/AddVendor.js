import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddVendor = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [mail, setMail] = useState('');
  const [url, setURL] = useState('');
  
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      vendorName :name ,
      title:type ,
      contactEmail:mail ,
      websiteURL:url
      }

      axios({
        url:'http://localhost:3000/api/save',
        method:'POST',
        data:newUser
      })
      .then(()=>{
        console.log("Data saved successfully");
      })
      .catch(()=>{
        console.log("Internel server error");
      })
     // console.log(newUser);
   
    history.push("/");
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeType = (e) => {
    setType(e.target.value);
  }

  const onChangeMail = (e) => {
    setMail(e.target.value);
  }

  const onChangeURL = (e) => {
    setURL(e.target.value);
  }
    return (
        <div>
            <Form onSubmit={onSubmit}>
                
                <FormGroup>
                <Label>Vendor Name</Label>
                <Input type="text" value={name} onChange={onChangeName} name="name" placeholder="Name"></Input>
                </FormGroup>
                <FormGroup>
                <Label>Type</Label>
                <Input type="text" value={type} onChange={onChangeType} name="type" placeholder="Type"></Input>
                </FormGroup>
                <FormGroup>
                <Label>Contact Email</Label>
                <Input type="text" value={mail} onChange={onChangeMail} name="mail" placeholder="Email"></Input>
                </FormGroup>
                <FormGroup>
                <Label>Website URL</Label>
                <Input type="text" value={url} onChange={onChangeURL} name="url" placeholder="Website URL"></Input>
                </FormGroup>
                
                <Button type="submit">Submit</Button>
                <Link to="/" className="btn btn-danger ml-2 ">cancel</Link>
            </Form>
        </div>
    )
}
