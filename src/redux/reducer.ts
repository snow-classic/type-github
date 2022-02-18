import {ActionTypes} from "./actionTypes";
import { Action } from "./action-interface"
import {DefaultStateI,defaultState } from "./DefaultState"

const initialstate = {
  spin:false
}

export default (state: DefaultStateI = defaultState, action: Action) => {
    // console.log("action in reducer", action);
  switch (action.type) {
    case ActionTypes.GET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case ActionTypes.GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
      };
      }
    case ActionTypes.GET_READAME: {
      return {
        ...state,
        readame: action.payload,
      };
    }
    case ActionTypes.SPINNER: {
      return {
        ...state,
        spin: action.payload,
      };
    }
    default:
      return state;
  }
};
