// ShoppingListTest.js
import React, { useState } from 'react';
import { View, StyleSheet, Button, AsyncStorage } from 'react-native';
import AdicionarProduto from './Components/AdicionarProduto';
import ListaProdutos from './Components/ListaProdutos';
import Calculo from './Components/Calculo';
import { ProdutosProvider } from '../../../ProdutosContext.js/ProdutosContext';
import { Text } from 'react-native';

export default function ShoppingListTest() {
  const [produtos, setProdutos] = useState([]);
  const [listaAtual, setListaAtual] = useState('');

  const adicionarProduto = (novoProduto) => {
    setProdutos((prevProdutos) => [...prevProdutos, novoProduto]);
  };

  const removerProduto = (index) => {
    setProdutos((prevProdutos) => prevProdutos.filter((_, i) => i !== index));
  };

  
  const handleListaCriada = (nomeLista) => {
    setListaAtual(nomeLista);
  };

  return (
    <View style={styles.container}>
      <ProdutosProvider>
      <View style={styles.tabela}>
        <ListaProdutos produtos={produtos} onRemoverProduto={removerProduto} />
        <Calculo produtos={produtos} />
      </View>
      <View style={styles.space} />
      
      <AdicionarProduto onAdicionarProduto={adicionarProduto} listaAtual={listaAtual} />
      </ProdutosProvider>
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

