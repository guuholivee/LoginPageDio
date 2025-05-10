import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  background-color: #3b4651;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  div {
    margin-left: 12px;
  }

  h4 {
    font-size: 16px;
    color: #fff;
  }

  p {
    font-size: 12px;
    color: #ccc;
  }
`;

export const UserPicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const PostInfo = styled.div`
  margin-bottom: 16px;

  h4 {
    font-size: 18px;
    color: #fff;
  }

  p {
    font-size: 14px;
    color: #ccc;
  }
`;

export const HasInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 14px;
    color: #ccc;
  }

  p {
    font-size: 14px;
    color: #fff;
    display: flex;
    align-items: center;
  }
`;