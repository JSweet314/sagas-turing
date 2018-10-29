export const exampleSuccessAction = payload => ({
  type: 'EXAMPLE_SUCCESS_ACTION',
  payload
});

export const exampleFailureAction = payload => ({
  type: 'EXAMPLE_FAILURE_ACTION',
  payload
});

export const getUserInfo = gitHubUsername => ({
  type: 'GET_USER_INFO',
  payload: gitHubUsername
});
