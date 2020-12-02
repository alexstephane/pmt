


import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import ManagerController from "./components/ManagerController";
import NavBar from "./components/NavBar";
import React, { Component } from 'react';
import Login from './components/Login';
import SalesrepController from './components/SalerepsController';



class App extends Component {

  constructor() {
    super()
    this.state = {
      user: null,
      logged_in: false
    }
  }

  //state changing callback
  updateUser = (user) => {
    this.setState({
      user: user,
      logged_in: !this.state.logged_in
    })
  }


  render() {

    return (
      <div>
        <NavBar logged_in={this.state.logged_in} updateUser={this.updateUser} />
        {!this.state.loading ?
          <Switch>

            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route exact path="/login" render={() => this.state.user !== null && this.state.user.title === 'manager' ?
              <Redirect to='/manager/' /> : this.state.user !== null && this.state.user.title === 'Salesperson' ?
                <Redirect to='/salesperson/' /> :
                <Login updateUser={this.updateUser} />
            } />

            <Route path="/manager" render={props =>
              (<ManagerController {...props} user={this.state.user} />)
            } />
            <Route path="/salesperson/" render={props =>
              (<SalesrepController {...props} user={this.state.user} />)
            } />

            <Route path="/login" render={props =>
              (<Login {...props} />)
            } />

          </Switch> : null}
      </div>
    );
  }
}



export default withRouter(App)
