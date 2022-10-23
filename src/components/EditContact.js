import React, {useState, useContext, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { Form,FormGroup,Label,Input,Button } from 'reactstrap';

const EditContact = (props) => {
    const [selectedContact, setSelectedContact] = useState({
        id:'',
        firstName:'',
        lastName:'',
        phoneNumber:''
    })

    const { contacts, editContact} = useContext(GlobalContext);
    const history = useHistory();
    const currentContactId = props.match.params.id;

    useEffect(()=>{
        const contactId = currentContactId;
        const selectedContact = contacts.find(contact => contact.id===contactId)
        setSelectedContact(selectedContact);
    },[currentContactId, contacts])

    const onSubmit = () =>{
        editContact(selectedContact);
        history.push('/');
    }

    const onChange =(e)=>{
        setSelectedContact({...selectedContact,[e.target.name]:e.target.value})
    }

  return (
    <Form onSubmit={onSubmit}>
        <FormGroup>
            <Label>First Name</Label>
            <Input type="text" value={selectedContact.firstName} name="firstName" onChange={onChange} placeholder="Enter First Name" ></Input>
            <Label>Last Name</Label>
            <Input type="text" value={selectedContact.lastName} name="lastName" onChange={onChange} placeholder="Enter Last Name" ></Input>
            <Label>Phone Number</Label>
            <Input type="text" value={selectedContact.phoneNumber} name="phoneNumber" onChange={onChange} placeholder="Enter Phone Number" ></Input>
        </FormGroup>
        <Button type="submit" className='btn btn-primary'>Update</Button>
        <Link to="/" className='btn btn-danger ms-2'>Cancel</Link>
    </Form>
  )
}

export default EditContact
