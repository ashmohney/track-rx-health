import React, { Component } from "react";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import API from "../../utils/AuthAPI";
import Meds from "../../pages/Medslist";
import MedDetail from "../../pages/MedDetail";
// import NoMatch from "../../pages/NoMatch";
import AddMed from "../../pages/AddMed";

class PrivateRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: props.component,
      RenderComponent: props.render,
      path: props.path
    };
  }

  componentDidMount() {
    this.authenticate();
  }

  authenticate = async () => {
    const response = await API.isAuthenticated();
    this.setState({ isAuth: response.data.isAuth });
  };

  render() {
    if (this.state.isAuth === undefined) {
      return <div>...</div>;
    }

    return (
      <Route
        path={this.state.path}
        render={_props =>
          this.state.isAuth ? (
            <Router>
              {/* <this.state.RenderComponent {...props} /> */}
              <Route path="/users/meds/:id" component={MedDetail} />
              <Route exact path="/users/meds" component={Meds} />
              <Route path="/users/addmed" component={AddMed} />
            </Router>
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: this.props.location }
              }}
            />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
