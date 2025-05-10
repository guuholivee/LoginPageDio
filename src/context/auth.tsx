import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthContext, IAuthProviderProps, IUser, ILoginData } from './types';
import { api } from '../services/api';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const navigate = useNavigate();

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(
        `users?email=${loginData.email}`
      );

      if (data.length === 1) {
        console.log('Senha no DB:', data[0].password);
        console.log('Senha inserida:', loginData.password);

        if (data[0].password === loginData.password) {
          setUser(data[0]);
          navigate('/feed');
        } else {
          alert('Email ou senha inválidos!');
        }
      } else {
        alert('Email ou senha inválidos!');
      }
    } catch (error) {
      console.error('Erro na autenticação:', error);
      alert('Erro ao fazer login, tente novamente mais tarde!');
    }
  };

  const handleSignOut = () => {
    setUser({} as IUser);
    navigate('/'); // opcional: redireciona após logout
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
