import styled from 'styled-components';

export const CardContainer = styled.div`
    width:100%;
    background-color: #3b4651;
    position: relative;
    margin- bottom : 24px;
`

export const ImageBackground = styled.img`
    width: 100%;
    height: 100%;
`
export const Content = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    padding: 24px;
`
export const UserInfo = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom: 12px;

    div {
        margin-left: 12px;
    }
        
    h4{
        font-family: 'open sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
        } 
    p{
        font-family: 'open sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
    }
`
export const UserPicture = styled.img`
        width: 32px;
        height: 32px;
        border-radius: 22px;
        border : 3px solid #ffffff;
`

export const PostInfo = styled.div`
        margin-bottom: 12px;
        
        h4{
            font-family: 'open sans';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            color: #FFFFFF;
        }
        p{
            font-family: 'open sans';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
    }
        
       
`
export const HasInfo = styled.div`
        margin-bottom: 12px;
        
        h4{
            font-family: 'open sans', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 16px;
            color: #FFFFFF80;
        }
        
        p{
            font-family: 'open sans', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
        }
`