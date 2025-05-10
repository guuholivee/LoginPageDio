import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`
export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #ffffff;
    margin: 5px 0 8px 10px;
`
export const NameText = styled.div`
    font-family: 'open sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
`
interface IProgressProps {
    percentual: number;
  }
  
  export const Progress = styled.div<IProgressProps>`
    width: 180px;
    height: 6px;
    background-color: #FFFFFF;
    border-radius: 3px;
    position: relative;
  
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: ${({ percentual }) => percentual}%;
      height: 6px;
      background-color: #23dd7a;
      border-radius: 3px;
    }
  `;
  