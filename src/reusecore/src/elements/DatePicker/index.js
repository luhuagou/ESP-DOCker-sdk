import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import DatePickerStyle from './datepicker.style';
// import moment from 'moment';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    let date = null;
    this.state = {
      focused: false,
      date,
      dateFormat: 'l'
    };
    this.onDateChangeFunc = this.onDateChangeFunc.bind(this);
    this.onFocusChangeFunc = this.onFocusC