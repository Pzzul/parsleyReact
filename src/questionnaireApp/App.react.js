/**
 * Created by shaochenlu on 3/10/17.
 */

import React from 'react';
import Root from './Root.react';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Root/>
    </Provider>
  );
};

export default App;