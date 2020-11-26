

import React, { Component } from 'react';

// import ActivityView from "./ActivityView"
import { Button, Form, Modal, Table } from 'react-bootstrap';



class AllSalesProspectView extends Component {


  state = {
    prospect_id: "",
    created_by: "",
    //salesperson_id: "",
    showHideEdit: false,
    showHide: false,
    toggleEditForm: false,
    handleShow: false,
    input: "",
    email: "",
    lastName: "",
    firstName: "",
    phone: "",
    showHideAddActivity: false,
    status: "",
    name: "",
    description: ""
  }






  handleShowHideSPEdit = (id, email, first, last, phone, status) => {
    this.setState({
      showHideEdit: !this.state.showHideEdit,
      prospect_id: id,
      email: email,
      lastName: last,
      firstName: first,
      phone: phone,
      status: status

    })

  }
  handleModalShowHideSp() {
    this.setState({
      showHide: !this.state.showHide
    })
  }

  componentDidMount() {
    this.setState({
      salesperson_id: this.props.salesperson_id,
      manager_id: this.props.manager_id
    })
    this.props.allProspect()
  }


  handleShowHideAddActivity(id) {

    this.setState({
      showHideAddActivity: !this.state.showHideAddActivity,
      prospect_id: id,
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
      <div>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>email</th>
              <th>phone</th>
              <th>status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {this.props.prospects.map((prospect) => {

              return (

                <tr key={prospect.id}>

                  <td>{prospect.first_name}</td>
                  <td>{prospect.last_name}</td>
                  <td>{prospect.email}</td>
                  <td>{prospect.phone}</td>
                  <td>{prospect.status}</td>
                  <td>

                    <Modal show={this.state.showHideEdit}>
                      <Modal.Header>
                        <Modal.Title>Edit</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group controlId="formGroupfirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              onChange={this.handleChange}
                              type="text"
                              name="firstName"
                              value={this.state.firstName}
                            />
                          </Form.Group>

                          <Form.Group controlId="formGrouplastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={this.handleChange}
                              type="text" name="lastName"
                              value={this.state.lastName} />
                          </Form.Group>

                          <Form.Group controlId="formGroupEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              onChange={this.handleChange}
                              type="email"
                              name="email"
                              value={this.state.email} />
                          </Form.Group>

                          <Form.Group controlId="formGroupPhone">
                            <Form.Label>phone</Form.Label>
                            <Form.Control
                              onChange={this.handleChange}
                              type="text"
                              name="phone"
                              value={this.state.phone}
                            />
                          </Form.Group>


                          <Form.Group controlId="formGroupStatus">
                            <Form.Label>status</Form.Label>
                            <Form.Control
                              onChange={this.handleChange}
                              type="text"
                              name="status"
                              value={this.state.status}
                            />
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
                              this.props.updateProspect(event, this.state.firstName, this.state.lastName, this.state.email, this.state.phone, this.state.status, this.state.prospect_id)
                              this.handleShowHideSPEdit()
                            }}>
                            Save Changes
                               </Button>
                        </Modal.Footer>
                      </Modal.Body>
                    </Modal>


                    {
                      <Modal show={this.state.showHideAddActivity}>
                        <Modal.Header closeButton onClick={() => this.handleShowHideAddActivity()}>
                          <Modal.Title>Create a new Activity</Modal.Title>

                        </Modal.Header>

                        <Modal.Body>
                          <Form>
                            <Form.Group controlId="formGroupName">
                              <Form.Label>Activity</Form.Label>
                              <Form.Control
                                onChange={this.handleChange}
                                type="text"
                                name="name"
                                value={this.state.name}
                              />
                            </Form.Group>

                            <Form.Group controlId="formGroupStatus">
                              <Form.Label>status</Form.Label>
                              <Form.Control
                                onChange={this.handleChange}
                                type="text"
                                name="status"
                                value={this.state.status} />
                            </Form.Group>


                            <Form.Group controlId="formGroupDescription">
                              <Form.Label>description</Form.Label>
                              <Form.Control
                                onChange={this.handleChange}
                                as="textarea"
                                name="description"
                                value={this.state.description} />
                            </Form.Group>

                          </Form>

                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={() => this.handleShowHideAddActivity()}>
                              Close
                                 </Button>

                            <Button
                              variant="primary"
                              onClick={(event) => {
                                this.props.createActivity(this.state)
                                this.handleShowHideAddActivity()
                              }}>
                              Save Changes
                                 </Button>
                          </Modal.Footer>


                        </Modal.Body>
                      </Modal>
                    }

                    <div>
                      <Button
                        variant="primary"
                        onClick={() => this.handleShowHideSPEdit(prospect.id, prospect.email, prospect.first_name, prospect.last_name, prospect.phone, prospect.status)}
                        size="sm"
                      >
                        Edit
                      </Button>{'  '}

                      <Button
                        onClick={() => this.handleShowHideAddActivity(prospect.id)}
                        variant="info"
                        size="sm"
                      >
                        Add Activity
                      </Button>{'  '}

                      <Button
                        onClick={() => this.props.deleteProspect(prospect.id)}
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

        <Button variant="primary" onClick={() => this.handleModalShowHideSp()}>Create a new prospect </Button>

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHideSp()}>
            <Modal.Title>Create a prospect</Modal.Title>

          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formGroupfirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                />
              </Form.Group>

              <Form.Group controlId="formGrouplastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  name="lastName"
                  value={this.state.lastName} />
              </Form.Group>

              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  name="email"
                  value={this.state.email} />
              </Form.Group>

              <Form.Group controlId="formGroupPhone">
                <Form.Label>phone</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  name="phone"
                  value={this.state.phone} />
              </Form.Group>

              <Form.Group controlId="formGroupStatus">
                <Form.Label>status</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  name="status"
                  value={this.state.status} />
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
                  this.props.createProspect(this.state)
                  this.handleModalShowHideSp()
                }}>
                Save Changes
                    </Button>
            </Modal.Footer>


          </Modal.Body>
        </Modal>
      </div >
    )

  }


}

export default AllSalesProspectView