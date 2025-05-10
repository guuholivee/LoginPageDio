import styled, { css } from "styled-components";

interface ButtonContainerProps {
  $variant: 'primary' | 'secondary'; // ou outros valores que você for usar
  disabled?: boolean; // Adicionando o estado disabled
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
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

  /* Estilo para o estado disabled */
  ${({ disabled }) => disabled && css`
    background: #d3d3d3; /* Cor de fundo para o botão desabilitado */
    color: #a1a1a1;      /* Cor do texto para o botão desabilitado */
    cursor: not-allowed; /* Modifica o cursor para indicar que está desabilitado */
    &:hover {
      background: #d3d3d3; /* Sem efeito de hover quando desabilitado */
      color: #a1a1a1;      /* Sem mudança de cor */
      transform: none;     /* Não há transformação */
      box-shadow: none;    /* Remove qualquer sombra */
    }
  `}
`;
