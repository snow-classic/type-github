import {ActionTypes} from "../redux/actionTypes";

// ERROR
export const getUsers = (data: {}) => ({
  type: ActionTypes.GET_USERS,
  payload: data,
});

export const getRepos = (data: {}) => ({
  type: ActionTypes.GET_REPOS,
  payload: data,
});

export const getReadame = (data: {}) => ({
  type: ActionTypes.GET_READAME,
  payload: data,
});
