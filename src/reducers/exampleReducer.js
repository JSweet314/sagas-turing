export const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EXAMPLE_SUCCESS_ACTION':
      return action.payload;
    case 'EXAMPLE_FAILURE_ACTION':
      return { error: action.payload };
    default:
      return state;
  }
};
