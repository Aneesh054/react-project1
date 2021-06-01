import logo from "./logo.svg";
import "./App.css";
import { Button, Carousel, Modal } from "react-bootstrap";
import { useState } from "react";
import { Member1 } from "./component/Member1";
import { Member2 } from "./component/Member2";
function App() {
  return (
    <div>
      <Member1 />
      <div>
        <Member2 />
      </div>
    </div>
  );
}

export default App;
