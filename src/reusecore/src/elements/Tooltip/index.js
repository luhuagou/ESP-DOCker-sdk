import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TooltipStyle,
  TriggerStyle,
  BubbleSize,
  BubbleStyle
} from './tooltip.style';

const Tooltip = ({
  className,
  position,
  tooltipColor,
  bubbleSize,
  bubbleStyle,
  triggerStyle,
  message,
  children,
  ...props
}) => {
  // tooltip local state
  const [state, setState] = useState({
    open: false
  });

  // Add all classs to an array