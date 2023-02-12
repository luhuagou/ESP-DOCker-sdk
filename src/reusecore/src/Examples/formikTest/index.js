import React, { Fragment } from 'react';
import { Formik, Field } from 'formik';
import ErrorMessageComponent from './errorMessage';
import {
  validateFunc,
  onSubmitFunc,
  DisplayFormikState
} from './helperFunctions';
import Button from '../../elements/Button/index';
import RadioBox from '../../elements/Radio/index';
import Select from '../../elements/Select/index';
import { initialValues, data } from './data';

const RadioButton = ({
  field: { name, value, onChange, onBlur, setFieldValue },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <Fragment>
      <RadioBox
        name={name}
        id={id}
        value={id} // could be something else for output?
        checked={id === value}
        labelText={label}
        onChange={onChange}
        onBlur={onBlur}
        className="radio-button"
        {...props}
      />
    </Fragment>
  );
};

const RadioGroupWithFormik = ({
  value,
  error,
  touched,
  id,
  label,
  children
}) => {
  return (
    <div>
      <fieldset>
        <legend>{label}</legend>
        {children}
        {touched && error && <ErrorMessageComponent error={error} />}
      </fieldset>
    </div>
  );
};

