import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Column,
  Container,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper
} from "./styles";

// Schema de validação com Yup
const schema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  senha: yup.string().min(6, 'Mínimo 6 caracteres').required('Senha é obrigatória'),
}).required();

const Register = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:8000/users', formData);
      alert('Cadastro realizado com sucesso!');
      reset();
      navigate('/login'); // Redireciona para login após cadastro
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar. Tente novamente!');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            Cadastre-se para aprender com experts, dominar as tecnologias do mercado e acelerar sua carreira.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Criar sua conta</TitleLogin>
            <SubTitleLogin>Preencha seus dados para se cadastrar</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                control={control}
                placeholder="Nome completo"
                errorMessage={errors.nome?.message}
              />
              <Input
                name="email"
                control={control}
                placeholder="E-mail"
                errorMessage={errors.email?.message}
              />
              <Input
                name="senha"
                control={control}
                placeholder="Senha"
                type="password"
                errorMessage={errors.senha?.message}
              />
              <Button title="Cadastrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText onClick={() => navigate('/')}>Já tenho conta</EsqueciText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
