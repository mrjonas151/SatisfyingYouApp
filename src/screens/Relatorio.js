import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PieChart from 'react-native-pie-chart'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useSelector } from 'react-redux';

export default function Relatorio(props) {

    const id = useSelector(state => state.pesquisa.id)

    const [votos, setVotos] = useState({
      pessimo: 0,
      ruim: 0,
      neutro: 0,
      bom: 0,
      excelente: 0
    })

    useEffect(() => {
      const fetchData = async () => {
          try {
              const pesquisaRef = doc(db, 'pesquisas', id);
              const pesquisaDoc = await getDoc(pesquisaRef);

              if (pesquisaDoc.exists()) {
                  const votosData = pesquisaDoc.data().votos;
                  setVotos(votosData);
              } else {
                  console.log('Documento não pode ser encontrado!');
              }
          } catch (error) {
              console.log('Erro encontrado ao obter votos:', error);
          }
      };

      fetchData()
  }, [])

  const tamanho = 300;

  const colorMap = {
      pessimo: '#53D8D8',
      ruim: '#EA7288',
      neutro: '#5FCDA4',
      bom: '#6994FE',
      excelente: '#F1CE7E',
  };
  
  const series = [
      { value: votos.pessimo, color: colorMap.pessimo },
      { value: votos.ruim, color: colorMap.ruim },
      { value: votos.neutro, color: colorMap.neutro },
      { value: votos.bom, color: colorMap.bom },
      { value: votos.excelente, color: colorMap.excelente },
  ];
  
  const filteredSeries = series.filter(item => item.value > 0).map(item => item.value)
  const filteredColors = series.filter(item => item.value > 0).map(item => item.color)
  
  const hasValidData = filteredSeries.length > 0

    return (
        <View style={styles.container}>

          {hasValidData ? (
            <PieChart
              tamanho = {tamanho}
              series = {filteredSeries}
              sliceColor={filteredColors}
            />
          ) : (
              <Text style = {styles.noDataText}>Não possui dados suficientes para gerar gráfico!</Text>
          )}

        {hasValidData ? (
            <View style={styles.containerList}>
                <View style={styles.containerItem}>
                    <View style={styles.quadrado_excelente} />
                    <Text style={styles.textoLegenda}>Excelente</Text>
                </View>
                
                <View style={styles.containerItem}>
                    <View style={styles.quadrado_bom} />
                    <Text style={styles.textoLegenda}>Bom</Text>
                </View>

                <View style={styles.containerItem}>
                    <View style={styles.quadrado_neutro} />
                    <Text style={styles.textoLegenda}>Neutro</Text>
                </View>

                <View style={styles.containerItem}>
                    <View style={styles.quadrado_ruim} />
                    <Text style={styles.textoLegenda}>Ruim</Text>
                </View>

                <View style={styles.containerItem}>
                    <View style={styles.quadrado_pessimo} />
                    <Text style={styles.textoLegenda}>Pessimo</Text>
                </View>
            </View>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#372775',
        padding: 20,
    },
    noDataText: {
        fontSize: 36,
        color: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center',
        marginTop: 100,
        paddingHorizontal: 20,
    },
    textoLegenda: {
        fontSize: 24,
        color: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
    },
    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quadrado_pessimo: {
        width: 20,
        height: 20,
        backgroundColor: '#53D8D8',
        marginRight: 15,
    },
    quadrado_ruim: {
        width: 20,
        height: 20,
        backgroundColor: '#EA7288',
        marginRight: 15,
    },
    quadrado_neutro: {
        width: 20,
        height: 20,
        backgroundColor: '#5FCDA4',
        marginRight: 15,
    },
    quadrado_bom: {
        width: 20,
        height: 20,
        backgroundColor: '#6994FE',
        marginRight: 15,
    },
    quadrado_excelente: {
        width: 20,
        height: 20,
        backgroundColor: '#F1CE7E',
        marginRight: 15,
    },
    containerList: {
        marginTop: 20,
    }
});