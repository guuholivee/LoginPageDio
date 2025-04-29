import React from 'react'
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";

import{
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = ( {autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='Logo'/>
                
               {/* condição  se caso estiver autenticado nao mostrar o menu*/}
                {autenticado ? (  
                <>
                <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
                </> 
                ): null}

            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/179080876?s=96&v=4"/> 
                ) : (
                    <> 
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                    </>
                ) }
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
