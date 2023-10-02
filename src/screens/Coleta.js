import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DivPadrao } from '../components/DivPadrao';

export default function Coleta(props) {

  const { title } = props.route.params;

  const formattedTitle = (typeof title === 'string' && title.trim() !== '')
  ? title
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  : '';

  const goAgradecimentoParticipacao = () => {
    props.navigation.navigate('AgradecimentoParticipacao')
  }

  const goAcoesPesquisa = () => {
    props.navigation.navigate('AcoesPesquisa')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoSair} onPress={goAcoesPesquisa}></TouchableOpacity>
      <Text style={styles.title}>O que você achou do Carnaval 2024?</Text>
      <View style={styles.squaresContainer}>
        <DivPadrao style={styles.div} textColor="#FFFFFF" text="Péssimo" imageSource={require('../assets/images/Sentimento_Pessimo.png')} onPress={goAgradecimentoParticipacao} />
        <DivPadrao style={styles.div} textColor="#FFFFFF" text="Ruim" imageSource={require('../assets/images/Sentimento_Ruim.png')} onPress={goAgradecimentoParticipacao} />
      </View>
      <View style={styles.squaresContainer}>
        <DivPadrao style={styles.div} textColor="#FFFFFF" text="Neutro" imageSource={require('../assets/images/Sentimento_Neutro.png')} onPress={goAgradecimentoParticipacao} />
        <DivPadrao style={styles.div} textColor="#FFFFFF" text="Bom" imageSource={require('../assets/images/Sentimento_Bom.png')} onPress={goAgradecimentoParticipacao} />
      </View>
      <View style={styles.squaresContainer}>
        <DivPadrao style={styles.div} textColor="#FFFFFF" text="Excelente" imageSource={require('../assets/images/Sentimento_Excelente.png')} onPress={goAgradecimentoParticipacao} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
    gap: 20,
    padding: 10,
    paddingTop: 30,
  },
  squaresContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    paddingTop: 30,
  },
  div: {
    backgroundColor: '#372775',
    width: 150,
    height: 150,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoSair: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: 40,
    width: 50,
    marginLeft: 320,
  }
});