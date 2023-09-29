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
            <View style={estilos.line}></View>
        </View>

        <Icon style={estilos.iconeDescription} name="description" size={30} color="white" />
        <View style={estilos.cList}>
            
            <DrawerItemList {...props} />
        </View>

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
        flex: 0.20,
        flexDirection: 'column',
        backgroundColor: 'green'
      },
      texto: {
        flexDirection: "row",
        fontSize: 20, 
        color: 'white', 
        alignSelf: 'center',
        fontFamily: "AveriaLibre-Regular",
        marginVertical: 20,
        backgroundColor: 'red'
      },
      icone: {
        flexDirection: "row",
        marginLeft: 8,
        marginTop: 90
      },
      sairContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 17,
        paddingTop: 150,
        flex: 0.9,
        paddingTop: 150,
        backgroundColor: 'yellow'
      },
      sairTexto: {
        fontSize:22, 
        color: 'white', 
        fontFamily: "AveriaLibre-Regular",
        paddingLeft: 10,
        backgroundColor: 'black',
        marginTop: 90
      },
      line:{
        borderBottomWidth: 2,
        borderColor: '#ECF8FF',
        width: 220,
        height: 0,
        marginHorizontal: 30,
        top: 90,
        position: 'absolute',
      },
      cList:{
        backgroundColor: 'black',
      },
      iconeDescription:{
        flexDirection: "row",
        backgroundColor: 'yellow',
      }
})

export default CustomDrawer;