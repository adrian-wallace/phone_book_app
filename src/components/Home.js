import React from 'react'
import Heading from './Heading'
import ContactList from './ContactList'
import { FaAddressBook } from "react-icons/fa";

const Home = () => {
  return (
    <div>
        <h1 className='text-center'><FaAddressBook /> Phone Book App</h1>
      <Heading/>
      <ContactList/>
    </div>
  )
}


export default Home
