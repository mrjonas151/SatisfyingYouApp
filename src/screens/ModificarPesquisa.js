import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";


const ModificarPesquisa = () => {
    return(
        <View style={estilos.main_view}>
            <Text style={estilos.texto}>Nome</Text>
            <CustomInput></CustomInput>
            <Text style={estilos.texto}>Data</Text>
            <CustomInput></CustomInput>
            <Text style={estilos.texto}>Imagem</Text>

        </View>
    );
}

const estilos = StyleSheet.create({
    main_view: {
      padding: 30,
      backgroundColor: '#372775',
      flex: 1,
      flexDirection: 'column',
    },
    texto: {
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        marginTop: 20,
      },
})

export default ModificarPesquisa;