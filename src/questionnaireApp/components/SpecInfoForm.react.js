/**
 * Created by shaochenlu on 3/16/17.
 */

import React from 'react';
import {connect} from 'react-redux';
import {updateForm} from '../actions';
import style from './style/regular-form.css';
import bootstrapStyle from 'bootstrap/dist/css/bootstrap.min.css';

const SpecInfoForm = ({description, dispatch}) => {
  const handleChange = e => {
    dispatch(updateForm("spec", "description", e.currentTarget.value));
  };
  return (
    <div className={style['form-type-1']}>
      <form>
        <div className={bootstrapStyle['form-group']}>
          <label>Description</label>
          <textarea className={bootstrapStyle['form-control']} value={description} onChange={e => handleChange(e)}/>
        </div>
        <button type="submit" className={`${bootstrapStyle['btn']} ${bootstrapStyle['btn-primary']}`}>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProp = state => {
  return {
    ...state.spec,
  }
};

const ConnectedSpecInfoForm = connect(mapStateToProp)(SpecInfoForm);

export {SpecInfoForm, ConnectedSpecInfoForm};