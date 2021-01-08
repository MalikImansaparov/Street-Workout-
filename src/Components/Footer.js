import React from "react";
import {Container,Row,Col} from "react-bootstrap";

const Footer = () => (
    <Container fluid style={{backgroundColor: '#212529', color:'#fff'}}>
       <Row  style={{display:'flex', justifyContent:'center', padding:'20px'}}>
           <Col md={3} >
              <h5>ADDRESS</h5>
               <p>Dambju Street 2, Brīvkalni,</p>
               <p>Babītes district, LV-2107,</p>
               <p> Latvia</p>
           </Col>
           <Col md={3}>
               <h5>CONTACTS</h5>
               <p>“World Street Workout and Calisthenics Federation”</p>
               <p>Phone: +371 26332884</p>
               <p> E-mail: academy@wswcf.org</p>
           </Col>
           <Col md={3}>
               <h5>TERMS</h5>
               <p>Privacy and cookies policy</p>
               <p>@ 2011 – 2020 WSWCF</p>
               <p>All rights reserved</p>
           </Col>
           <Col md={1} style={{display:'block'}}>
               <a style={{color:'yellow', fontSize:'26px',margin:'15px'}} href=' https://www.facebook.com/WSWCF'><i className="fa fa-facebook"></i></a>
               <a style={{color:'yellow', fontSize:'26px',margin:'15px'}} href=' https://www.instagram.com/wswcf/'><i className="fa fa-instagram"></i></a>
               <a style={{color:'yellow', fontSize:'26px',margin:'15px'}} href=' https://twitter.com/WSWCFofficial'><i className="fa fa-twitter"></i></a>
               <a style={{color:'yellow', fontSize:'26px',margin:'15px'}} href=' https://www.youtube.com/channel/UCKsaDJNhHw7l8xkH-xfzaIQ?reload=9'><i className="fa fa-youtube"></i></a>
           </Col>
       </Row>
        <Container style={{display:'flex', justifyContent:'center', padding:'10px'}}>

        </Container>
    </Container>
)
export default Footer;

