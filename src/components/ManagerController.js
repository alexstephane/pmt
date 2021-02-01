


import React, { Component } from 'react';
import ManagerView from "./ManagerView"


class ManagerController extends Component {

    state = {
        manager: {},
        salespeople: [],
        prospects: [],
        activities: []
    }


    componentDidMount() {
        fetch(`https://calm-dawn-96008.herokuapp.com/managers/${localStorage.getItem("user")}`)
            .then(r => r.json())
            .then(m => {

                this.setState({ manager: m })
            })
    }

    allActivities = () => {
        fetch(`https://calm-dawn-96008.herokuapp.com/activities`)
            .then(r => r.json())
            .then(a => {
                this.setState({ activities: a })
            })
    }

    allSalespeople = () => {

        fetch(`https://calm-dawn-96008.herokuapp.comsalesreps`)
            .then(r => r.json())
            .then(m => {
                this.setState({ salespeople: m })
            })
    }

    allProspect = () => {

        fetch(`https://calm-dawn-96008.herokuapp.com/prospects`)
            .then(r => r.json())
            .then(m => {
                this.setState({ prospects: m })
            })
    }

    updateUser = (event, firstName, lastName, email, id) => {

        fetch(`https://calm-dawn-96008.herokuapp.com/managers/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                "first_name": firstName,
                "last_name": lastName,
                "email": email

            })
        })
            .then(r => r.json())
            .then(m => {
                this.setState({ manager: m })
            })
    }

    updateSalesRep = (event, firstName, lastName, email, id) => {

        fetch(`https://calm-dawn-96008.herokuapp.com/salesreps/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                "first_name": firstName,
                "last_name": lastName,
                "email": email

            })
        })
            .then(r => r.json())

            .then(s => {

                this.allSalespeople()
            })
    }


    updateProspect = (event, firstName, lastName, phone, email, status, id) => {

        fetch(`https://calm-dawn-96008.herokuapp.com/prospects/${id}`, {

            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                "first_name": firstName,
                "last_name": lastName,
                "phone": phone,
                "email": email,
                "status": status


            })
        })
            .then(r => r.json())

            .then(s => {
                this.allProspect()
            })
    }



    deleteRep(sp_id) {
        if (window.confirm('Are you sure?')) {
            fetch(`https://calm-dawn-96008.herokuapp.com/salesreps/${sp_id}`, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .then(s => {
                    this.allSalespeople()
                })
        }
    }


    deleteProspect(ps_id) {
        if (window.confirm('Are you sure?')) {
            fetch(`https://calm-dawn-96008.herokuapp.com/prospects/${ps_id}`, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

                .then(s => {
                    this.allProspect()
                })
        }
    }

    createSalesperson = (salesperson) => {

        fetch("https://calm-dawn-96008.herokuapp.com/salesreps", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "salesrep": {
                    first_name: salesperson.firstName,
                    last_name: salesperson.lastName,
                    email: salesperson.email,
                    password: salesperson.password,
                    username: salesperson.username,
                    manager_id: this.state.manager.id
                }
            })
        }).then(m => {
            this.allSalespeople()
        })

    }

    createProspect = (pro) => {

        fetch("https://calm-dawn-96008.herokuapp.com/prospects", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "first_name": pro.firstName,
                "last_name": pro.lastName,
                "email": pro.email,
                "status": pro.status,
                "phone": pro.phone,
                "created_by": this.state.manager.first_name + " " + this.state.manager.last_name
            })
        }).then(m => {
            this.allProspect()
        })

    }

    createActivity = (a) => {

        fetch("https://calm-dawn-96008.herokuapp.com/activities", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "activity": {
                    "name": a.name,
                    "prospect_id": a.prospect_id,
                    "prospect_name": a.prospect_name,
                    "description": a.description,
                    "created_by": this.state.manager.first_name + " " + this.state.manager.last_name,
                    "status": a.status
                }


            })
        }).then(m => {

        })

    }



    render() {
        return (
            <ManagerView
                manager={this.state.manager}
                prospects={this.state.prospects}
                salespeople={this.state.salespeople}
                activities={this.state.activities}
                updateUser={this.updateUser}
                updateSalesRep={this.updateSalesRep}
                allSalespeople={this.allSalespeople}
                allProspect={this.allProspect}
                updateProspect={this.updateProspect}
                createSalesperson={this.createSalesperson}
                deleteRep={this.deleteRep}
                deleteProspect={this.deleteProspect}
                createProspect={this.createProspect}
                createActivity={this.createActivity}
                allActivities={this.allActivities}

            />
        )
    }


}

export default ManagerController