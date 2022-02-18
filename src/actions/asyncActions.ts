import http from "../http/index"
import {ActionTypes} from "../redux/actionTypes";
import axios from 'axios';
import {store} from "../redux/store"


export const GetUsers = (req: any) => {

    http.get(`https://api.github.com/search/users?q=${req}`)
        .then((response) => {
            console.log(response);
            store.dispatch({
                    type: ActionTypes.GET_USERS,
                    payload: response.data,
                })
         })
        .catch((err) => {});
}


export const GetRepos = (req: string) => {
    console.log("repo url",req)
    http.get(`https://api.github.com/users/${req}/repos`)
        .then((response) => {
            console.log(response);
            store.dispatch({
                type: ActionTypes.GET_REPOS,
                payload: response.data,
            })
         })
        .catch((err) => {});
}
export const GetReadame = (req: any) => {
    console.log("repo url",req)
    axios.get(`https://raw.githubusercontent.com/${req.user}/${req.project}/master/README.md`)
        .then((response) => {
            console.log(response);
            store.dispatch({
                type: ActionTypes.GET_READAME,
                payload: response.data,
            })
         })
        .catch((err) => {});
}
