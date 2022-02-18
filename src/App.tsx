import React from 'react';
import logo from './logo.svg';
import "./App.css";
import Routes from "./components/Routes"
// import "antd/dist/antd.css";
import { connect } from "react-redux";
import Loader from "./components/Routes/spinner"

function App(state:any) {
  return (
    <>
      {state.spin && <Loader />}
      <Routes />
    </>
      
  );
}

const mapStateToProps = (store: any) => {
  console.log("spinner", store)
  return {
    ...store,
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
