import {
  ADD_TASK,
  REMOVE_TASK,
  SELECT_TASK,
  INPUT_TASK_TITLE
} from "../actions/TaskList";

const initialState = {
  data: [
    {
      id: 1,
      title: "Firs task",
      comments: 2
    },
    {
      id: 2,
      title: "Second task",
      comments: 2
    }
  ],
  selectedTask: {},
  inputData: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        data: [...state.data, action.payload],
        inputData: ""
      };
    case REMOVE_TASK:
      return {
        ...state,
        data: state.data.filter(task => task.id !== action.payload)
      };
    case SELECT_TASK:
      const selectedTask = state.data.find(task => task.id === action.payload);
      return { ...state, selectedTask };
    case INPUT_TASK_TITLE:
      return { ...state, inputData: action.payload };
    default:
      return state;
  }
};
