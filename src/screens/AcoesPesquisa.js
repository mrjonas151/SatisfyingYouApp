import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DivPadrao } from '../components/DivPadrao.js';
import {useSelector} from "react-redux";
import { reducerSetSearch } from "../redux/searchSlice";
import { useDispatch } from 'react-redux';
import { searchSlice } from "../redux/searchSlice"
import { getDoc, doc } from 'firebase/firestore';

export default function AcoesPesquisa(props, { route }) {
  const nomePesquisa = useSelector((state) => state.search.titulo)

  const pesquisaId = props.route.params.pesquisaId;

  const goModificarPesquisa = () => {
    props.navigation.navigate('ModificarPesquisa', { pesquisaId })
  }

  const goColeta = async () => {
    const cardRef = doc(db, "pesquisas", pesquisaId);
      
        try {
          const pesqDoc = await getDoc(cardRef);
      
          if (pesqDoc.exists()) {
            const cardData = pesqDoc.data();
      
            dispatch(reducerSetSearch({
              titulo: cardData.titulo,
              subtitulo: cardData.subtitulo,
              imageUrl: cardData.imageUrl,
              imageNome: cardData.imageNome,
              vp: cardData.vp,
              vr: cardData.vr,
              vn: cardData.vn,
              vb: cardData.vb,
              ve: cardData.ve
            }));
      
            props.navigation.navigate('Coleta', { pesquisaId });
          } else {
            console.log('O documento não existe');
          }
        } catch (error) {
          console.error('Erro ao obter dados da pesquisa:', error);
        }
    
  }

  const goRelatorio = () => {
    props.navigation.navigate('Relatorio', { pesquisaId })
  }

  return (
    <View style={styles.container}>
      <View style={styles.squaresContainer}>
        <DivPadrao style={styles.div} textColor="#FFFFFF" text="Modificar" imageSource={require('../assets/images/Modificar.png')} onPress={goModificarPesquisa} />
        <DivPadrao style={styles.div} textColor="#FFFFFF" text="Coletar dados" imageSource={require('../assets/images/Coletar_Dados.png')} onPress={goColeta} />
        <DivPadrao style={styles.div} textColor="#FFFFFF" text="Relatório" imageSource={require('../assets/images/Relatorio.png')} onPress={goRelatorio} />
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