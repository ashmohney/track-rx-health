import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import ReturnBtn from "../components/ReturnBtn";

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
              <h1>{this.state.meds.name}:</h1>
              <p>{this.state.meds.frequency}</p>
              <article>
                <h1>Notes: </h1>
                <p>{this.state.meds.notes}</p>
              </article>
            </Jumbotron>
          </Col>

          <ReturnBtn>
            <Link to="/">← Return to Your Current Medications List</Link>
          </ReturnBtn>
        </Row>
      </Container>
    );
  }
}

export default MedDetail;
