/**
 * Created by shaochenlu on 3/10/17.
 */

import { combineReducers } from 'redux';
import basicForm from './basicInfoForm';
import specificationForm from './specificationForm';
import contactForm from './contactForm';

const questionnaireApp = combineReducers({
  basicForm,
  specificationForm,
  contactForm,
});

export default questionnaireApp;