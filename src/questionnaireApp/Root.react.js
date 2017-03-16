/**
 * Created by shaochenlu on 3/15/17.
 */

import React from 'react';
import { ConnectedForms } from './components/Forms.react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/">
      <IndexRoute component={ConnectedForms}/>
      <Route path=":currentStep" component={ConnectedForms}/>
      </Route>
    </Router>
  );
};

export default Root;