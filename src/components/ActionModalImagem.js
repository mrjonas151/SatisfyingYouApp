import React from 'react'
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native'

export function ActionModalImagem({ handleCamera, handleGaleria, handleCancelar }) {
    return (
        <SafeAreaView style={estilos.container}>
            <View style={estilos.main_view}>
                <View style={estilos.cTitulo}>
                    <Text style={estilos.texto}>Escolha uma opção:</Text>
                </View>
                <View style={estilos.cButton}>
                    <TouchableOpacity style={estilos.bCamera} onPress={handleCamera} ><Text style={estilos.texto}>CÂMERA</Text></TouchableOpacity>
                    <TouchableOpacity style={estilos.bCamera} onPress={handleGaleria}><Text style={estilos.texto}>GALERIA</Text></TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main_view: {
        backgroundColor: '#2B1D62',
        height: 215,
        width: 340
    },
    texto: {
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        textAlign: 'center'

    },
    cButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },
    bCamera: {
        backgroundColor: '#419ED7',
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cTitulo: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginTop: 30
    },

})