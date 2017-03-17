/**
 * Created by shaochenlu on 3/15/17.
 */

import React from 'react';
import { ConnectedForms } from './components/Forms.react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/forms">Forms</Link> </li>
        </ul>
        <Route path="/forms(/:currentPath)?" component={ConnectedForms}/>
      </div>
    </BrowserRouter>
  );
};

export default Root;