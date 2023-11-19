import React, { useState } from 'react';
import { View, StyleSheet, Button, AsyncStorage } from 'react-native';
import AdicionarProduto from './Components/AddProduct';
import ListaProdutos from './Components/ProductList';
import Calculo from './Components/Calculator';

export default function ShoppingList() {
  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (novoProduto) => {
    setProdutos((prevProdutos) => [...prevProdutos, novoProduto]);
  };

  const removerProduto = (index) => {
    setProdutos((prevProdutos) => prevProdutos.filter((_, i) => i !== index));
  };

  const salvarLista = async () => {
    try {
      await AsyncStorage.setItem('ListasSalvas', JSON.stringify(produtos));
      alert('Lista salva com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar lista:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabela}>
        <ListaProdutos produtos={produtos} onRemoverProduto={removerProduto} />
        <Calculo produtos={produtos} />
      </View>
      <View style={styles.space} />
      <Button title="Salvar Lista" onPress={salvarLista} />
      <AdicionarProduto onAdicionarProduto={adicionarProduto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  tabela: {
    flex: 1,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  space: {
    height: 20,
  },
});
