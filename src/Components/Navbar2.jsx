import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../Images/Frame (1).svg";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar2.css";

const Navbar2 = () => {
  return (
  //   <Navbar expand="lg" bg='dark' className="navbar2">
  //   <Container className="container1 ">
  //   <Navbar.Brand href="#home">
  //     <img className="nav-image" src={Icon} alt="" />
  //   </Navbar.Brand>
  //     <Navbar.Toggle className="nn " aria-controls="basic-navbar-nav">
  //       <div className="hamburger">
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //       </div>
  //     </Navbar.Toggle>
  //     <Navbar.Collapse id="basic-navbar-nav" className="">
  //       <Nav className="lnavcon ">
     
  //         <Nav.Link  className="text-light">
  //           Products
  //         </Nav.Link>
      
  //         <Nav.Link href="#link" className="text-light">
  //           Blog
  //         </Nav.Link>
         
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>





    <div className="navbar2">
      <Navbar className="navbar2-wrap " expand="lg">
        <Container className="container1">
            <Navbar.Brand href="#home">
              <img className="nav-image " src={Icon} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="ms-auto" id="basic-navbar-nav">
              <Nav className="ms-auto nav-wrap2">
                <Nav.Link href="#home" className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link href="#link" className="text-white">
                  Pages
                </Nav.Link>
                <Nav.Link href="#link" className="text-white">
                  Services
                </Nav.Link>
                <Nav.Link href="#link" className="text-white">
                  Portfolio
                </Nav.Link>
                <Nav.Link href="#link" className="text-white">
                  Blog
                </Nav.Link>
                <Nav.Link href="#link" className="text-white">
                  Contact Us
                </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar2;
