import { Text, View, Button, Modal } from "react-native";
import { StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import { Image } from "react-native";
import { useState } from "react";
import { ActionModal } from "../components/ActionModal";

const NovaPesquisa = (props) => {
    const [visibleModal, setVisibleModal] = useState(false);

    const goToHome = () => {
      props.navigation.navigate("Home")
    }

    return(
        <View style={estilos.main_view}>

          <View style={estilos.campos}>
            <Text style={estilos.texto}>Nome</Text>
            <CustomInput value=""></CustomInput>
            <Text style={estilos.textoErro}>Preencha no nome da pesquisa</Text>
            <Text style={estilos.texto}>Data</Text>

            <View style={estilos.calendario}>
                <CustomInput width={290} value=""></CustomInput>
                <TouchableOpacity style={estilos.botao} ><Icon style={estilos.icone} name="calendar-month" size={30} color="gray" /></TouchableOpacity>
            </View>
            <Text style={estilos.textoErro}>Preencha a data</Text>
            <Text style={estilos.texto}>Imagem</Text>
            <TouchableOpacity style={estilos.botaoImagem} ><Text style={estilos.imagem}>Câmera/Galeria de imagens</Text></TouchableOpacity>
            </View>

            <View style= {estilos.rodape}>
              <CustomButton backgroundColor='#37BD6D' height={50} marginBottom={0} texto="CADASTRAR" width={330} funcao={goToHome}></CustomButton>
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
        fontSize: 15,
        fontFamily: 'AveriaLibre-Regular',
        alignItems: 'center',
        justifyContent: 'center'
      },
    botaoImagem: {
        backgroundColor: "white", 
        height: 110, 
        width: 220,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rodape:{
        marginTop: 50,
        alignItems: "center"
    },
    campos: {
        marginTop: 40
    },
    calendario: {
        flexDirection: 'row',
        width: 330,
        justifyContent: "space-between",
        backgroundColor: 'white' ,
        alignItems: "center",
        backgroundColor: 'white'
    }, 
    icone: {
        marginRight: 4,
    },
    textoErro: {
        fontFamily: 'AveriaLibre-Regular',
        color: '#FD7979',
        fontSize: 18
    }
})

export default NovaPesquisa;