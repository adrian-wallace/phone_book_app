import React, {useContext,useState} from 'react';
import { Link } from 'react-router-dom';
import { ListGroup,ListGroupItem,Button,Input} from 'reactstrap'
import { GlobalContext } from '../context/GlobalState';
import { FaTrashAlt } from "react-icons/fa";


const ContactList = () => {
    const {contacts, removeContact, searchContact} = useContext(GlobalContext);
    const [inputText, setInputText] = useState("");
    const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div>
      <div>
        <Input type="text" name="search" onChange={inputHandler} placeholder="Search for contact by last name..." ></Input>
      </div>
      <div>
        <ListGroup className='mt-4'>
          {contacts.length > 0 ? (
              <>
                {contacts.filter((val)=>{
                  if(inputText===""){
                    return val
                  } else if (val.lastName.toLowerCase().includes(inputText.toLocaleLowerCase())){
                    return val
                  }
                }).map(contact =>(
                    <ListGroupItem className='d-flex' key={contact.id}>
                      <strong>{contact.firstName} {contact.lastName}</strong>
                      (📞{contact.phoneNumber})
                      <div className='ms-auto'>
                        <Link className='btn btn-warning me-1' to={`/edit/${contact.id}`}>Edit</Link>
                        <Button onClick={()=>removeContact(contact.id)} color="danger"><FaTrashAlt/></Button>
                      </div>
                    </ListGroupItem>
                ))}
              </>
          ) 
          :
          (
            <h4 className='text-center'>No Contacts</h4>
          )}
        </ListGroup>
      </div>
    </div>
  )
}

export default ContactList
