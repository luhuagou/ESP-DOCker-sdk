import styled from 'styled-components';

const ComponentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Input = styled.input`
  width: calc(100% - 180px);
  height: 65px;
  font-size: 20px;
  font-weight: 600;
  padding: 0 20px;
  border: 2px solid #f2f2f2;
  border-right-width: 1px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: #294859;
  @media only screen and (max-width: 1440px) {
    font-size: 16px;
    height: 60px;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
  }

  &::placeholder {
    color: #616970;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 180px;
`;

export const CurrentOption = styled.div`
  cursor: point