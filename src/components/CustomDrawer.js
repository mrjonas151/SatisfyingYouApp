import {View, Image, Text, StyleSheet} from "react-native";
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} style={estilos.container}>
            <View>
                <Text style={estilos.textoUser}>usuario@dominio.com</Text>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

const estilos = StyleSheet.create({
    textoUser: {
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        marginTop: 20,
      }
})

export default CustomDrawer;