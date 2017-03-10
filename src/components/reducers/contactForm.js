/**
 * Created by shaochenlu on 3/10/17.
 */

let initialState = {
  phone: "",
  email: "",
};

const contactForm = (state = initialState, action) => {
  "use strict";
  switch (action.type) {
    case 'UPDATE_CONTACT':
      return Object.assign({}, state, {[action.name]: action.content});
    default:
      return state;
  }
};

export default contactForm;