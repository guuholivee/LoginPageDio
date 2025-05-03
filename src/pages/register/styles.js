import styled from 'styled-components';

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

export const Column = styled.div`
  flex: 1;
`;

export const Wrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 20px;
  color: #fff;
`;

export const TitleLogin = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const SubTitleLogin = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 35px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CriarText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #23dd7a;
  cursor: pointer;
`;

export const EsqueciText = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #e5e044;
  cursor: pointer;
`;
