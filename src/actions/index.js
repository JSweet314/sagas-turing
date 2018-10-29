// Root file for actions
// Write actions in here directly or import from separate files.

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
