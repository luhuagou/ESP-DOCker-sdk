import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RcDrawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';

const Drawer = ({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,

  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__drawer'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <Fra