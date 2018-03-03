export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const SELECT_TASK = "SELECT_TASK";
export const INPUT_TASK_TITLE = "INPUT_TASK_TITLE";

export const addTask = item => {
  return {
    type: ADD_TASK,
    payload: item
  };
};

export const deleteTask = id => {
  return {
    type: REMOVE_TASK,
    payload: id
  };
};

export const selectTask = id => {
  return {
    type: SELECT_TASK,
    payload: id
  };
};

export const inputTaskTitle = text => {
  return {
    type: INPUT_TASK_TITLE,
    payload: text
  };
};
