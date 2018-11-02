export const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_INFO_SUCCESS':
      return action.payload;
    case 'USER_INFO_FAILURE':
      return {error: action.payload};
    default:
      return state;
  }
};
