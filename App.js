import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from '../mercadomaismais/src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#3498DA" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}

