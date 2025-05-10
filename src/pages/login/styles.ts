import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`  
  max-width: 300px;
`;

export const ErrorText = styled.p`
  color: #ff0000;
  font-family: 'Open Sans';
  font-size: 14px;
`

export const Column = styled.div`  
  flex: 1;
`;

export const Row = styled.div`  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #ffffff;
`;

export const TitleLogin = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
`;

export const SubTitleLogin = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
`;

export const EsqueciText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #e5e844;
`;

export const CriarText = styled.button`
  background-color: #e4105d;
  color: #ffffff;
  border: none;
  border-radius: 22px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #c30f42;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

