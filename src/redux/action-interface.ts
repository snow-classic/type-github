import { ActionTypes } from "./actionTypes"

interface GetUsersAction {
    type: ActionTypes.GET_USERS,
    payload: {}
}
interface GetReposActions {
    type: ActionTypes.GET_REPOS,
    payload: {}
}
interface GetRadameActions {
    type: ActionTypes.GET_READAME,
    payload:string
}
interface SpinnerActions {
    type: ActionTypes.SPINNER,
    payload:boolean
}


export type Action = GetUsersAction | GetReposActions | GetRadameActions |SpinnerActions