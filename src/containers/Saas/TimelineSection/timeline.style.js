import styled from 'styled-components';

export const TimelineWrapper = styled.div``;

export const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 0;
  box-shadow: 0px 3px 8.46px 0.54px rgba(23, 65, 104, 0.2);
  z-index: 1;
  background: #fff;
  transform: translateY(-50%);

  &:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ebedf5;
    transition: 0.25s ease-in-out;
  }
  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    &:after {
      width: 10px;
      height: 10px;
    }
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 90px;
  padding-left: 50px;
  &:first-child {
    &:be