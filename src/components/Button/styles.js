import styled, { css } from "styled-components"; 

export const ButtonContainer = styled.button`
  background: #565656;
  border-radius: 22px;
  position: relative;
  
  color: #ffffff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${({ $variant }) => $variant !== "primary" && css`
    min-width: 167px;
    height: 33px;
    background: #e4105d;

    &:hover {
      background: #ffffff;
      color: #e4105d;
      transform: scale(1.05);
      box-shadow: 0px 0px 10px #e4105d88;
    }

    &::after {
      content: '';
      position: absolute;
      border: 1px solid #e4105d;
      top: -5px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 22px;
    }
  `}
`;
