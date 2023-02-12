import React, { Fragment } from 'react';
import { Formik, Field } from 'formik';
import ErrorMessageComponent from './errorMessage';
import {
  validateFunc,
  onSubmitFunc,
  DisplayFormikState
} from 