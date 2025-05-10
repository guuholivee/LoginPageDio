import  React from 'react';
import { IUser } from '../types/users';


export interface IAuthContext {
  user: IUser;
  handleLogin: (loginData: ILoginData) => Promise<void>;
  handleSignOut: () => void; 
}


export interface IAuthProviderProps {
  children: React.ReactNode;
}

export interface ILoginData {
  email: string;
  password: string;
}
export { IUser };

