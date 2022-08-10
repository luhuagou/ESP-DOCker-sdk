import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import GlideWrapper, {
  ButtonControlWrapper,
  ButtonWrapper,
  BulletControlWrapper,
  BulletButton,
  DefaultBtn,
} from './glide.style';

const GlideCarousel = ({
  className,
  children,
  options,
  controls,
  prevButton,
  nextButton,
  prevWrapper,
  nextWrapper,
  bullets,
  numberOfBullets,
  buttonWrapperStyle,
  bulletWrapper