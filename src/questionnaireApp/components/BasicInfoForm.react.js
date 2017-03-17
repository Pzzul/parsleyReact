/**
 * Created by shaochenlu on 3/16/17.
 */

import React from 'react';
import {connect} from 'react-redux';
import {updateForm} from '../actions';
import style from './style/regular-form.css';
import bootstrapStyle from 'bootstrap/dist/css/bootstrap.min.css';

const BasicInfoForm = ({fullName, dob, dispatch}) => {
  const handleSubmit = e => {
    e.preventDefault();

  };
  const handleChange = (fieldName, text) => {
    dispatch(updateForm('basic', fieldName, text));
  };
  return (
    <div className={style['form-type-1']}>
      <form>
        <div className={bootstrapStyle['form-group']}>
          <label>Full Name</label>
          <input className={bootstrapStyle['form-control']} value={fullName}
                 onChange={e => handleChange('fullName', e.currentTarget.value)}/>
        </div>
        <div className={bootstrapStyle['form-group']}>
          <label>Date of Birth</label>
          <input value={dob} className={bootstrapStyle['form-control']}
                 onChange={e => handleChange('dob', e.currentTarget.value)}/>
        </div>
        <button className={`${bootstrapStyle['btn']} ${bootstrapStyle['btn-primary']}`} type='submit' onClick={e => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
};

let mapStateToProps = state => {
  return {
    ...state.basic
  }
};

const ConnectedBasicInfoForm = connect(mapStateToProps)(BasicInfoForm);

export {ConnectedBasicInfoForm, BasicInfoForm};