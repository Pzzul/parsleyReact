/**
 * Created by shaochenlu on 3/15/17.
 */

import React from 'react';
import { ConnectedForms } from './components/Forms.react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/forms">Forms</Link> </li>
        </ul>
        <Switch>
          <Route exact path="/forms" component={ConnectedForms}/>
          <Route path="/forms/:currentPath" component={ConnectedForms}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Root;