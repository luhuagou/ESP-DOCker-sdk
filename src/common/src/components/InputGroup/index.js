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
  const [state, setState] = useState({
    open: false,
    currency,
    selectedValue,
  });

  const handleDropdown = () => {
    setState({
      ...state,
      open: !state.open,
    });
  };

  const handleSelectedData = item => {
    setState({
      ...state,
      open: false,
      currency: item.title,
      selectedValue: item.value,
    });
    selectOnUpdate(item.value);
  };

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setState({ ...state, open: false }));

  const addAllClasses = ['input_group'];
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ComponentWrapper className={addAllClasses.join(' ')}>
      <Input
        type={inputType}
        value={inputValue}
        placeholder={placeholder}
        onChange={inputOnChange}
        required={true}
      />
      <SelectWrapper className="select_wrapper">
        <CurrentOption className="current_option" onClick={handleDropdown}>
          <span className="text">{state.currency}</spa