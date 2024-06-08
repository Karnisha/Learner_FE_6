// import React, { useState } from 'react';
// import '../Styles/Navbar.css'

// const Navbar = () => {
//     const [isActive, setIsActive] = useState(false);

//     const toggleSidebar = () => {
//         setIsActive(!isActive);
//     };

//     return (
//         <div className={`main-container d-flex ${isActive ? 'active' : ''}`}>
//             <div className="sidebar" id="side_nav">
//                 <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
//                     <h1 className="fs-4"><span className="bg-white text-dark rounded shadow px-2 me-2">CL</span> <span className="text-white">Coding League</span></h1>
//                     <button className="btn d-md-none d-block close-btn px-1 py-0 text-white" onClick={toggleSidebar}><i className="fal fa-stream"></i></button>
//                 </div>
//                 <ul className="list-unstyled px-2">
//                     <li className="active"><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="fal fa-home"></i> Dashboard</a></li>
//                     <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="fal fa-list"></i> Projects</a></li>
//                     <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block d-flex justify-content-between">
//                         <span><i className="fal fa-comment"></i> Messages</span>
//                         <span className="bg-dark rounded-pill text-white py-0 px-2">02</span>
//                     </a>
//                     </li>
//                     <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="fal fa-envelope-open-text"></i> Services</a></li>
//                     <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="fal fa-users"></i> Customers</a></li>
//                 </ul>
//                 <hr className="h-color mx-2" />
//                 <ul className="list-unstyled px-2">
//                     <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="fal fa-bars"></i> Settings</a></li>
//                     <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="fal fa-bell"></i> Notifications</a></li>
//                 </ul>
//             </div>
//             <div className="content">
//                 <nav className="navbar navbar-expand-md navbar-light bg-light">
//                     <div className="container-fluid">
//                         <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse">
//                             <ul className="navbar-nav">
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">Home</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">About</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">Services</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">Contact</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggle = () => setIsOpen(!isOpen);

//     return (
//         <nav className="navbar navbar-expand-md navbar-light bg-light">
//             <div className="container-fluid">
//                 <button 
//                     className="navbar-toggler" 
//                     type="button" 
//                     onClick={toggle}
//                     aria-controls="navbarSupportedContent" 
//                     aria-expanded={isOpen ? "true" : "false"} 
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className={`${isOpen ? 'show' : ''} collapse navbar-collapse`} id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-md-0">
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">About</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Services</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Contact</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import relevantz from '../assets/Images/relevantz copy.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; // Import Modal
import '../Styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const Navigationbar = () => {
  const [show, setShow] = useState(false); // State to manage modal visibility

  const navigate = useNavigate(); // Call useNavigate to get the navigate function
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = () => {
    // Perform logout operations here
    console.log('User logged out');
   navigate('/')
    // Redirect to login or home page after logout
  };

  return (
    <div>
      <Row>
        <Col sx={12} md={8}>
          <Navbar className='navigationbar' expand='md' data-bs-theme="dark" fixed='top'>
            <img className='relevantzimage img-fluid' src={relevantz} alt='Relevantz Logo'></img>
            <Container>
              <Navbar.Brand href="#home">Learning Management System</Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className="me-auto">
                  {/* Navigation Links */}
                </Nav>
                <Nav.Link as={Link} to='#' onClick={handleShow}>
                  <Button variant='outline-primary'><LogoutIcon/></Button>
                </Nav.Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>

      {/* Logout Confirmation Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogout}>
            Log Out
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Navigationbar;
