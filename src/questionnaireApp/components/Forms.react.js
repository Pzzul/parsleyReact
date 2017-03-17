/**
 * Created by shaochenlu on 3/16/17.
 */

import React from 'react';
import {connect} from 'react-redux';
import {ConnectedBasicInfoForm} from './BasicInfoForm.react';
import {ConnectedSpecInfoForm} from './SpecInfoForm.react';
import style from './style/regular-form.css';

class Forms extends React.Component {

  render() {
    const { match } = this.props;
    let {currentStep} = match ? match : this.props;
    if (!currentStep)
      currentStep = 'basic';
    const steps = ['basic', 'spec', 'contact'];
    const index = steps.indexOf(currentStep);
    const long = index * 440;
    return (
      <div className={style['carousel-form-window']}>
        <div className={style['carousel-form-container']} style={{transform: `translateX(-${long}px)`}}>
          <ConnectedBasicInfoForm/>
          <ConnectedSpecInfoForm/>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    currentStep: state.currentStep,
  }
};

const ConnectedForms = connect(mapStateToProp)(Forms);

export {Forms, ConnectedForms};