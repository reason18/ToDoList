import * as React from "react";
import "./App.css";
import { Col, Row } from "reactstrap";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Row noGutters>
          <Col xs={2} className="max-height">a</Col>
          <Col xs={10} className="max-height">b</Col>
        </Row>
      </div>
    );
  }
}
