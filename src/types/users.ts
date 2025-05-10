export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
  }
  
  export interface ILoginData {
    email: string;
    password: string;
  }
  
  export interface IAuthContext {
    user: IUser;
    handleLogin: (loginData: ILoginData) => Promise<void>;
    handleSignOut: () => void;
  }
  
  export interface IAuthProviderProps {
    children: React.ReactNode;
  }