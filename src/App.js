import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import ManagerController from "./components/ManagerController";
import NavBar from "./components/NavBar";
import React, { Component } from 'react';
import SalesrepController from './components/SalerepsController';



class App extends Component {

  render() {

    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/manager/:id" render={props =>
            (<ManagerController {...props} />)
          } />
          <Route path="/salesperson/:id" render={props =>
            (<SalesrepController {...props} />)
          } />
        </Switch>
      </div>
    );
  }
}



export default withRouter(App)

