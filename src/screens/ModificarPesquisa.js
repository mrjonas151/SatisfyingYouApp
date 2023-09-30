import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import { Image } from "react-native";

const ModificarPesquisa = () => {
    const goToHome = () => {
      props.navigation.navigate("ModificarPesquisa")
    }

    return(
        <View style={estilos.main_view}>

          <View style={estilos.campos}>
            <Text style={estilos.texto}>Nome</Text>
            <CustomInput value="Carnaval 2024"><Icon name="sentiment-satisfied" size={60} color="#274" /></CustomInput>

            <View>
                <Text style={estilos.texto}>Data</Text>
                <CustomInput value="16/02/2024"></CustomInput>
            </View>

            <Text style={estilos.texto}>Imagem</Text>
            <TouchableOpacity style={estilos.botao} ><Image style={estilos.imagem} source={require('../assets/images/Party_Popper_imag.png')} /></TouchableOpacity>
            </View>

            <View style= {estilos.rodape}>
              <CustomButton backgroundColor='#37BD6D' height={50} marginBottom={0} texto="Salvar" width={270} funcao={goToHome}></CustomButton>
              <TouchableOpacity><Icon name="delete" size={60} color="#FFF" /></TouchableOpacity>
            </View>

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
      imagem: {
        width: '100%', height: '100%' 
      },
      botao: {
        backgroundColor: "white", 
        height: 100, 
        width: 200
      },
      rodape:{
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      campos: {
        marginTop: 40
      }
})

export default ModificarPesquisa;