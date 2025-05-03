import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper
} from "./styles";

// Validação do formulário com Yup
const schema = yup.object({
  email: yup.string().email('Email não é válido').required('Campo obrigatório'),
  senha: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {
  const navigate = useNavigate();

  // Configuração do React Hook Form
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  // Função chamada ao submeter o formulário
  const onSubmit = async (formData) => {
    try {
      // Faz a requisição para a API
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.senha}`);
  
      // Verifica se o email e a senha correspondem a um usuário válido
      if (data.length === 1 && data[0].email === formData.email && data[0].senha === formData.senha) {
        navigate('/feed'); // Redireciona para o feed
      } else {
        alert('Email ou senha inválidos!');
      }
    } catch (error) {
      console.error('Erro na API:', error);
      alert('Erro ao fazer login, tente novamente mais tarde!');
    }
  };
  

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias 
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>

              {/* Campo de email */}
              <Input
                name="email"
                control={control}
                placeholder="E-mail"
                errorMessage={errors.email?.message} // Exibe mensagem de erro, se houver
              />
              {/* Campo de senha */}
              <Input
                name="senha"
                control={control}
                placeholder="Senha"
                type="senha"
                errorMessage={errors.password?.message} // Exibe mensagem de erro, se houver
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };