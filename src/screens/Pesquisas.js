import { View, Text, StyleSheet, FlatList, Image, TextInput } from "react-native"
import CustomButton from "../components/CustomButton"
import React from "react"
import Icon from "react-native-vector-icons/MaterialIcons"

const Pesquisas = (props) => {

    const goToNovaPesquisa = () => {
        props.navigation.navigate("NovaPesquisa")
    }

    const pesquisasData = [
        {
          id: '1',
          titulo: 'SECOMP 2023',
          subtitulo: '10/10/2023',
          imageUrl: require('../assets/images/Secomp.png'),
        },
        {
          id: '2',
          titulo: 'UBUNTU 2022',
          subtitulo: '05/06/2023',
          imageUrl: require('../assets/images/Ubuntu.png'),
        },
        {
            id: '3',
            titulo: 'MENINAS CPU',
            subtitulo: '01/04/2022',
            imageUrl: require('../assets/images/Meninas.png'),
        },
      ]

    return(
        <View style={estilos.fundo}>
            <View style={estilos.pesquisa}>
                <View style={estilos.lupa}>
                    <Icon name="search" size={40} style={{color: '#8B8B8B'}}/>
                </View>
                <TextInput
                    style={estilos.texto}
                    placeholder="Insira o termo de busca..."
                    width={315}
                />
            </View>

            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={pesquisasData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                    <View style={estilos.box}>
                        <Image source={item.imageUrl} style={estilos.image} resizeMode="contain"/>
                        <Text style={estilos.titulo}>{item.titulo}</Text>
                        <Text style={estilos.subtitulo}>{item.subtitulo}</Text>
                    </View>
                    )}
                />
            </View>

            <View>
                <CustomButton  backgroundColor= '#37BD6D' 
                height={50}  texto="NOVA PESQUISA"
                funcao={goToNovaPesquisa}></CustomButton>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    pesquisa:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    lupa:{  
        backgroundColor: 'white',
        padding: 3.5
    },
    texto: {
        fontSize: 20,
        color: '#8B8B8B',
        textAlign: "left",
        padding: 10,
        paddingLeft: 2,
        backgroundColor: 'white',
        fontFamily: 'AveriaLibre-Regular'
    },
    fundo:{
        backgroundColor: "#372775",
        height: '100%',
        padding: 20,
        flexDirection:"column",
        justifyContent: "space-evenly"
    },

    box: {
        width: 240,
        height: 210,
        marginRight: 30,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 5
    },
    titulo: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 32,
        color: "#3F92C5",
    },
    subtitulo: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 16,
        color: "#8B8B8B",
    },
})

export default Pesquisas;