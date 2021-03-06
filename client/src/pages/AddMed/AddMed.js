import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import { Redirect } from "react-router-dom";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ReturnBtn from "../../components/ReturnBtn";
import Nav from "../../components/Nav";
// import PrivateRoute from "../../components/Auth/PrivateRoute";

class AddMed extends Component {
  constructor(props) {
    super();
    this.state = {
      meds: [],
      name: "",
      frequency: "",
      notes: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.frequency) {
      API.addMeds({
        name: this.state.name,
        frequency: this.state.frequency,
        notes: this.state.notes
      })
        .then(
          // console.log("Nailed it!"),
          this.props.history.push("/users/meds/")
        )
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>New Medication</h1>
                <hr />
              </Jumbotron>
              <form>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Medication Name (required)"
                />
                <Input
                  value={this.state.frequency}
                  onChange={this.handleInputChange}
                  name="frequency"
                  placeholder="How Often? (required)"
                />
                <TextArea
                  value={this.state.notes}
                  onChange={this.handleInputChange}
                  name="notes"
                  placeholder="Any Notes? (Optional)"
                />
                <FormBtn
                  disabled={!(this.state.frequency && this.state.name)}
                  onClick={this.handleFormSubmit}
                >
                  Add Medication
                </FormBtn>
              </form>
              <ReturnBtn />
            </Col>
          </Row>

          <Row />
        </Container>
      </div>
    );
  }
}
export default AddMed;
