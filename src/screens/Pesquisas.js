import { View, Text, StyleSheet, FlatList, Image, TextInput } from "react-native"
import CustomButton from "../components/CustomButton"
import { React, useEffect, useState } from "react"
import Icon from "react-native-vector-icons/MaterialIcons"
import { TouchableOpacity } from "react-native-gesture-handler"
import { initializeFirestore, collection, query, onSnapshot } from 'firebase/firestore';
import app from "../firebase/config";

const Pesquisas = (props) => {
    const [listaPesquisas, setListaPesquisas] = useState();

    db = initializeFirestore(app, {experimentalForceLongPolling:true})
    pesquisaCollection = collection(db, "pesquisas")

    useEffect ( () => {
        const q = query(pesquisaCollection)

        const  unsubscribe = onSnapshot(q, (snapshot) => {
            const pesqs = []
            snapshot.forEach( (doc) => {
                pesqs.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setListaPesquisas(pesqs)
        })
    }, [])


    const goToNovaPesquisa = () => {
        props.navigation.navigate("NovaPesquisa")
    }

    const goToAcoesPesquisa = (pesquisaId) => {
        props.navigation.navigate("AcoesPesquisa", { pesquisaId});
    }

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
                    data={listaPesquisas}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                    <TouchableOpacity style={estilos.box} onPress={() => goToAcoesPesquisa(item.id)}>
                        
                            <Image source={{ uri: item.imageUrl}} style={estilos.image} resizeMode="contain"/>
                            <Text style={estilos.titulo}>{item.titulo}</Text>
                            <Text style={estilos.subtitulo}>{item.subtitulo}</Text>
                            
                        
                    </TouchableOpacity>
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