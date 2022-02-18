import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import React from 'react';
import Page1 from "../Page1"
import Page2 from "../Page2"

interface ApplicationProps {
  
}

const Application: React.FC<ApplicationProps> = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Page1}/>
        <Route path="/:username" exact component={ Page2}/>
      </Switch>
    </Router>
  );
};

export default Application;