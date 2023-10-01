import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialIcons";

const goToLogin = () => {
    props.navigation.popToTop()
}

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} style={estilos.menuColor}>
            <View style={estilos.container}>
                <Text style={estilos.textoUser}>usuario@dominio.com</Text>
                <View style={estilos.textBarra}></View>
                <View style={estilos.menuPesquisa}>
                    <Icon style={estilos.icone} name="description" />
                    <Text style={estilos.textoUser}>Pesquisas</Text>
                </View>
                <TouchableOpacity style={estilos.menuSair} onPress={props.navigation.popToTop()}>
                    <Icon style={estilos.icone} name="logout" />
                    <Text style={estilos.textoUser} >Sair</Text>
                </TouchableOpacity>
            </View>
            
        </DrawerContentScrollView>
    )
}

const estilos = StyleSheet.create({
    menuPesquisa:{
        top: 70,
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "flex-start",
        width: 220,
        position: 'absolute',
    },
    menuSair:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: 220
    },
    textoUser: {
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
    },
    textBarra: {
        borderBottomWidth: 2,
        borderColor: "white",
        width: 230,
        height: 10,
        marginHorizontal: 30,
        top: 40,
        position: 'absolute',
    },
    icone:{
        fontSize: 40,
        color: "white",
        right: 5
    },
    menuColor: {
        backgroundColor: "#2B1D62",
    },
    container: {
        marginTop: 45,
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"space-between",
        height: 700
    }
})

export default CustomDrawer;