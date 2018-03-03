import { combineReducers } from "redux";

import { reducer as tasksReducer } from "./TaskList";
import { reducer as commentsReducer } from "./CommentList";


export default combineReducers({
  tasks: tasksReducer,
  comments: commentsReducer
});
