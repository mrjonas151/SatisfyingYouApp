import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AgradecimentoParticipacao(props) {

  const goColeta = () => {
    props.navigation.goBack();
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      goColeta();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Obrigado por partipar da pesquisa!</Text>
      <Text style={styles.title}>Aguardamos você no próximo ano!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#372775',
    flex: 1,
    gap: 40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
  }
});