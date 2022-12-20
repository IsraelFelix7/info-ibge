import React, { useState } from 'react';
import { Alert,Image, View } from 'react-native';

import {Botao, TextoBotao, Text, Input, styles } from './style';


const IBGE = (props) => {
  const [cidade, setCidade] = useState('');

  return (
    <View style={styles.wrap}>

        <Image
          style={styles.image}
          source={{uri: 'https://viconsaga.com.br/img/ibge.png'}}
        />

      <Text>Bem vindo a Info IBGE! {'\n'} Informe sua cidade e encontre informações sobre a mesma. obs: não usar acentuação.</Text>
    
      <Input
        placeholder="Cidade" placeholderTextColor="#fff"
        value={cidade}
        onChangeText={setCidade}
      />

      <Botao onPress={() => {
        if (cidade != "") {
            props.navigation.navigate('InfoCidade', { cidade })
        } else {
          Alert.alert('Digite uma cidade!')
        }
      }}><TextoBotao>Consultar</TextoBotao></Botao>


    </View>
  );
};

export default IBGE;


