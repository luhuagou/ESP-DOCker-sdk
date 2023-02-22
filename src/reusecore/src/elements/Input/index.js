
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputField, { EyeButton } from './input.style';
const Input = ({
  label,
  value,
  onBlur,
  onFocus,
  onChange,
  inputType,
  isMaterial,
  icon,
  iconPosition,
  passwordShowHide,
  className,
  ...props
}) => {
  // use toggle hooks
  const [state, setState] = useState({
    toggle: false,
    focus: false,
    value: ''
  });
