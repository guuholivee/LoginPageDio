import React from 'react';

import { FiThumbsUp } from 'react-icons/fi';

import { 
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo, 
    UserInfo, 
    UserPicture
} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground  src="https://i.ytimg.com/vi/8BQR-E-P0pc/maxresdefault.jpg"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/179080876?s=96&v=4"/>
                <div>
                    <h4>Gustavo Batista</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito para o cuurso de html e css no bootcamp dio... <strong>Saiba Mais</strong> </p>
            </PostInfo>
            <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p> 
                    <FiThumbsUp size={20} color="#fff" /> 12
                    </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };