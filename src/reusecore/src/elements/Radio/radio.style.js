import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { base } from '../base';

const RadioBoxStyle = styled.div`
  display: inline-flex;
  /* Switch label default style */
  .reusecore__field-label {
    color: ${themeGet('colors.textColor', '#484848')};
    font-size: ${themeGet('fontSizes.4', '16')}px;
    font-weight: ${themeGet('fontWeights.4', '500')};
  }

  /* Switch label style when labelPosition on left */
  &.label_left {
    label {
      display: flex;
      align-items: center;
      .reusecore__field-label {
        margin-right: ${themeGet('space.3', '10')}px;
      }
    }
  }

  /* Switch label style when labelPosition on right */
  &.label_right {
    label {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;

      .reusecore__field-label {
        margin-left: ${themeGet('space.3', '10')}px;
      }
    }
  }

  /* Checkbox default style */
  input[type='radio'] {
    &.radio {
      opacity: 0;
      position: absolute;
      margin: 0;
      z-index: -1;
      width: 0;
      height: 0;
      overflow: hidden;
      pointer-events: none;

      &:focus {
        + div {
          border-color: ${themeGet('colors.primary', '#028489')};
        }
      }

      &:checked + div {
        &::after {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
        }
      }
    }
    + div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      bord