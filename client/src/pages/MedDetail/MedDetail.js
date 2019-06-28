import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import ReturnBtn from "../../components/ReturnBtn";
import Nav from "../../components/Nav";

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
      <div>
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <article>
                  <h1>{this.state.meds.name}:</h1>
                  <p>{this.state.meds.frequency}</p>

                  <h3>Notes: </h3>
                  <p>{this.state.meds.notes}</p>
                </article>
              </Jumbotron>
            </Col>
          </Row>
          <ReturnBtn />
        </Container>
      </div>
    );
  }
}

export default MedDetail;
