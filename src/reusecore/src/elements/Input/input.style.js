import styled from 'styled-components';
import { themeGet } from 'styled-system';

const InputField = styled.div`
  position: relative;

  /* Input field wrapper */
  .field-wrapper {
    position: relative;
  }

  /* If input has icon then these styel */
  &.icon-left,
  &.icon-right {
    .field-wrapper {
      display: flex;
      align-items: center;
      > .input-icon {
        position: absolute;
        top: 0;
        bottom: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 40px;
      }
    }
  }

  /* When icon position in left */
  &.icon-left {
    .field-wrapper {
      > .input-icon {
        left: 0;
   