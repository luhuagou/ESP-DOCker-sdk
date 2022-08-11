import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import ComponentWrapper, {
  Input,
  SelectWrapper,
  CurrentOption,
  Dropdown,
} from './inputGroup.style';

const InputGroup = ({
  className,
  inputType,
  placeholder,
  selectOptions,
  inputValue,
  inputOnChange,
  selectOnUpdate,
  selectedValue,
  currency,
}) => {
  const [state, setState] = 