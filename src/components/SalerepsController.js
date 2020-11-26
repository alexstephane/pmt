import React, { Component } from 'react';
import SalesrepsView from "./SalesrepsView"





class SalesrepController extends Component {

    state = {
        salesrep: {
            manager_id: "",
            id: ""
        },

        prospects: []
    }

    componentDidMount() {
        console.log(this.props)

        fetch(`http://localhost:3003/salesreps/${this.props.match.params.id}`)
            .then(r => r.json())
            .then(s => {
                this.setState({ salesrep: s })
            })


    }

    allProspect = () => {

        fetch(`http://localhost:3003/prospects`)
            .then(r => r.json())
            .then(m => {
                this.setState({ prospects: m })
            })
    }


    updateProspect = (event, firstName, lastName, phone, email, status, id) => {

        fetch(`http://localhost:3003/prospects/${id}`, {

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
                console.log(s)

                this.allProspect()
            })
    }

    deleteProspect(ps_id) {
        console.log(ps_id)
        if (window.confirm('Are you sure?')) {
            fetch(`http://localhost:3003/prospects/${ps_id}`, {
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
        console.log(this.state)

        fetch("http://localhost:3003/prospects", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "first_name": pro.firstName,
                "last_name": pro.lastName,
                "email": pro.email,
                "status": pro.status,
                "phone": pro.phone,
            })
        }).then(m => {
            this.allProspect()
        })

    }
    createActivity = (a) => {
        console.log(this.state)

        fetch("http://localhost:3003/activities", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                "name": a.name,
                "prospect_id": a.prospect_id,
                "description": a.description,
                "status": a.status

            })
        }).then(m => {

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
                />


            </div>
        )

    }


}

export default SalesrepController
