import React, { useState } from 'react';

interface AuthContextProps {
  isUser: boolean;
  signIn: (user: any, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}
interface AuthContextProviderProps {
  children: JSX.Element;
}

export const AuthContext = React.createContext<Partial<AuthContextProps>>({});
const { Provider } = AuthContext;

function AuthContextProvider(props: AuthContextProviderProps) {
  const [isUser, setIsUser] = useState<boolean>(false);

  const signIn = () => {
    console.log('ssssss');
    setIsUser(true);
  };
  const signOut = () => {
    setIsUser(false);
  };

  const value = {
    isUser,
    signIn,
    signOut,
  };
  return <Provider value={value}>{props.children}</Provider>;
}

export default AuthContextProvider;
