import { userAction } from './types';

export const setCurrentUser = (user) => ({
  type: userAction.SET_CURRENT_USER,
  payload: user,
});
