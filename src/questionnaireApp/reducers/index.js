/**
 * Created by shaochenlu on 3/10/17.
 */

const initialState = {
  basic: {
    fullName: "",
    dob: "",
  },
  spec: {
    description: "",
  },
  contact: {
    email: "",
    phoneNum: "",
  }
};

const questionnaireApp = (state =  initialState, action) => {
    switch (action.type){
      case 'UPDATE':
        return {
          ...state,
          [action.formName]: {
            ...state[action.formName],
            [action.fieldName]: action.content,
          }
        };
      default:
        return state;
    }
};

export default questionnaireApp;