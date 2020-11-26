import React, { Component } from 'react';
import { Table } from 'react-bootstrap';



class ActivityView extends Component {

    componentDidMount() {
        this.props.allActivities()
    }

    render() {

        return (
            <div>
                <br></br>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Activity</th>
                            <th>Prospect ID</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.activities.map((activity) => {
                            return (

                                <tr key={activity.id}>

                                    <td>{activity.id}</td>
                                    <td>{activity.name}</td>
                                    <td>{activity.prospect_id}</td>
                                    <td>{activity.description}</td>
                                    <td>{activity.status}</td>

                                </tr>
                            )

                        })
                        }
                    </tbody>
                </Table>
            </div>
        )


    }


}

export default ActivityView