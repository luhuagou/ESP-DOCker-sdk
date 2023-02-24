import React from 'react';
import PropTypes from 'prop-types';
import NavbarStyle from './navbar.style';

const Navbar = ({ className, children, navbarStyle, ...props }) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__navbar'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <NavbarStyle className={addAllClasses.join(' ')} {...props}>
      {children}
    </NavbarStyle>
  );
};
