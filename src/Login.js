


import React, { Component } from 'react';
import { Button, Form, Modal, Col } from 'react-bootstrap';


class Login extends Component {


  state = {
    username: "",
    password: "",
    title: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

  }

  handleLoginSubmit = () => {
    //make a fetch call
    fetch(`http://localhost:3003/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        "username": this.state.username,
        "password": this.state.password,
        "title": this.state.title,
      }),
      redirect: 'follow'
    })
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          localStorage.setItem("token", data.token)
          localStorage.setItem("user", data.user.id)
          this.props.updateUser(data.user)
        } else {
          alert("Incorrect username or password")
        }
      })
  };


  render() {

    return (
      <div>
      <h1 id="name"> Prospect Managerment Tracker </h1> 

      <Modal.Dialog id="login" >
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            size="mini"
            key="mini"
            loading={this.props.authenticatingUser}
            error={this.props.failedLogin}
          >
            <Form.Group controlId="formGridState">
              <Form.Label>Title</Form.Label>
              <Form.Control as="select"
                defaultValue="Choose..."
                onChange={this.handleChange}
                name="title">

                <option>Title...</option>
                <option>salesperson</option>
                <option>manager</option>

              </Form.Control>
            </Form.Group>
            <Form.Group
              controlId="formBasicUserName">
              <Form.Label>username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                onChange={this.handleChange}
              />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={(event) => {
                this.handleLoginSubmit()
              }}>
              summit
                              </Button>
          </Form>
        </Modal.Body>

      </Modal.Dialog>
      
      </div>
    )
  }
}

export default Login







