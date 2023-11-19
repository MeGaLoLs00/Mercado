import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class AdicionarProduto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: '',
      qtde: ''
    };
  }

  adicionarProduto = () => {
    const { name, value, qtde} = this.state;
    const { onAdicionarProduto } = this.props;

    const isNumeroValido = /^[+-]?\d{1,3}(\.\d{3})*(,\d+)?$/.test(value);
    
    if (name && isNumeroValido) {
      const valorProduto = Number(value.replace(/\./g, '').replace(',', '.'));
        const quantidadeProduto = Number(qtde);
        const totalProduto = valorProduto * quantidadeProduto;

      const novoProduto = { name, value: totalProduto, qtde: quantidadeProduto };
      onAdicionarProduto(novoProduto);
      this.setState({ name: '', value: '', qtde: '1' });
    } else {
      alert('Por favor, insira um nome e um valor numérico válido.');
    }
  }


  render() {
    return (
      <View style={styles.adicionarProduto}>
        <TextInput
          style={styles.input1}
          placeholder="Nome do Produto"
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
        />
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Valor"
          keyboardType="decimal-pad"
          value={this.state.value}
          onChangeText={(text) => this.setState({ value: text })}
        />
        <View style={styles.space} />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          keyboardType="numeric"
          value={this.state.qtde}
          onChangeText={(text) => this.setState({ qtde: text })}
        />
        </View>
        <Button title="Adicionar Produto" onPress={() => this.adicionarProduto()} />
      </View>
    );
  }
}

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
    width: '100%'
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%'
  },
   inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  space: {
    width: 10,
  },
});

export default AdicionarProduto;