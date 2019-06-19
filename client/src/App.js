import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Meds from "./pages/Medslist";
import MedDetail from "./pages/MedDetail";
import NoMatch from "./pages/NoMatch";
import AddMed from "./pages/AddMed";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Meds} />
          <Route exact path="/meds" component={Meds} />
          <Route exact path="/meds/:id" component={MedDetail} />
          <Route exact path="/addmed" component={AddMed} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
