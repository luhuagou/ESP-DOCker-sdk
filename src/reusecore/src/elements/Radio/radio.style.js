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
        m