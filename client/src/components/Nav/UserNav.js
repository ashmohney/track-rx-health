import React, { Component } from "react";
import { Container } from "../Grid";
import { Link, Redirect } from "react-router-dom";
import "./style.css";
import API from "../../utils/AuthAPI";

class UserNav extends Component {
  state = {
    isLoggedOut: false
  };

  logout = async () => {
    const response = await API.userLogout();
    this.setState({ isLoggedOut: response.data.logoutStatus });
  };

  render() {
    if (this.state.isLoggedOut) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { from: this.props.location }
          }}
        />
      );
    }
    return (
      <Container fluid classes="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-info ">
          <a className="navbar-brand" href="/users/meds/">
            Track-Rx
          </a>
          <ul>
            <li id="logout">
              <Link to="#" className="button" onClick={this.logout}>
                Log Out
              </Link>
            </li>
            <li>
              <Link to="/users/meds/">Your Meds</Link>
            </li>
            <li>
              <Link to="/users/addmed">Add New Med</Link>
            </li>
          </ul>
        </nav>
      </Container>
    );
  }
}

export default UserNav;
