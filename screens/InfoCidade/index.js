import React, { useState, useEffect } from 'react';
import { Alert, Image, View } from 'react-native';

import { Botao, TextoBotao, Text, Descricao, styles } from './style';

const InfoCidade = (props) => {
  let cidadeRecebida = props.route.params.cidade
  const [cidade, setCidade] = useState(undefined);
  const ReceberDados = () => {

    const search = ' ';
    const replaceWith = '-';
    const result = cidadeRecebida.split(search).join(replaceWith);
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/' + result)
      .then((res) => res.json())
      .then((resultado) => {
        if (resultado.length != undefined) {
          setCidade(resultado[0])
        } else {
          setCidade(resultado)
        }

      })
      .catch((erro) => {
        Alert.alert('Algo deu errado!');

      });

  };

  useEffect(() => {
    ReceberDados();
  }, [cidadeRecebida]);

  return (
    <View style={styles.wrap}>

      <Image
        style={styles.image}
        source={{ uri: 'https://viconsaga.com.br/img/ibge.png' }}
      />


      {cidade != undefined ? (

        <>
          <Text>{cidade.nome}</Text>
          <Descricao>Estado: {cidade.microrregiao.mesorregiao.UF.nome} - {cidade.microrregiao.mesorregiao.UF.sigla}</Descricao>
          <Descricao>Região: {cidade.microrregiao.mesorregiao.UF.regiao.nome} - {cidade.microrregiao.mesorregiao.UF.regiao.sigla}</Descricao>
          <Descricao>Região {cidade.microrregiao.mesorregiao.nome}</Descricao>
        </>
      ) : (
        <Text>Nehuma informção sobre a cidade foi encontrada!</Text>
      )}

      <Botao onPress={() => {
        props.navigation.navigate('IBGE')
      }}><TextoBotao>Consultar novamente</TextoBotao></Botao>
    </View>
  );
};

export default InfoCidade;


