import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DivPadrao } from '../components/DivPadrao';
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import Icon from react-native-vector-icons/MaterialIcons;
import { useSelector } from 'react-redux'

export default function Coleta(props) {

  const id = useSelector(state => state.pesquisa.id)
  const pesquisaRef = doc(db, 'Pesquisas', id)

  const { title } = props.route.params;

  const formattedTitle = (typeof title === 'string' && title.trim() !== '')
  ? title
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  : '';

  const  updateVote = async (voteType) => {
    try{
      const docPesquisa = await getDoc(pesqisaRef)

      if(docPesquisa.exists()){
        const currentVotes = docPesquisa.data().votos
        currentVotes = docPesquisa.data().votos
        currentVotes[voteType] += 1;
        await updateDoc(pesquisaRef, {votos: currentVotes})
        console.log('Voto ${voteType} computado com sucesso!')
        goAgradecimentoParticipacao
      }else{
        console.log("Documento não pode ser encontrado!")
      }
    }catch (error){
      console.log("Erro ao computar voto... ", error)
    }
  };

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
        <TouchableOpacity onPress={() => updateVote('pessimo')}>
          <DivPadrao style={styles.div} textColor="#FFFFFF" text="Péssimo" imageSource={require('../assets/images/Sentimento_Pessimo.png')} onPress={goAgradecimentoParticipacao} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateVote('ruim')}>
          <DivPadrao style={styles.div} textColor="#FFFFFF" text="Ruim" imageSource={require('../assets/images/Sentimento_Ruim.png')} onPress={goAgradecimentoParticipacao} />
        </TouchableOpacity>
      </View>
      <View style={styles.squaresContainer}>
        <TouchableOpacity onPress={() => updateVote('neutro')}>
            <DivPadrao style={styles.div} textColor="#FFFFFF" text="Neutro" imageSource={require('../assets/images/Sentimento_Neutro.png')} onPress={goAgradecimentoParticipacao} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateVote('bom')}>
            <DivPadrao style={styles.div} textColor="#FFFFFF" text="Bom" imageSource={require('../assets/images/Sentimento_Bom.png')} onPress={goAgradecimentoParticipacao} />
        </TouchableOpacity>
      </View>
      <View style={styles.squaresContainer}>
        <TouchableOpacity onPress={() => updateVote('excelente')}>
            <DivPadrao style={styles.div} textColor="#FFFFFF" text="Excelente" imageSource={require('../assets/images/Sentimento_Excelente.png')} onPress={goAgradecimentoParticipacao} />
        </TouchableOpacity>
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