import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Relatorio(props) {

    return (
        <View style={styles.container}>

            <View>
              <Image style={styles.Grafico} source={require('../assets/images/Grafico.png')}/>
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
      backgroundColor: '#372775',
      flex: 1,
      alignItems: 'center', 
      paddingTop: 50,
    },

    Grafico: {
      backgroundColor: 'transparent',
      width: 250,
      height: 250,
    },

    legendaDiv: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    containerLegendas: {
      flexDirection: 'column',
      gap: 10,
      paddingLeft: 50,
      paddingTop: 50,
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