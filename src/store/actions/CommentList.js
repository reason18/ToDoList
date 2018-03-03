export const ADD_COMMENT = "ADD_COMMENT";
export const INPUT_COMMENT = "INPUT_COMMENT";

export const addComment = input => {
  return {
    type: ADD_COMMENT,
    payload: input
  };
};

export const inputComment = text => {
  return {
    type: INPUT_COMMENT,
    payload: text
  };
};
