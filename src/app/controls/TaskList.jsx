import * as React from "react";
import {
  Badge,
  Col,
  Button,
  Input,
  Form,
  ListGroup,
  ListGroupItem
} from "reactstrap";

const data = [
  {
    id: 1,
    title: "Dapibus ac facilisis in",
    comments: [
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
    ]
  },
  {
    id: 2,
    title: "Dapibus ac facilisis in",
    comments: [
      {
        id: 3,
        text: `lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
        ipsumlorem ipsum`,
        avatar: "smth"
      },
      {
        id: 4,
        text: `lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem
        ipsumlorem ipsum`,
        avatar: "smth"
      }
    ]
  }
];

export class TaskList extends React.Component {
  render() {
    const activeId = 1;
    const listItems = data.map(item => {
      const isActive = activeId === item.id ? "active" : "";
      return (
        <ListGroupItem className={`py-0 m-0 ${isActive}`}>
          <Col
            xs={12}
            className="custom-list-item px-0 py-2 d-flex justify-content-between align-items-center"
          >
            <Col xs={8} className="px-0">
              {item.title}{" "}
              <Badge pill className="turquoise-bg text-white">
                {item.comments.length}
              </Badge>
            </Col>
            <Button className="bg-white">Delete</Button>
          </Col>
        </ListGroupItem>
      );
    });
    return (
      <Col xs={12} className="items-block bg-white px-0">
        <Col xs={12} className="items-header py-3">
          <h2> Items </h2>
        </Col>
        <Col xs={12} className="items-input">
          <Form inline className="d-flex justify-content-between">
            <Input className="col-9 mr-2" placeholder="Type name here..." />
            <Button className="col turquoise-bg turquoise-border">
              Add new
            </Button>
          </Form>
        </Col>
        <Col xs={12} className="items-content px-0">
          <ListGroup className="py-2">{listItems}</ListGroup>
        </Col>
      </Col>
    );
  }
}
