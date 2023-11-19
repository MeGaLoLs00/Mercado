import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';


const MyLists = ({ navigation }) => {
  const [savedLists, setSavedLists] = useState([]);

  useEffect(() => {
    loadSavedLists();
  }, []);

  const loadSavedLists = async () => {
    try {
      // Puxa as listas do AsyncStorage
      const lists = await AsyncStorage.getItem('ListasSalvas');
      if (lists !== null) {
        // Caso não haja listas
        setSavedLists(JSON.parse(lists));
      }
    } catch (error) {
      console.error('Erro ao carregar as listas salvas:', error);
    }
  };

  const renderList = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => console.log('Lista selecionada:', item)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text>Listas Salvas</Text>
      <FlatList
        data={savedLists}
        renderItem={renderList}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default MyLists;