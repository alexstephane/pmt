


import React, { Component } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';


class AllSalesPersonView extends Component {
  state = {
    salesperson_id: "",
    showHideEdit: false,
    showHide: false,
    toggleEditForm: false,
    handleShow: false,
    input: "",
    email: "",
    lastName: "",
    firstName: ""

  }

  componentDidMount() {
    this.props.allSalespeople()
  }


  handleShowHideSPEdit = (id, email, first, last,) => {
    this.setState({
      showHideEdit: !this.state.showHideEdit,
      salesperson_id: id,
      email: email,
      lastName: last,
      firstName: first
    })

  }

  handleModalShowHideSp() {
    this.setState({
      showHide: !this.state.showHide
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }


  render() {

    return (

      <div id={"allsview"}>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.salespeople.map((salesperson) => {

              return (

                <tr key={salesperson.id}>

                  <td>{salesperson.id}</td>
                  
                  <td>{salesperson.first_name}</td>
                  <td>{salesperson.last_name}</td>
                  <td>{salesperson.email}</td>
                  
                  
                  
                  <td>

                    {this.state.showHideEdit === true ?
                      (

                        <Modal show={this.state.showHideEdit}>
                          <Modal.Header>
                            <Modal.Title>Edit Sales</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Group controlId="formGroupfirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                  onChange={this.handleChange}
                                  type="text"
                                  name="firstName"
                                  placeholder="First Name"
                                  value={this.state.firstName}
                                />
                              </Form.Group>

                              <Form.Group controlId="formGrouplastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={this.handleChange}
                                  type="text" name="lastName"
                                  placeholder="Last Name"
                                  value={this.state.lastName} />
                                <Form.Label>Email address</Form.Label>
                              </Form.Group>

                              <Form.Group controlId="formGrouplastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={this.handleChange}
                                  type="email" name="email"
                                  placeholder="email"
                                  value={this.state.email} />
                                <Form.Label>Email address</Form.Label>
                              </Form.Group>

                            </Form>

                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                onClick={() => this.handleShowHideSPEdit()}>
                                Close
                              </Button>

                              <Button
                                variant="primary"
                                onClick={(event) => {
                                  this.props.updateSalesRep(event, this.state.firstName, this.state.lastName, this.state.email, this.state.salesperson_id)
                                  this.handleShowHideSPEdit()
                                }}>
                                Save Changes
                              </Button>
                            </Modal.Footer>

                          </Modal.Body>
                        </Modal>) : null
                    }

                    <div className="mb-2">
                      <Button
                        variant="primary"
                        onClick={() => this.handleShowHideSPEdit(salesperson.id, salesperson.email, salesperson.first_name, salesperson.last_name)}
                        size="sm" >
                        Edit
                      </Button>
                      {' '}
                      <Button
                        onClick={() => this.props.deleteRep(salesperson.id)}
                        variant="danger"
                        size="sm" >
                        delete
                      </Button>

                    </div>
                  </td>
                </tr>)
            })}
          </tbody>
        </Table>

        <Button variant="primary" onClick={() => this.handleModalShowHideSp()}>Create a new sales person </Button>
        {
          this.state.showHide === true ?
            (

              <Modal show={this.state.showHide} id="csm" >
                <Modal.Header closeButton onClick={() => this.handleModalShowHideSp()}>
                  <Modal.Title>Create a sales person</Modal.Title>

                </Modal.Header >

                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formGroupfirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        onChange={this.handleChange}
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                      />
                    </Form.Group>

                    <Form.Group controlId="formGrouplastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control onChange={this.handleChange}
                        type="text" name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName} />
                    </Form.Group>

                    <Form.Group controlId="formGroupEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control onChange={this.handleChange}
                        type="email" name="email"
                        placeholder="email"
                        value={this.state.email} />
                    </Form.Group>

                    <Form.Group controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control onChange={this.handleChange}
                        type="password" name="password"
                        placeholder="password"
                        value={this.state.password} />
                    </Form.Group>
                  </Form>

                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => this.handleModalShowHideSp()}>
                      Close
                   </Button>

                    <Button
                      variant="primary"
                      onClick={(event) => {
                        this.props.createSalesperson(this.state)
                        this.handleModalShowHideSp()
                      }}>
                      Save Changes
                    </Button>
                  </Modal.Footer>


                </Modal.Body>
              </Modal >) : null
        }
      </div >
    )

  }


}

export default AllSalesPersonView