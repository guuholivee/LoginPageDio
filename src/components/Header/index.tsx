import React, { useContext } from 'react';
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import { Link } from "react-router-dom";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper
} from './styles';
import { AuthContext } from '../../context/auth';

const Header = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt='Logo' />
          </Link>

          {user.id && (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          )}
        </Row>

        <Row>
          {user.id ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/179080876?s=96&v=4" />
              <Link to="/" onClick={(e) => { e.preventDefault(); handleSignOut(); }}>Sair</Link>
            </>
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
