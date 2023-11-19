import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../BD/api'; // Importe o seu arquivo api.js

const schema = yup.object({
  username: yup.string().required("Informe seu nome completo"),
  Nickanme: yup.string().required("Informe seu Apelido"),
  email: yup.string().email("Email Inválido").required("Informe seu email"),
  password: yup.string().min(6, "A sua senha deve ter pelo menos 6 dígitos").max(10, "A sua senha não pode ter mais de 10 dígitos").required("Informe sua senha")
});

export default function RegisIn() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const handleSignIn = async (data) => {
    try {
      // Chama a API para criar um novo usuário
      const response = await api.post('/criar-usuario', {
        NM_Cliente: data.username,
        Nickanme:data.nickname,
        email: data.email,
        senha: data.password,
      });

      // Exibe mensagem de sucesso
      Alert.alert('Cadastro bem-sucedido', response.data.message);

      // Limpa os campos após o cadastro bem-sucedido (opcional)
      // reset();
    } catch (error) {
      if (error.response) {
        // O servidor retornou uma resposta com um status diferente de 2xx
        console.error('Erro no servidor:', error.response.data);
      } else if (error.request) {
        // A solicitação foi feita, mas não houve resposta do servidor
        console.error('Sem resposta do servidor');
      } else {
        // Algo aconteceu ao configurar a solicitação que desencadeou um erro
        console.error('Erro ao configurar a solicitação:', error.message);
      }
      console.error('Erro geral:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
        <Text style={styles.message}>Cadastro</Text>
      </Animatable.View>

      <Animatable.View animation='fadeInUp' style={styles.containerForm}>
        
        <Controller //nome
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Digite seu nome completo"
              />
              {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}
            </>
          )}
        />

        <Controller //apelido
          control={control}
          name="Nickanme"
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Digite seu apelido!"
              />
              {errors.nickname && <Text style={styles.labelError}>{errors.nickname?.message}</Text>}
            </>
          )}
        />

        <Controller // email
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Digite seu Email"
              />
              {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}
            </>
          )}
        />

        <Controller // senha
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Digite seu senha"
              />
              {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}
            </>
          )}
        />
      </Animatable.View>

      <TouchableOpacity
        style={styles.buttonRegister}
        onPress={handleSubmit(handleSignIn)}
      >
        <Text style={styles.registerText}>Criar Conta!</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#3498DA',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:18

    },

    containerHeader:{
        flax:1,
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart:'5%'

    },

    message:{
        paddingStart:'10%',
        fontSize: 40,
        fontWeight:'bold',
        color:'#FFF',
        marginBottom:'20%',
        marginTop:'10%',
    },
    
    containerForm:{
        flex:2,
        backgroundColor:'#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%',
        bottom: 10,
        borderWidth: 2,
        borderRadius: 5,
        marginRight: 5,
        marginLeft: 5,
        borderColor: '#FFFC00',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25

    },

    title:{
        fontSize:20,
        marginTop:28        

    },

    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16

    },

    button:{
        backgroundColor:'#3498DA',
        width:'100%',
        borderRadius:4,
        paddingVertical:8,
        marginTop:14,
        justifyContent:'center',
        alignItems:'center',
        

    },

    buttonText:{
        color:'#FFF',
        fontSize:18,
        fontWeight:'bold'

    },

    buttonRegister:{
        marginTop:14,
        alignSelf:'center'
    },

    registerText:{
        color:'#a1a1a1'
    },

    labelError:{
        alignSelf:'flex-start',
        color:'#ff0000',
        marginBottom:8,
    }


})