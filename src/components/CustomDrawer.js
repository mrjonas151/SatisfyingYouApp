import { View, Image, Text, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import React from "react"
import Icon from "react-native-vector-icons/MaterialIcons"
import { TouchableOpacity } from 'react-native';

const CustomDrawer = (props) => {
    return (
        //para caso os elementos drawer ultrapassem a tela, ele pode ser scrollavel
        <DrawerContentScrollView {...props} contentContainerStyle={estilos.drawerContainer}> 
            <View style = {estilos.main_view}>
                <Text style = {estilos.texto}>teste@gmail.com</Text>
            </View>

            <DrawerItemList {...props} />

            <View style={estilos.sairContainer} >
                <TouchableOpacity style={estilos.sairContainer} onPress={() => props.navigation.popToTop()}>
                    <Icon style={estilos.icone} name="logout" size={30} color="white" />
                    <Text style={estilos.sairTexto}>Sair</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    )
}

const estilos = StyleSheet.create({
    drawerContainer: {
        backgroundColor: '#2B1D62',
        flex: 1,
        padding: 30,
        justifyContent: "flex-start"
    },
    main_view: {
      padding: 30,
      flexDirection: 'column',
    },
    texto: {
      flexDirection: "row",
      fontSize: 22, 
      color: 'white', 
      alignSelf: 'center',
      fontFamily: "AveriaLibre-Regular",
      marginVertical: 25
    },
    icone: {
        flexDirection: "row",
        marginLeft: 8,
    },
    sairContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 7,
        marginTop: 17,
        flex: 0.7,
        paddingTop: 150
    },
    sairTexto: {
        fontSize:22, 
        color: 'white', 
        fontFamily: "AveriaLibre-Regular",
        paddingLeft: 10
    }
})

export default CustomDrawer;