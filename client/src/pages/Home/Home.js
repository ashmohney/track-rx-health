import React, { Component } from "react";
import { Container } from "../../components/Grid";

class Home extends Component {
  render() {
    return (
      <Container>
        <h2>{this.props.which} </h2>
      </Container>
    );
  }
}

export default Home;
