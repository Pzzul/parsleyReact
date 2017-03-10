/**
 * Created by shaochenlu on 3/10/17.
 */

let initialState = {
  fullName: "",
  dob: ""
};

const basicForm = (state = initialState, action) => {
  "use strict";
  switch (action.type) {
    case 'UPDATE_BASIC':
      return Object.assign({}, state, {[action.name]: action.content});
    default:
      return state;
  }
};

export default basicForm;