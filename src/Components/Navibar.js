import {React, useState} from "react";
import {Navbar,Nav,Button,Container} from "react-bootstrap";
import {Link} from 'react-router-dom'
import {Modal,Form} from "react-bootstrap";
import styled from 'styled-components'

import logo from'./icon.svg'

 const Styles = styled.div`
 a, .navbar-brand .navbar-nav, .nav-link{
    color: #adb1b8;
        &:hover{
        color: white
    }
}`

export default function Navibar(){
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand><img src={logo} height={50} alt='icon'/></Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                                <Nav.Link> <Link to='/winners'>Champions</Link></Nav.Link>
                                <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant='warning' className='mr-2' onClick={handleShow}>Log in</Button>
                                <Button variant='warning' onClick={handleShow}>Sign out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
             <Modal show={show} onHide={handleClose}> //show, onHide - bootstrap methods
                  <Modal.Header closeButton>
                      <Modal.Title>Log in</Modal.Title>
                  </Modal.Header>
                 <Modal.Body>
                     <Form>
                         <Form.Group controlId='fromBasicEmail'>
                             <Form.Label>Email address</Form.Label>
                             <Form.Control type='email' placeholder='Enter email' />
                             <Form.Text className='text-muted'>Please, enter your email address</Form.Text>
                         </Form.Group>
                         <Form.Group controlId='fromBasicPassword'>
                             <Form.Label>Password</Form.Label>
                             <Form.Control type='password' placeholder='Enter password' />
                         </Form.Group>
                         <Form.Group controlId='fromBasicCheckbox'>
                             <Form.Check type='checkbox' label='Remember me' />
                         </Form.Group>
                     </Form>

                 </Modal.Body>
             </Modal>
        </>
    )
}