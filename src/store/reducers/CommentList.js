import { ADD_COMMENT, INPUT_COMMENT } from "../actions/CommentList";

const initialState = {
  data: [
    {
      id: 1,
      text: `First comment for first task`,
      taskId: 1
    },
    {
      id: 2,
      text: `Second comment for first task`,
      taskId: 1
    },
    {
      id: 3,
      text: `First comment for second task`,
      taskId: 2
    },
    {
      id: 4,
      text: `Second comment for second task`,
      taskId: 2
    }
  ],
  inputData: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      const data = [...state.data, action.payload];
      return { ...state, data, inputData: "" };
    case INPUT_COMMENT:
      return { ...state, inputData: action.payload };
    default:
      return state;
  }
};
