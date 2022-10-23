import React, {useState, useContext} from 'react';
import { Form,FormGroup,Label,Input,Button } from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import {v4 as uuid} from 'uuid';

const AddContact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { addContact} = useContext(GlobalContext);
    const history = useHistory();
    const onSubmit = () =>{
        const newContact = {
            id: uuid(),
            firstName,
            lastName,
            phoneNumber
        }
        addContact(newContact);
        history.push('/');
    }

    const onChangeFirstName =(e)=>{
        setFirstName(e.target.value);
    }

    const onChangeLastName =(e)=>{
        setLastName(e.target.value);
    }

    const onChangePhoneNumber =(e)=>{
        setPhoneNumber(e.target.value);
    }
    

  return (
    <Form onSubmit={onSubmit}>
        <FormGroup>
            <Label>First Name</Label>
            <Input type="text" onChange={onChangeFirstName} value={firstName} placeholder="Enter First Name" ></Input>
            <Label>Last Name</Label>
            <Input type="text" onChange={onChangeLastName} value={lastName} placeholder="Enter Last Name" ></Input>
            <Label>Phone Number</Label>
            <Input type="text" onChange={onChangePhoneNumber} value={phoneNumber} placeholder="Enter Phone Number" ></Input>
        </FormGroup>
        <Button type="submit" className='btn btn-primary'>Submit</Button>
        <Link to="/" className='btn btn-danger ms-2'>Cancel</Link>
    </Form>
  )
}

export default AddContact
