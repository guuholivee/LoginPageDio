import React from 'react';

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighLight, } from './styles';



const Feed = () => {

  return ( 
  <>
      <Header   />
      <Container>
        <Column flex={3}>
          <Title>Feed de notícias</Title>
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
            <TitleHighLight>top 5 da semana!</TitleHighLight>
            <br /> 
            Atualize seu perfil para ter acesso a novas oportunidades.
            <UserInfo   percentual={35} nome="Gustavo Batista" image="https://avatars.githubusercontent.com/u/179080876?s=96&v=4"/>
            <UserInfo   percentual={40} nome="Gustavo Batista" image="https://avatars.githubusercontent.com/u/179080876?s=96&v=4"/>
            <UserInfo   percentual={80} nome="Gustavo Batista" image="https://avatars.githubusercontent.com/u/179080876?s=96&v=4"/>
            <UserInfo   percentual={15} nome="Gustavo Batista" image="https://avatars.githubusercontent.com/u/179080876?s=96&v=4"/>
            <UserInfo   percentual={95} nome="Gustavo Batista" image="https://avatars.githubusercontent.com/u/179080876?s=96&v=4"/>
        </Column>
   </Container>
    </> 
  );
};

export { Feed };




