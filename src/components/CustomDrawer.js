import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialIcons";
import {useSelector} from "react-redux"


const CustomDrawer = (props) => {

    const email = useSelector(state => state.login.email)

    const goToLogin = () => {
        props.navigation.navigate("Login")
    }
    const goToHome = () => {
        props.navigation.navigate("Home")
    }

    return (
        <DrawerContentScrollView {...props} style={estilos.menuColor}>
            
            <View style={estilos.container}>
                <Text style={styles.textoUser}>{email}</Text>
                <View style={estilos.textBarra}></View>
                <TouchableOpacity style={estilos.menuPesquisa} onPress={goToHome}>
                    <Icon style={estilos.icone} name="description" />
                    <Text style={estilos.textoUser}>Pesquisas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.menuSair} onPress={goToLogin}>
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
        marginTop: 35,
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"space-between",
        height: 700
    }
})

export default CustomDrawer;