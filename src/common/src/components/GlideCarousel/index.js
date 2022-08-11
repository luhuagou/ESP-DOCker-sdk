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
  bulletWrapperStyle,
  bulletButtonStyle,
  carouselSelector,
}) => {
  // Add all classs to an array
  const addAllClasses = ['glide'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // number of bullets loop
  const totalBullets = [];
  for (let i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  }

  // Load glide
  useEffect(() => {
    const glide = new Glide(
      carouselSelector ? `#${carouselSelector}` : '#glide',
      {
        ...options,
      }
    );
    glide.mount();
  });

  return (
    <GlideWrapper
      className={addAllClasses.join(' ')}
      id={carouselSelector || 'glide'}
    >
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{children}</ul>
      </div>

      {/** if controls prop true then show glide controls nav */}
      {controls && (
        <ButtonControlWrapper
          className="glide__controls"
          data-glide-el="controls"
          {...buttonWrapperSt