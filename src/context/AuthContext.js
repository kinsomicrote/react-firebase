import { createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = AuthContext.Provider;

export const AuthConsumer = AuthContext.Consumer;
