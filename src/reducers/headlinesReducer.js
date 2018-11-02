export const headlinesReducer = (state = [], action) => {
  switch (action.type) {
    case 'HEADLINE_SUCCESS':
      return action.payload;
    case 'HEADLINE_FAILURE':
      return {error: action.payload};
    default:
      return state;
  }
};
