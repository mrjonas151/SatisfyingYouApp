import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { initializeFirestore, collection } from 'firebase/firestore';
import app from '../firebase/config';
import { useState } from 'react';
import { useEffect } from 'react';
import { doc, query, onSnapshot } from 'firebase/firestore';

export default function Relatorio(props) {

  const [listaPesquisas, setListaPesquisas] = useState();
  const [vp, setVp] = useState(0);
  const [vr, setVr] = useState(0);
  const [vn, setVn] = useState(0);
  const [vb, setVb] = useState(0);
  const [ve, setVe] = useState(0);

  db = initializeFirestore(app, { experimentalForceLongPolling: true })
  pesquisaCollection = collection(db, "pesquisas")
  const pesquisaId = props.route.params.pesquisaId;

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

  const data = [
    {
      key: 1,
      value: vp,
      svg: { fill: '#53D8D8' },
    },
    {
      key: 2,
      value: vr,
      svg: { fill: '#EA7288' }
    },
    {
      key: 3,
      value: vn,
      svg: { fill: '#5FCDA4' }
    },
    {
      key: 4,
      value: vb,
      svg: { fill: '#6994FE' }
    },
    {
      key: 5,
      value: ve,
      svg: { fill: '#F1CE7E' }
    }
  ]

  return (
    <View style={styles.container}>

      <PieChart style={styles.Grafico}
        outerRadius={'90%'}
        innerRadius={2}
        data={data}
      />

      <View >
        <View style={styles.containerLegendas}>
          <View style={styles.legendaDiv}>
            <View style={[styles.corBlocos, { backgroundColor: '#F1CE7E' }]}></View>
            <Text style={styles.texto}>Excelente</Text>
          </View>
          <View style={styles.legendaDiv}>
            <View style={[styles.corBlocos, { backgroundColor: '#6994FE' }]}></View>
            <Text style={styles.texto}>Bom</Text>
          </View>
          <View style={styles.legendaDiv}>
            <View style={[styles.corBlocos, { backgroundColor: '#5FCDA4' }]}></View>
            <Text style={styles.texto}>Neutro</Text>
          </View>
          <View style={styles.legendaDiv}>
            <View style={[styles.corBlocos, { backgroundColor: '#EA7288' }]}></View>
            <Text style={styles.texto}>Ruim</Text>
          </View>
          <View style={styles.legendaDiv}>
            <View style={[styles.corBlocos, { backgroundColor: '#53D8D8' }]}></View>
            <Text style={styles.texto}>Péssimo</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#372775',
    flex: 1,
    alignItems: 'center'
  },

  Grafico: {
    backgroundColor: 'transparent',
    width: '80%',
    height: '60%',
  },

  legendaDiv: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerLegendas: {
    flexDirection: 'column',
    gap: 10,
    paddingLeft: 50,
    paddingTop: 10,
  },

  corBlocos: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  texto: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'AveriaLibre-Bold'
  },

});