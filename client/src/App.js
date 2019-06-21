import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserRouter from "./Routes/UserRouter.js";
import NoMatch from "./pages/NoMatch";
import HomePage from "./pages/HomePage";
import CreateAccount from "./pages/CreateAccount";
import PrivateRoute from "./components/Auth";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/createAccount" component={CreateAccount} />
            <PrivateRoute path="/users" render={_props => <UserRouter />} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
