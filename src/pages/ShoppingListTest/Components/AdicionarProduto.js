import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../../../Server/api'; // Importe o seu arquivo api.js

const schema = yup.object().shape({
  nome: yup.string().required('Campo obrigatório'),
  valor: yup
    .string()
    .matches(/^[+-]?\d{1,3}(\.\d{3})*(,\d+)?$/, 'Insira um valor numérico válido')
    .required('Campo obrigatório'),
  quantidade: yup.string().required('Campo obrigatório'),
});

const AdicionarProduto = ({ listaAtualId }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const adicionarProduto = async (data) => {
    console.log('Dados do formulário:', data);
    const { nome, valor, quantidade } = data;

    const valorProduto = Number(valor.replace(/\./g, '').replace(',', '.'));
    const quantidadeProduto = Number(quantidade);
    const totalProduto = valorProduto * quantidadeProduto;

    const novoProduto = { nome, valor: totalProduto, quantidade: quantidadeProduto };

    try {
      const responseProduto = await api.post('/adicionar-produto', novoProduto);

      if (responseProduto.status !== 200) {
        console.error('Erro ao adicionar produto - Resposta da API:', responseProduto);
        return;
      }

      const Id_produto = responseProduto.data.id; // Supondo que a API retorna o ID do produto

      // 2. Associe o produto à lista na tabela tb_listaProduto
      const responseListaProduto = await api.post('/associar-produto-lista', {
        Id_produto,
        ID_Lista: listaAtualId, // Substitua pelo ID da lista atual
      });

      if (responseListaProduto.status === 200) {
        console.log('Produto associado à lista com sucesso');
        // Lidar com o feedback visual ou lógica adicional após a adição do produto
      } else {
        console.error('Erro ao associar produto à lista - Resposta da API:', responseListaProduto);
        // Lidar com erros ou fornecer feedback ao usuário
      }
      
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      // Lidar com erros ou fornecer feedback ao usuário
    }

    // Limpar os campos do formulário após adicionar o produto
    setValue('nome', '');
    setValue('valor', '');
    setValue('quantidade', '1');
  };

  return (
    <View style={styles.adicionarProduto}>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input1}
            placeholder="Nome do Produto"
            value={field.value}
            onChangeText={(text) => field.onChange(text)}
          />
        )}
        name="nome"
        defaultValue=""
      />

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Valor"
              keyboardType="decimal-pad"
              value={field.value}
              onChangeText={(text) => field.onChange(text)}
            />
          )}
          name="valor"
          defaultValue=""
        />

        <View style={styles.space} />

        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Quantidade"
              keyboardType="numeric"
              value={field.value}
              onChangeText={(text) => field.onChange(text)}
            />
          )}
          name="quantidade"
          defaultValue="1"
        />
      </View>

      {errors.nome && <Text>{errors.nome.message}</Text>}
      {errors.valor && <Text>{errors.valor.message}</Text>}
      {errors.quantidade && <Text>{errors.quantidade.message}</Text>}

      <Button title="Adicionar Produto" onPress={handleSubmit(adicionarProduto)} />
    </View>
  );
};

const styles = StyleSheet.create({
  adicionarProduto: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  input1: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  space: {
    width: 10,
  },
});

export default AdicionarProduto;
