import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {script} from './src/view/home/script'

 const data = {
  "cep": "20030-041",
  "logradouro": "Rua Santa Luzia",
  "complemento": "de 407 ao fim - lado ímpar",
  "bairro": "Centro",
  "localidade": "Rio de Janeiro",
  "uf": "RJ",
  "ibge": "3304557",
  "gia": "",
  "ddd": "21",
  "siafi": "6001"
 }




export default function App() {

  return (
    <View style={styles.container}>
        <Text>Cep: {data.cep}</Text>
        <Text>Bairro: {data.bairro}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
