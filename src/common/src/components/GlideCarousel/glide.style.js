
import styled from 'styled-components';
import {
  width,
  height,
  display,
  space,
  color,
  borders,
  boxShadow,
  borderRadius,
  position,
  top,
  left,
  right,
  bottom,
  alignItems,
  justifyContent,
  flexWrap,
} from 'styled-system';

// Glide wrapper style
const GlideWrapper = styled.div`
  ${width}
  ${height}
  ${space}
`;

// Glide slide wrapper style
const GlideSlideWrapper = styled.li`
  ${space}
  ${color}
  ${borders}
  ${boxShadow}
  ${borderRadius}
`;

// Button wrapper style
const ButtonWrapper = styled.div`
  display: inline-block;
  ${display}
  ${space}
  ${color}
  ${borders}
  ${boxShadow}
  ${borderRadius}
  ${position}
  ${top}
  ${left}
  ${right}
  ${bottom}
`;

// ButtonControlWrapper style
const ButtonControlWrapper = styled.div`
  ${display}
  ${space}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${top}