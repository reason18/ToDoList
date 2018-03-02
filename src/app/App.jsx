import * as React from "react";
import { Col, Row } from "reactstrap";
import { Sidebar } from "./controls/Sidebar";
import { CommentsList } from "./controls/CommentsList";
import { TaskList } from "./controls/TaskList";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Row noGutters>
          <Sidebar />
          <Col xs={10} className="main-content max-height d-flex px-3 py-4">
            <Col xs={6}>
              <TaskList />
            </Col>
            <Col xs={6}>
              <CommentsList />
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}
