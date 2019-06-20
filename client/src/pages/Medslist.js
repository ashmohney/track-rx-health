import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Meds extends Component {
  state = {
    user: "",
    meds: [],
    name: "",
    frequency: "",
    notes: ""
  };

  componentDidMount() {
    this.loadMeds();
  }

  loadMeds = () => {
    API.getMeds()
      .then(res =>
        this.setState({ meds: res.data, name: "", frequency: "", notes: "" })
      )
      .catch(err => console.log(err));
  };

  deleteMeds = id => {
    API.deleteMeds(id)
      .then(res => this.loadMeds())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Welcome {this.state.user || "user-default"},</h1>
              <h1>Your Medications</h1>
              <hr />
            </Jumbotron>
            {this.state.meds.length ? (
              <List>
                {this.state.meds.map(meds => (
                  <ListItem key={meds._id}>
                    <Link to={"/meds/" + meds._id}>
                      <strong>
                        Name: {meds.name} -- Frequency: {meds.frequency}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteMeds(meds._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>

        {/* ADD BUTTON to addmed HERE */}
      </Container>
    );
  }
}

export default Meds;
