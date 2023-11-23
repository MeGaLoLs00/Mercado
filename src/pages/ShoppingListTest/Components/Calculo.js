import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Calculo = ({ produtos }) => {
  const total = produtos.reduce((acc, produto) => acc + produto.value, 0);

  return (
    <Text style={styles.totalTexto}>
      Total: R$
      {total.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </Text>
  );
};

const styles = StyleSheet.create({
  totalTexto: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default Calculo;
