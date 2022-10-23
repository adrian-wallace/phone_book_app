import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav,NavItem,NavbarBrand,Container} from 'reactstrap';

const Heading = () => {
  return (
    <Navbar color='light' light>
        <Container className='d-flex'>
            <NavbarBrand href="/">Contacts</NavbarBrand>
            <Nav className='ms-auto'>
                <NavItem>
                    <Link className='btn btn-primary' to="/add">+ Add Contact</Link>
                </NavItem>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Heading
