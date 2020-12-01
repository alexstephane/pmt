
import React, { Component } from 'react';
import AllSalesProspectView from "./AllSalesProspectView"
import { Button, Figure, Form, ListGroup, Modal, Card, ListGroupItem, Container, Row, Col } from 'react-bootstrap';


class SalesrepsView extends Component {

    state = {
        salespersonList: false,
        prospectList: false,
        handleShowHideSPEdit: false,
        firstName: '',
        lastName: '',
        email: ''

    }

    handleShowHideSPEdit() {
        this.setState({
            showHide: !this.state.showHide
        })
    }

    salespersonList = () => {
        this.setState({
            salespersonList: !this.state.salespersonList
        })
    }


    prospectList = () => {
        this.setState({
            prospectList: !this.state.prospectList
        })
    }



    render() {

        return (


            <div >


                <Container>
                    <Row >
                        <div>
                            <Col id="spp">
                                <Card style={{ width: '25rem' }}>
                                    <Card.Img variant="top" src={this.props.salesrep.photo} />
                                    <Card.Body>
                                        <Card.Title>
                                            {this.props.salesrep.first_name} {this.props.salesrep.last_name}
                                        </Card.Title>
                                    </Card.Body>
                                    <ListGroup
                                        className="list-group-flush">
                                        <ListGroupItem>
                                            Title: {this.props.salesrep.title}
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Email address: {this.props.salesrep.email}
                                        </ListGroupItem>
                                    </ListGroup>

                                    <Card.Body>
                                        

                                        {this.state.showHide === true ?
                                            (
                                                <Modal
                                                    show={this.state.showHide}
                                                    onHide={this.handleShow}>

                                                    <Modal.Header closeButton>
                                                     <Modal.Title>Edit </Modal.Title>
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
                                                            <Form.Label>First Name</Form.Label>
                                                            <Form.Control
                                                                onChange={this.handleChange}
                                                                type="text"
                                                                name="firstName"
                                                                placeholder="First Name"
                                                                value={this.state.firstName}
                                                            />
                                                        </Form.Group>

                                                            <Form.Group controlId="formGroupEmail">
                                                                <Form.Label>Last Name</Form.Label>
                                                                <Form.Control
                                                                    onChange={this.handleChange}
                                                                    type="email"
                                                                    placeholder="Enter email"
                                                                    name="email"
                                                                    value={this.state.email || ''}
                                                                />
                                                            </Form.Group>

                                                        </Form>

                                                        <Modal.Footer>
                                                            <Button
                                                                variant="secondary"
                                                                onClick={() => this.handleShowHideSPEdit()
                                                                }>
                                                                Close
                                                            </Button>

                                                            <Button
                                                                variant="primary" onClick={(event) => {
                                                                    this.props.updateUser(event, this.state.firstName, this.state.lastName, this.state.email, this.props.manager.id)
                                                                    this.handleShowHideSPEdit()
                                                                }}>
                                                                Save Changes
                                                            </Button>

                                                        </Modal.Footer>
                                                    </Modal.Body>
                                                </Modal>) : null}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                    </Row>

                    <Row>
                        <div>
                            <Col>
                                <div>

                                    <div id="new"className="mb-2">
                                        <Button
                                            onClick={this.prospectList}
                                            variant="primary" size="lg" > All Prospects 
                                            </Button>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Row>
                    {


                        this.state.prospectList === true ?
                            (<AllSalesProspectView
                                allProspect={this.props.allProspect}
                                prospects={this.props.prospects}
                                updateProspect={this.props.updateProspect}
                                deleteProspect={this.props.deleteProspect}
                                createProspect={this.props.createProspect}
                                createActivity={this.createActivity}


                            />) : null
                    }





                </Container>

            </div>



















        )

    }


}

export default SalesrepsView

