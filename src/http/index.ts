import axios from "axios";
// import Store from "../redux/store";
import { store } from "../redux/store"
import {ActionTypes} from "../redux/actionTypes";

const http = axios.create({
  // baseURL: "https://api.github.com/",
});

// http.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch({
        type: ActionTypes.SPINNER,
        payload: true,
      })
    // Store.dispatch(syncActions.Spinner(true));
    return config;
  },
  function (error) {
    // Do something with request error
    store.dispatch({
      type: ActionTypes.SPINNER,
      payload: false,
    })
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch({
      type: ActionTypes.SPINNER,
      payload: false,
    })
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch({
      type: ActionTypes.SPINNER,
      payload: false,
    })
    return Promise.reject(error);
  }
);


export default http;
