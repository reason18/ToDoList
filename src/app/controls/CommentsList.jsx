import * as React from "react";
import { Col, Row, Input, ListGroup, ListGroupItem } from "reactstrap";

const data = [
  {
    id: 1,
    text: `lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum
    lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
    ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
    ipsumlorem ipsum`,
    avatar: "smth"
  },
  {
    id: 2,
    text: `lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum
    lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
    ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
    ipsumlorem ipsum`,
    avatar: "smth"
  }
];

export class CommentsList extends React.Component {
  render() {
    const listItems = data.map(item => {
      return (
        <ListGroupItem className="p-0 m-0" key={item.id}>
          <Row noGutters className="custom-list-item py-2">
            <Col xs={2} className="pt-1">
              <span className="avatar-block" />
            </Col>
            <Col xs={10} className="text-block">
              {item.text}
            </Col>
          </Row>
        </ListGroupItem>
      );
    });
    return (
      <Col xs={12} className="comment-block bg-white p-2 px-4">
        <Col xs={12} className="items-header">
          <h2> Comments #2</h2>
        </Col>
        <Col xs={12} className="px-0">
          <ListGroup className="py-2">{listItems}</ListGroup>
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
    );
  }
}
