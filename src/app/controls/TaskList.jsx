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

export class TaskList extends React.Component {
  render() {
    const { data, selectedTask } = this.props.state;
    const { comments } = this.props;

    const activeId = selectedTask.id;
    const listItems = data.map(item => {
      const commentsCount = comments.filter(
        comment => comment.taskId === item.id
      ).length;
      const isActive = activeId === item.id ? "active" : "";
      return (
        <ListGroupItem className={`py-0 m-0 ${isActive}`} key={item.id}>
          <Col
            xs={12}
            className="custom-list-item px-0 py-2 d-flex justify-content-between align-items-center"
          >
            <Col
              xs={8}
              className="px-0"
              onClick={this.onSelect.bind(this, item.id)}
            >
              {item.title}{" "}
              <Badge pill className="turquoise-bg text-white">
                {commentsCount}
              </Badge>
            </Col>
            <Button
              className="bg-white delete-button"
              onClick={this.onDelete.bind(this, item.id)}
            >
              Delete
            </Button>
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
          <Form
            inline
            className="d-flex justify-content-between"
            onSubmit={this.onSubmit.bind(this)}
          >
            <Input
              className="col-12 col-md-9 mr-md-2 mb-2 mb-md-0"
              placeholder="Type name here..."
              onChange={this.onChange.bind(this)}
              value={this.props.state.inputData}
              require="true"
            />
            <Button
              className="col turquoise-bg turquoise-border"
              onClick={this.onSubmit.bind(this)}
              disabled={this.props.state.inputData.length < 1}
            >
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
  onChange(e) {
    this.props.onInputChange(e.target.value);
  }
  onSubmit(e) {
    e.preventDefault();
    const newItem = {
      title: this.props.state.inputData,
      id: Math.ceil(Math.random() * 1000),
      comments: 0
    };
    this.props.onInputSubmit(newItem);
  }
  onDelete(id, e) {
    this.props.onDelete(id);
  }
  onSelect(id, e) {
    this.props.onSelect(id);
  }
}
