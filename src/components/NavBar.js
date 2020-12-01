
import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, withRouter } from "react-router-dom";


class NavBar extends Component {


  logout = () => {
    localStorage.clear()
    this.props.updateUser(null)
  }
  render() {

    return (

      <div>
        {
          this.props.logged_in === true ? (
            <Navbar
              bg="light"
              variant="light"
            >

              <Navbar.Brand
                href="/login">PMT
                </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/logout"
                  as={NavLink}
                  to="/login"
                  active={this.props.location.pathname === "/managers"}
                  onClick={this.logout}
                >  logout</Nav.Link>

              </Nav>

            </Navbar>

          ) : (
              <Navbar
                bg="light"
                variant="light"
                as={NavLink}
                to="/login"
                active={this.props.location.pathname === "/login"}>
                <Navbar.Brand href="#home">PMT</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/login">login</Nav.Link>
                </Nav>

              </Navbar>
            )
        }
      </div>


    )

  }


}

export default withRouter(NavBar);

