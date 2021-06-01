import logo from "./logo.svg";
import "./App.css";
import { Alert, Button } from "react-bootstrap";

function App() {
  return (
    <div>
      <h1 className="bg-primary text-light p-2 d-flex justify-content-center">React Bootstrap</h1>

      
      <Button variant="success">React Bootstrap Button</Button>

    
      <Alert variant="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Alert>
    </div>
  );
}

export default App;
