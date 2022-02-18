import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducer";
import {defaultState} from "./DefaultState"

export const store = createStore(
    Reducers,
    defaultState,
    applyMiddleware(thunk)
)