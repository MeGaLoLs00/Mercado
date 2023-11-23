import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import api from '../../../Server/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../../AuthContext/AuthContext';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

const schema = yup.object().shape({
  nome: yup.string().required('Nome da Lista é obrigatório'),
});

const CreateList = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const { user } = useAuth();

  const [nome, setNome] = useState('');
  const onListaCriada = (nomeLista) => {
    console.log(`Lista "${nomeLista}" criada com sucesso!`); 
  };
  const onSubmit = async (data) => {
    try {
      console.log('Valor de user.id:', user.id)
      const response = await api.post('/criar-lista', {
        id_Cliente: user.id,
        nome: data.nome,
      });
      
      if (response.status == 200) {
        onListaCriada(data.nome);
        navigation.navigate('ShoppingListTest', { nomeLista: data.nome });
      } else {
        console.error('Erro ao criar lista - Resposta da API:', response);
        if (response.status === 401) {
          // Mensagem específica para erro de não autorizado (401)
          alert('Você não tem permissão para criar uma lista.');
        } else {
          // Mensagem padrão para outros erros
          alert('Erro ao criar lista. Tente novamente mais tarde.');
        }
      }
    } catch (error) {
      console.error('Erro ao criar lista:', error);
    }
  };

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
        <Image
                source={require('../../assets/Logo.png')}
                style={styles.logo}
            />
        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
      <View style={styles.adicionarLista}>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={styles.input1}
              placeholder="Nome da Lista"
              value={nome}
              onChangeText={(text) => {
                setNome(text);
                field.onChange(text);
              }}
            />
          )}
          name="nome"
          defaultValue=""
        />
        {errors.nome && <Text style={styles.errorText}>{errors.nome.message}</Text>}

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <View style={styles.space} />

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Criar Lista</Text>
          </TouchableOpacity>

        </View>
      </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3498DA',
    justifyContent: 'center',
    padding: 10,
  },
  logo:{
    width: 120,
    height: 120,
    resizeMode: 'contain',
    position: 'absolute',
    top: 30,
    left: '35%',
},
  containerForm: {
    position: 'absolute',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FFFC00',
    borderRadius: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius:25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 10,
    paddingStart:'5%',
    paddingEnd:'5%',
    marginLeft: 9,
    width: '100%',
    height: '50%',
    bottom: 50
  },
  input1: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  space: {
    width: 25,
  },
  button: {
    flex: 1,
    backgroundColor: '#3498DA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CreateList;