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
  