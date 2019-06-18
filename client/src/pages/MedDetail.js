import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class MedDetail extends Component {
  state = {
    meds: {}
  };

  componentDidMount() {
    API.getMed(this.props.match.params.id)
      .then(res => this.setState({ meds: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.meds.name} by {this.state.meds.frequency}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Notes</h1>
              <p>
                {this.state.meds.notes}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Return to Your Current Medications List</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MedDetail;
