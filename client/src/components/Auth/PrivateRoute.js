import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import API from "../../utils/AuthAPI";
import Meds from "../../pages/Medslist";
import MedDetail from "../../pages/MedDetail";
import NoMatch from "../../pages/NoMatch";
import AddMed from "../../pages/AddMed";
import Nav from "../../components/Nav";
// import UserRouter from "../../Routes/UserRouter";

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
        render={props =>
          this.state.isAuth ? (
            ((
              <this.state.RenderComponent {...props} /> //this was all by itself then added below to find paths
            ),
            (
              // <UserRouter />
              <div>
                <Nav />
                {/* <BrowserRouter> */}
                <Route path="/users" component={Meds} />
                <Route path="/users/meds" component={Meds} />
                <Route path="/users/meds/:id" component={MedDetail} />
                <Route path="/users/addmed" component={AddMed} />
                <Route component={NoMatch} />
                {/* <Route render={props => <Home {...props} which="User" />} /> */}
                {/* </BrowserRouter> */}
              </div>
            ))
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
