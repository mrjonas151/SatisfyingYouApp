import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DivPadrao } from '../components/DivPadrao';
import { initializeFirestore, collection } from 'firebase/firestore';
import app from '../firebase/config';
import { useEffect } from 'react';
import { doc, updateDoc, query, onSnapshot } from 'firebase/firestore';

export default function Coleta(props) {

  const [listaPesquisas, setListaPesquisas] = useState();
  const [vp, setVp] = useState(0);
  const [vr, setVr] = useState(0);
  const [vn, setVn] = useState(0);
  const [vb, setVb] = useState(0);
  const [ve, setVe] = useState(0);

  const pesquisaId = props.route.params.pesquisaId;
  db = initializeFirestore(app, { experimentalForceLongPolling: true })
  pesquisaCollection = collection(db, "pesquisas")

  const { title } = props.route.params;

  const formattedTitle = (typeof title === 'string' && title.trim() !== '')
    ? title
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
    : '';

  useEffect(() => {
    const atualiza = async () => {
      const q = query(pesquisaCollection)
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const pesqs = []
        snapshot.forEach((doc) => {
          pesqs.push({
            id: doc.id,
            ...doc.data()
          })
        })
        setListaPesquisas(pesqs)
        const pe = (pesqs.find(pesqs => pesqs.id === pesquisaId))
        setVp(pe.vp)
        setVr(pe.vr)
        setVn(pe.vn)
        setVb(pe.vb)
        setVe(pe.ve)
      })
      return () => unsubscribe();

    }
    atualiza()
  }, [])

  const coletarAvaliacao = async (tipo) => {
    const pesqRef = doc(db, "pesquisas", pesquisaId)

    if (tipo === 'pessimo') {
      setVp((prevVp) => {
        const pessimo = prevVp + 1;
        updateDoc(pesqRef, { vp: pessimo });
        return pessimo;
      });
    } else if (tipo === 'ruim') {
      setVr((prevVr) => {
        const ruim = prevVr + 1;
        updateDoc(pesqRef, { vr: ruim });
        return ruim;
      });
    } else if (tipo === 'neutro') {
      setVn((prevVn) => {
        const neutro = prevVn + 1;
        updateDoc(pesqRef, { vn: neutro });
        return neutro;
      });
    } else if (tipo === 'bom') {
      setVb((prevVb) => {
        const bom = prevVb + 1;
        updateDoc(pesqRef, { vb: bom });
        return bom;
      });
    } else if (tipo === 'excelente') {
      setVe((prevVe) => {
        const excelente = prevVe + 1;
        updateDoc(pesqRef, { ve: excelente });
        return excelente;
      });
    } else {
      console.log("ERRO")
    }

    props.navigation.navigate("AgradecimentoParticipacao");
  }

  const goAgradecimentoParticipacao = () => {
    props.navigation.navigate('AgradecimentoParticipacao')
  }

  const goAcoesPesquisa = () => {
    props.navigation.navigate('AcoesPesquisa', { pesquisaId })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoSair} onPress={goAcoesPesquisa}></TouchableOpacity>
      <Text style={styles.title}>O que você achou do Carnaval 2024?</Text>
      <View style={styles.squaresContainer}>
        <DivPadrao style={styles.div} textColor="#FFFFFF" text="Péssimo" imageSource={require('../assets/images/Sentimento_Pessimo.png')} onPress={() => coletarAvaliacao('pessimo')} />
        <DivPadrao style={styles.div} textColor="#FFFFFF" text="Ruim" imageSource={require('../assets/images/Sentimento_Ruim.png')} onPress={() => coletarAvaliacao('ruim')} />
      </View>
      <View style={styles.squaresContainer}>
        <DivPadrao style={styles.div} textColor="#FFFFFF" text="Neutro" imageSource={require('../assets/images/Sentimento_Neutro.png')} onPress={() => coletarAvaliacao('neutro')} />
        <DivPadrao style={styles.div} textColor="#FFFFFF" text="Bom" imageSource={require('../assets/images/Sentimento_Bom.png')} onPress={() => coletarAvaliacao('bom')} />
      </View>
      <View style={styles.squaresContainer}>
        <DivPadrao style={styles.div} textColor="#FFFFFF" text="Excelente" imageSource={require('../assets/images/Sentimento_Excelente.png')} onPress={() => coletarAvaliacao('excelente')} />
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