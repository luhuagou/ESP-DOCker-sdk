import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import Button from '../../reusecore/src/elements/Button';

import FeatureBlockWrapper, {
  IconWrapper,
  ContentWrapper,
} from './style.js';

const FeatureBlock = ({
  className,
  icon,
  field,
  itemNumber,
  time,
  buttonInfo,
  title,
  description,
  iconPosition,
  additionalContent,
  wrapperStyle,
  contentStyle,
  btnWrapperStyle,
  buttonStyle,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['feature__block'];

  // Add icon position class
  if (iconPosition) {
    addAllClasses.push(`icon_${iconPosition}`);
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // check icon value and add
  const Icon = icon && (
    <IconWrapper
      className="icon__wrapper"
      width='96px' 
      height='50%'
    >
      {icon}
    </IconWrapper>
  );

  return (
    <FeatureBlockWrapper
      className={addAllClasses.join(' ')}
      {...wrapperStyle}
      {...props}
    >
      <div className="icon_container">
        {Icon}
        <p>{field}</p>
      </div>

      {title || description ? (
        <Fragment>
          <ContentWrapper className="content__wrapper" {...contentStyle}>
            <div 