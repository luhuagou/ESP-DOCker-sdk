import styled from 'styled-components';
import {
  width,
  height,
  color,
  space,
  border,
  boxShadow,
  borderRadius,
} from 'styled-system';

const HamburgMenuWrapper = styled.button`
  border: 0;
  background: transparent;
  width: 44px;
  height: 30px;
  cursor: pointer;
  ${width}
  ${height}
  ${color}
  ${space}
  ${border}
  ${boxShadow}
  ${borderRadius}

  > span {
    display: block;
    width: 100%;
    height: 2px;
    margin: 4px 0;
    float: right;
    background-color: ${props => (props.barColor ? props.barColor : '#10ac84')};
    transition: all 0.3s ease;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      width: calc(100% - 10px);
      margin-bottom: 0;
    }
  }
  &:focus,
  &:hover {
    outline: none;
    > span {
      &:last-child {
    