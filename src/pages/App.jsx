import * as React from "react";
import {
  Badge,
  Col,
  Row,
  Button,
  Input,
  Form,
  ListGroup,
  ListGroupItem
} from "reactstrap";

import "./App.css";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Row noGutters>
          <Col xs={2} className="sidebar max-height">
            <Col className="pt-3 pb-2">
              <h2 className="text-uppercase text-white">Dairy app</h2>
            </Col>
            <Col>
              <span className="text-muted">Comment with no sense</span>
            </Col>
          </Col>

          <Col xs={10} className="main-content max-height d-flex px-3 py-4">
            <Col xs={6}>
              <Col xs={12} className="items-block bg-white px-0">
                <Col xs={12} className="items-header py-3">
                  <h2> Items </h2>
                </Col>
                <Col xs={12} className="items-input">
                  <Form inline className="d-flex justify-content-between">
                    <Input
                      className="col-9 mr-2"
                      placeholder="Type name here..."
                    />
                    <Button className="col turquoise-bg turquoise-border">
                      Add new
                    </Button>
                  </Form>
                </Col>
                <Col xs={12} className="items-content px-0">
                  <ListGroup className="py-2">
                    <ListGroupItem className="py-0 active m-0">
                      <Col
                        xs={12}
                        className="custom-list-item px-0 py-2 d-flex justify-content-between align-items-center"
                      >
                        <Col xs={8} className="px-0">
                          Dapibus ac facilisis in{" "}
                          <Badge pill className="turquoise-bg text-white">
                            2
                          </Badge>
                        </Col>
                        <Button className="bg-white">Delete</Button>
                      </Col>
                    </ListGroupItem>
                    <ListGroupItem className="py-1 m-0">
                      <Col
                        xs={12}
                        className="custom-list-item px-0 py-2 d-flex justify-content-between align-items-center"
                      >
                        <Col xs={8} className="px-0">
                          Dapibus ac facilisis in{" "}
                          <Badge pill className="turquoise-bg text-white">
                            2
                          </Badge>
                        </Col>
                        <Button className="bg-white">Delete</Button>
                      </Col>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Col>
            </Col>

            <Col xs={6}>
              <Col xs={12} className="comment-block bg-white p-2 px-4">
                <Col xs={12} className="items-header">
                  <h2> Comments #2</h2>
                </Col>
                <Col xs={12} className="px-0">
                  <ListGroup className="py-2">
                    <ListGroupItem className="p-0 m-0">
                      <Row noGutters className="custom-list-item py-2">
                        <Col xs={2} className="pt-1">
                          <span className="avatar-block" />
                        </Col>
                        <Col xs={10} className="text-block">
                          lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem
                          ipsum lorem ipsumlorem ipsumlorem ipsumlorem
                          ipsumlorem ipsumlorem ipsum lorem ipsum lorem
                          ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem className="p-0 m-0">
                      <Row noGutters className="custom-list-item py-2">
                        <Col xs={2} className="pt-1">
                          <span className="avatar-block" />
                        </Col>
                        <Col xs={10} className="text-block">
                          lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem
                          ipsum lorem ipsumlorem ipsumlorem ipsumlorem
                          ipsumlorem ipsumlorem ipsum lorem ipsum lorem
                          ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
                <Row noGutters className="custom-list-item py-2 m-0">
                  <Col xs={2} className="pt-1">
                    <span className="avatar-block bg-success" />
                  </Col>
                  <Col xs={10} className="text-block">
                    <Input type="textarea" name="text" id="exampleText" />
                  </Col>
                </Row>
              </Col>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}
