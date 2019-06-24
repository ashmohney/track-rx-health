import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Meds from "../pages/Medslist";
import MedDetail from "../pages/MedDetail";
import NoMatch from "../pages/NoMatch";
import AddMed from "../pages/AddMed";
import Nav from "../components/Nav";
import Home from "../pages/Home";

class UserRouter extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/users" component={Meds} />
          <Route path="/users/meds" component={Meds} />
          <Route path="/users/meds/:id" component={MedDetail} />
          <Route path="/users/addmed" component={AddMed} />
          <Route component={NoMatch} />
          <Route render={props => <Home {...props} which="User" />} />
        </Switch>
      </div>
    );
  }
}

export default UserRouter;
