import * as React from "react";
import { Col, Row } from "reactstrap";
import { Sidebar } from "./controls/Sidebar";
import { CommentsList } from "./controls/CommentsList";
import { TaskList } from "./controls/TaskList";
import {
  inputTaskTitle,
  addTask,
  deleteTask,
  selectTask,
  inputComment,
  addComment
} from "../store";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Row noGutters>
          <Sidebar />
          <Col xs={12} md={10} className="main-content max-height d-flex flex-wrap px-0 px-md-3 py-4">
            <Col xs={12} md={6}>
              <TaskList
                state={this.props.tasks}
                comments={this.props.comments.data}
                onInputChange={this.props.onInputTaskTitle}
                onInputSubmit={this.props.onSubmitTask}
                onDelete={this.props.onDeleteTask}
                onSelect={this.props.onSelectTask}
              />
            </Col>
            <Col xs={12} md={6}>
              {this.props.tasks.selectedTask.id ? (
                <CommentsList
                  state={this.props.comments}
                  selectedTask={this.props.tasks.selectedTask}
                  onInputChange={this.props.onInputComment}
                  onInputSubmit={this.props.onSubmitComment}
                />
              ) : null}
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}
export default connect(
  state => {
    return {
      tasks: state.tasks,
      comments: state.comments
    };
  },
  dispatch => {
    return {
      onInputTaskTitle: text => dispatch(inputTaskTitle(text)),
      onSubmitTask: item => dispatch(addTask(item)),
      onDeleteTask: id => dispatch(deleteTask(id)),
      onSelectTask: id => dispatch(selectTask(id)),
      onInputComment: text => dispatch(inputComment(text)),
      onSubmitComment: item => dispatch(addComment(item))
    };
  }
)(App);
