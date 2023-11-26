import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DivPadrao } from '../components/DivPadrao.js';
import { useSelector } from 'react-redux';

export default function AcoesPesquisa(props) {

  const nome = useSelector(state => state.pesquisa.nome)

  useEffect(() => {
    props.navigation.setOptions({
      title: nome
    })
  }, [nome, props.navigation])

  const pesquisaId = props.route.params.pesquisaId;

  const goModificarPesquisa = () => {
    props.navigation.navigate('ModificarPesquisa', {pesquisaId})
  }

  const goColeta = () => {
    props.navigation.navigate('Coleta', {pesquisaId});
  }

  const goRelatorio = () => {
    props.navigation.navigate('Relatorio')
  }

  return (
    <View style={styles.container}>
        <View style={styles.squaresContainer}>
          <DivPadrao  style={styles.div} textColor="#FFFFFF" text="Modificar" imageSource={require('../assets/images/Modificar.png')} onPress={goModificarPesquisa}/>
          <DivPadrao  style={styles.div} textColor="#FFFFFF" text="Coletar dados" imageSource={require('../assets/images/Coletar_Dados.png')} onPress={goColeta}/>
          <DivPadrao  style={styles.div} textColor="#FFFFFF" text="Relatório" imageSource={require('../assets/images/Relatorio.png')} onPress={goRelatorio}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    gap: 20, 
  },
  squaresContainer: {
    flexDirection: 'column',
    gap: 20,
  },
  div: {
    backgroundColor: '#312464',
    width: 200,
    height: 200,
    marginLeft: 10,
    alignItems: 'center', 
    justifyContent: 'center',
  }
});