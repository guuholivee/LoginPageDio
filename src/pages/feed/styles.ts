import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px; 
    line-height: 25px;
    margin-bottom: 24px;
    color: #ffffff;
`;

export const TitleHighLight = styled.span`
    color: #E4105d;
`;

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;

    color: #ffffff70;
`;

interface ColumnProps {
    flex: number;
  }
  
  export const Column = styled.div<ColumnProps>`
    display: flex;
    flex: ${({ flex }) => flex};
    flex-direction: column;
  `;