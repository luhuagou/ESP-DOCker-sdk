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
  const addAllClasses = ['reusecore__tooltip'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // hide tooltip on mouse leave
  const hideTooltip = () => {
    setState({ open: false });
  };

  // show tooltip on mouse over
  const showTooltip = () => {
    setState({ open: true });
  };

  return (
    <TooltipStyle
      className={addAllClasses.join(' ')}
      onMouseLeave={hideTooltip}
      tooltipColor={tooltipColor}
      {...props}
    >
      {state.open && (
        <BubbleSize
          className={`tooltip-bubble tooltip-${position}`}
          {...bubbleSize}
        >
          <BubbleStyle className="tooltip-message" {...bubbleStyle}>
            {message}
          </BubbleStyle>
        </BubbleSize>
      )}
      <TriggerStyle
        className="tooltip-trigger"
        onMouseOver={showTooltip}
        {...triggerStyle}
      >
        {children}
      </TriggerStyle>
    </TooltipStyle>
  );
};

Tooltip.propTy