import './App.css';
//import React, { Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import ManagerController from "./components/ManagerController";
import NavBar from "./components/NavBar";
import React, { Component, Fragment } from 'react';
//import React, { Fragment } from 'react';
import Login from './components/Login';
import Welcome from './components/Welcome';
//import NotFound from './components/notFound';
import SalesrepController from './components/SalerepsController';



class App extends Component {

    constructor(){
    super()
    this.state = {
      user: null,
      loading: true
    }
  }

  //state changing callback
  updateUser = (user) => {
    this.setState({
      user: user,
      loading: false
    })
  }

  componentDidMount(){
    if(localStorage.getItem("token")){
      fetch('http://localhost:3003/api/v1/managers', {
      	headers: {
      		"Authentication" : `Bearer ${localStorage.getItem("token")}`
      	}
      }).then(res => res.json())
        .then(user => {
        console.log(user)
        this.updateUser(user)
      })
    }else{
      this.setState({loading: false})
    }
  }

  

  render() {

    return (
      <div>
        <NavBar logged_in={!!this.state.user} updateUser={this.updateUser} />
        {!this.state.loading ?
          <Switch>
          
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route exact path="/login" render={() => this.state.user ?
              <Redirect to='/manager/' /> :
              <Login updateUser={this.updateUser} />
            } />
          
          
            <Route path="/manager/:id" render={props =>
              (<ManagerController {...props} />)
            } />
            <Route path="/salesperson/:id" render={props =>
              (<SalesrepController {...props} />)
            } />

            <Route path="/login" render={props =>
              (<Login {...props} />)
            } />
          
            }
        </Switch> : null }
        </div>
    );
  }
}



export default withRouter(App)

//<Route exact path="/" render={() => <Redirect to="/login" />} />
//<Route exact path="/login" Component={Login} />