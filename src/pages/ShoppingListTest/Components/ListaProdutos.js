import React, { Component } from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';

class ListaProdutos extends Component {
  render() {
    const { produtos, onRemoverProduto } = this.props;

    return (
      <ScrollView style={styles.listaProdutos}>
        {produtos.map((produto, index) => (
          <View key={index} style={styles.linhaProduto}>
            <Text style={styles.produtoTexto}>{produto.nome}</Text>
            <Text style={styles.produtoTexto}>Quantidade:{produto.quantidade}</Text>
            <Text style={styles.produtoTexto}>R${produto.valor.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}</Text>
            <Button title="Remover" onPress={() => onRemoverProduto(index)} />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listaProdutos: {
    marginBottom: 10,
  },
  linhaProduto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5,
    paddingBottom: 5,
  },
  produtoTexto: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default ListaProdutos;