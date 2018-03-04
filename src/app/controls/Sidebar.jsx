import * as React from "react";
import { Col } from "reactstrap";

export class Sidebar extends React.Component {
  render() {
    return (
      <Col xs={12} md={2} className="sidebar">
        <Col className="pt-3 pb-2">
          <h2 className="text-uppercase text-white">Dairy app</h2>
        </Col>
        <Col>
          <span className="text-muted">Comment with no sense</span>
        </Col>
      </Col>
    );
  }
}
