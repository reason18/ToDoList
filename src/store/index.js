import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";
import { loadState, saveState } from "./local-storage/localStorage";

const persistedstate = loadState();

const middleware = applyMiddleware(logger);
export const store = createStore(reducer, persistedstate, middleware);

store.subscribe(() => {
  const tasks = store.getState().tasks;
  const comments = store.getState().comments;
  const newTasks = { ...tasks, selectedTask: {} };
  const newComments = { ...comments, inputData: "" };
  saveState({
    tasks: newTasks,
    comments: newComments
  });
});

export * from "./actions";
export * from "./reducers";
