import React, { Component } from 'react';
import {Nav,Navbar,FormControl,Form,Button} from 'react-bootstrap';






class NavBar extends Component {
    render() {

        return(
            <div>
                
            
                
            <>
            
            <br />
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Navbar>
          
            <br />
            
          </>
                
                
               
                
                
            </div>
        )

    }


}

export default NavBar




// <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//             <Navbar.Brand href="#home">PMT<//Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//               <Nav className="mr-auto">
//                 <Nav.Link href="#features">Features</Nav.Link>
//                 <Nav.Link href="#pricing">Pricing</Nav.Link>
                
//               </Nav>
//               <Nav>
//                 <Nav.Link href="#deets">More deets</Nav.Link>
//                 <Nav.Link eventKey={2} href="#memes">
//                   Dank memes
//                 </Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
          //</Navbar>