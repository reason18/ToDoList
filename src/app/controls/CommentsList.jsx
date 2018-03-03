import * as React from "react";
import { Col, Row, Input, ListGroup, ListGroupItem } from "reactstrap";

export class CommentsList extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.keydownHandler.bind(this));
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownHandler.bind(this));
  }
  render() {
    const { data, inputData } = this.props.state;
    const selectedTask = this.props.selectedTask;
    const title = this.props.selectedTask.title;
    const dataItems = data.filter(item => item.taskId === selectedTask.id);

    const listItems = dataItems.map(item => {
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
          <h2>{title}</h2>
        </Col>
        <Col xs={12} className="px-0">
          <ListGroup className="py-2">{listItems}</ListGroup>
        </Col>
        <Row noGutters className="custom-list-item py-2 m-0">
          <Col xs={2} className="pt-1">
            <span className="avatar-block bg-success" />
          </Col>
          <Col xs={10} className="text-block">
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              value={inputData}
              onChange={this.onChange.bind(this)}
              require="true"
            />
          </Col>
        </Row>
      </Col>
    );
  }
  onChange(e) {
    this.props.onInputChange(e.target.value);
  }
  keydownHandler(e) {
    if (e.keyCode === 13 && e.ctrlKey) {
      console.log(this.props, "sssss");
      const item = {
        id: Math.ceil(Math.random() * 1000),
        text: this.props.state.inputData,
        taskId: this.props.selectedTask.id
      };
      this.props.onInputSubmit(item);
    }
  }
}
