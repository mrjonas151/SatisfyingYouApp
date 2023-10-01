import { View, Text, StyleSheet, FlatList, Image } from "react-native"
import CustomButton from "../components/CustomButton"
import React from "react"

const Pesquisas = (props) => {

    const goToHome = () => {
        props.navigation.navigate("Home")
    }

    const pesquisasData = [
        {
          id: '1',
          title: 'SECOMP',
          subtitle: '10/10/2023',
          imageUrl: '"../assets/images/Party_Popper_imag.png"',
        },
       
      ]

    return(
        <View style={estilos.fundo}>
            <View>

            </View>

            <View>
                <FlatList
                    horizontal
                    data={pesquisasData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                    <View style={estilos.movieContainer}>
                        <Image source={{ uri: item.imageUrl }} style={estilos.image} />
                        <Text style={estilos.title}>{item.title}</Text>
                        <Text style={estilos.subtitle}>{item.subtitle}</Text>
                    </View>
                    )}
                />
            </View>

            <View>
                <CustomButton  backgroundColor= '#37BD6D' 
                height={50}  texto="NOVA PESQUISA"
                funcao={goToHome}></CustomButton>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    fundo:{
        backgroundColor: "#372775",
        height: '100%',
        padding: 20,
        flexDirection:"column",
        justifyContent: "space-around"
    },
    container: {
        marginTop: 20,
      },
      movieContainer: {
        marginRight: 10,
      },
      image: {
        width: 150,
        height: 200,
        borderRadius: 10,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
      },
      subtitle: {
        fontSize: 14,
        color: 'gray',
      },
})

export default Pesquisas;