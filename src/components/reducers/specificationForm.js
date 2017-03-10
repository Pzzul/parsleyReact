/**
 * Created by shaochenlu on 3/10/17.
 */


let initialState = {
  description: ""
};

const specificationForm = (state = initialState, action) => {
  "use strict";
  switch (action.type) {
    case 'UPDATE_SPEC':
      return Object.assign({}, state, {[action.name]: action.content});
    default:
      return state;
  }
};

export default specificationForm;