/** this is our Base Component every components must be Extend it */
import {
  space,
  borders,
  borderColor,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  display,
  fontSize,
  flex,
  order,
  alignSelf,
  color,
  compose
} from 'styled-system';

export const themed = key => props => props.theme[key];

export const base = compose(
  () => ({ boxSizing: 'border-box' }),