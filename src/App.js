import logo from "./logo.svg";
import "./App.css";
import { Button, Carousel, Modal } from "react-bootstrap";
import { useState } from "react";
import { Member1 } from "./component/Member1";
import { Member2 } from "./component/Member2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Member1 />
        </Route>

        <Route path="/page1" exact>
          <Member1 />
        </Route>

        <Route path="/page2" exact>
          <Member2 />
        </Route>
      </Switch>
    </Router>
  );
  /*return (
    <div>
      
      <div>
        <Member2 />
      </div>
    </div>
  );*/
}

export default App;
