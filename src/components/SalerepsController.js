



import React, { Component } from 'react';
import SalesrepsView from "./SalesrepsView"

class SalesrepController extends Component {

    // state = {
    //     salesrep: {
    //         manager_id: "",
    //         id: ""
    //     },

    //     prospects: []
    // }
    state = {
                salesrep: {},
                manager_id: "",
                  id: "",
                 activities: [],
                prospects: []
            }
        
    componentDidMount() {

        fetch(`https://calm-dawn-96008.herokuapp.com/${localStorage.getItem("user")}`)
            .then(r => r.json())
            .then(s => {
                this.setState({ salesrep: s })
            })


    }


    allActivities = () => {
        fetch(`https://calm-dawn-96008.herokuapp.com/activities`)
            .then(r => r.json())
            .then(a => {
                this.setState({ activities: a })
            })
    }

    

    allProspect = () => {

        fetch(`https://calm-dawn-96008.herokuapp.com/prospects?salesrep_id=${this.state.salesrep.id}`)
            .then(r => r.json())
            .then(m => {
                this.setState({ prospects: m })
            })
    }


    allActivities = () => {
                fetch(`https://calm-dawn-96008.herokuapp.com/activities`)
                    .then(r => r.json())
                    .then(a => {
                        this.setState({ activities: a })
                    })
            }


    updateProspect = (event, firstName, lastName, phone, email, status, id) => {

        fetch(`https://calm-dawn-96008.herokuapp.com/${id}`, {

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

    deleteProspect(ps_id) {
        if (window.confirm('Are you sure?')) {
            fetch(`https://calm-dawn-96008.herokuapp.com/${ps_id}`, {
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
                "created_by": this.state.salesrep.first_name + " " + this.state.salesrep.last_name,
                "manager_id": this.state.salesrep.manager_id,
                "salesrep_id": this.state.salesrep.id,
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

                "name": a.name,
                "prospect_id": a.prospect_id,
                "description": a.description,
                "status": a.status,
                "prospect_name": a.prospect_name,
                "created_by": this.state.salesrep.first_name + " " + this.state.salesrep.last_name,
                

            })
        }).then(m => {

        })

    }

    updateUser = (firstName, lastName, email) => {

        fetch(`https://calm-dawn-96008.herokuapp.com/salesreps/${localStorage.getItem("user")}`, {
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
                this.setState({ salesrep: s })
            })
    }


    render() {
        return (
            <div>


                <SalesrepsView
                    salesrep={this.state.salesrep}
                    allProspect={this.allProspect}
                    prospects={this.state.prospects}
                    updateProspect={this.updateProspect}
                    deleteProspect={this.deleteProspect}
                    createProspect={this.createProspect}
                    createActivity={this.createActivity}
                    updateUser={this.updateUser}
                    activities={this.state.activities}
                  allActivities={this.allActivities}
                />


            </div>
        )

    }


}

export default SalesrepController



