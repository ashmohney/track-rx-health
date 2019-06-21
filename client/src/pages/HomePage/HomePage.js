import React from "react";
import { Container } from "../../components/Grid";

import Login from "../Login";

class HomePage extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <div className="list-group">
            <p />
            <Login />
          </div>
        </div>
      </Container>
    );
  }
}

export default HomePage;
