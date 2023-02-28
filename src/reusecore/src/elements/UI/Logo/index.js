import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Link from '../../Link';
import Image from '../../Image';

const Logo = ({
  logoWrapperStyle,
  logoStyle,
  titleStyle,
  withAchor,
  anchorProps,
  logoSrc,
  title,
  ...props
}) => (
  <Link {...props} {...logoWrapperStyle}>
    {withAchor ? (
      <a {...anchorProps}>
        {logoSrc ? (
          <Image src={logoSrc} alt={title} {...logoStyle} />
        ) : (
          <Text content={title} {...titleStyle} />
        )}
      </a>
    ) : (
      <>
        {logoSrc ? (
          <Image src={logoSrc} alt={title} {...logoStyle} />
        ) : (
          <Text content={title} {...titleStyle} />
      