
import React, { Component } from 'react';
import AllSalesPersonView from "./AllSalesPersonView"
import ActivityView from "./ActivityView"
import AllSalesProspectView from "./AllSalesProspectView"
import { Button, Form, ListGroup, Modal, Card, ListGroupItem, Container, Row, Col, ButtonGroup } from 'react-bootstrap';




class ManagerView extends Component {

    state = {
        salespersonList: false,
        prospectList: false,
        activitiesList: false,
        handleShowHideSPEdit: false,
        handleShow: false,
        EditButton: false,
        email: "",
        lastName: "",
        firstName: ""

    }

    componentDidMount() {
        this.props.allSalespeople()
    }


    salespersonList = () => {
        this.setState({
            salespersonList: !this.state.salespersonList,
            prospectList: false,
            activitiesList: false

        })
    }

    handleEdit = () => {
        this.setState({
            EditButton: !this.state.EditButton,
        })
    }

    handleShowHideSPEdit() {

        this.setState({
            showHide: !this.state.showHide
        })
    }

    prospectList = () => {
        this.setState({
            prospectList: !this.state.prospectList,
            salespersonList: false,
            activitiesList: false

        })
    }

    activitiesList = () => {
        this.setState({
            activitiesList: !this.state.activitiesList,
            prospectList: false,
            salespersonList: false
        })
    }




    handleShow = () => {

        this.setState({
            handleShow: !this.state.handleShow
        })
    }

    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <div >

                <Container >
                    <Row id="mvp">
                        <div>
                            <Col>
                                <Card id="profile" style={{ width: '25rem' }}>
                                    <Card.Img variant="top" src={this.props.manager.photo} />
                                    <Card.Body>
                                        <Card.Title>
                                            {this.props.manager.first_name} {this.props.manager.last_name}
                                        </Card.Title>
                                    </Card.Body>
                                    <ListGroup
                                        className="list-group-flush">
                                        <ListGroupItem>
                                            Title: {this.props.manager.title}
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Email address: {this.props.manager.email}
                                        </ListGroupItem>
                                    </ListGroup>

                                    <Card.Body>
                                        <Button
                                            variant="primary"
                                            onClick={() => this.handleShowHideSPEdit()}>
                                            Edit
                                        </Button>

                                        {this.state.showHide === true ?
                                            (
                                                <Modal
                                                    show={this.state.showHide}
                                                    onHide={this.handleShow}>

                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Modal heading</Modal.Title>
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
                                                                <Form.Control
                                                                    onChange={this.handleChange}
                                                                    type="text"
                                                                    name="lastName"
                                                                    placeholder="Last Name"
                                                                    value={this.state.lastName}
                                                                />
                                                            </Form.Group>

                                                            <Form.Group controlId="formGroupEmail">
                                                                <Form.Label>Email</Form.Label>
                                                                <Form.Control
                                                                    onChange={this.handleChange}
                                                                    type="email"
                                                                    placeholder="Enter email"
                                                                    name="email"
                                                                    value={this.state.email}
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
                            <Col id="allsb" >
                                <div>
                                    <div>
                                        <ButtonGroup className="mb-2" >


                                            <Button id='asp1'
                                                onClick={this.salespersonList}
                                                variant="primary"> All Sales People
                                            </Button>
                                            {'  '}
                                            <Button id="asp2"
                                                onClick={this.prospectList}
                                                variant="primary"  > All Prospects
                                            </Button>
                                            {'  '}
                                            <Button id="ac1"
                                                onClick={this.activitiesList}
                                                variant="primary"  > All Activities
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Row>
                    {
                        this.state.salespersonList === true ?
                            (<AllSalesPersonView
                                salespeople={this.props.salespeople}
                                allSalespeople={this.props.allSalespeople}
                                updateUser={this.updateUser}
                                updateSalesRep={this.props.updateSalesRep}
                                createSalesperson={this.props.createSalesperson}
                                newSalesrep={this.state.newSalesrep}
                                deleteRep={this.props.deleteRep} />) : null
                    }

                    {
                        this.state.prospectList === true ?
                            (<AllSalesProspectView
                                allProspect={this.props.allProspect}
                                prospects={this.props.prospects}
                                updateProspect={this.props.updateProspect}
                                deleteProspect={this.props.deleteProspect}
                                createProspect={this.props.createProspect}
                                createActivity={this.props.createActivity}

                            />) : null
                    }


                    {
                        this.state.activitiesList === true ?
                            (<ActivityView
                                allActivities={this.props.allActivities}
                                activities={this.props.activities}
                            />) : null
                    }
                </Container >
            </div >
        )
    }
}

export default ManagerView


