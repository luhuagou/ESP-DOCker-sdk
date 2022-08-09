import styled, { keyframes } from 'styled-components';
import {
  AccordionItemHeading,
  AccordionItemButton,
  Accordion,
  AccordionItem,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const AccordionWrapper = styled(Accordion)``;

export const AccordionItemWrapper = styled(AccordionItem)``;

export const OpenIcon = styled.div``;
export const CloseIcon = styled.div`
  opacity: 0;
`;

export const AccordionTitleWrapper = styled(AccordionItemHeading)`
  > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    &[aria-expanded='false'] {
      ${OpenIcon} {
        opacity: 0;
      }
      ${CloseIcon} {
        opacity: 1;
      }
    }
  }

  &:focus {
    outline: none;
  }

  * {
    flex-grow: 1;
  }
`;
export const AccordionItemButtonWrapper = styled(AccordionItemButton)``;
export const AccordionBodyWrapper = styled(AccordionItemPanel)`
  animation: 0.35s ${fadeIn} ease-in;
  &.accordion__body--hidden {
    animatio