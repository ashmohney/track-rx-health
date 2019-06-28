import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateAccount from "./pages/CreateAccount";
// import PrivateRoute from "./components/Auth";
// import Meds from "./pages/Medslist";
// import MedDetail from "./pages/MedDetail";
import NoMatch from "./pages/NoMatch";
// import AddMed from "./pages/AddMed";
import PrivateRoute from "./components/Auth/PrivateRoute";

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     fakeAuth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/login' />
//   )} />
// )

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/createAccount" component={CreateAccount} />
            <Route path="/users" component={PrivateRoute} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
