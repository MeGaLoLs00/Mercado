// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';
import api from '../Server/api';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';

const AuthContext = createContext();


const loginSchema = yup.object({
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  senha: yup.string().min(6, 'A sua senha deve ter pelo menos 6 dígitos').required('Informe sua senha'),
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  const login = async (userData, navigation) => {
    try {
      await loginSchema.validate(userData);

      const response = await api.post('/login', userData);
      

      if (response.status === 200) {
        const {message, user} = response.data;

        if( user && user.id){
        const { id, ...otherUserData } = response.data;
        setUser(user);
        Alert.alert('Login bem-sucedido', response.data.message);
        navigation.navigate('Home');
        } else { 
          console.error('Resposta de login invalida', response)
        }
      } else {
        console.error('Erro no login:', response);
      }
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
