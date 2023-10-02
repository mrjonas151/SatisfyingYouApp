import { Text, View, Button, Modal } from "react-native";
import { StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import { Image } from "react-native";
import { useState } from "react";
import { ActionModal } from "../components/ActionModal";

const ModificarPesquisa = (props) => {
    const [visibleModal, setVisibleModal] = useState(false);

    const goToHome = () => {
      props.navigation.navigate("Home")
    }

    return(
        <View style={estilos.main_view}>

          <View style={estilos.campos}>
            <Text style={estilos.texto}>Nome</Text>
            <CustomInput value="Carnaval 2024"></CustomInput>
            <Text style={estilos.texto}>Data</Text>

            <View style={estilos.calendario}>
                <CustomInput width={290} value="16/02/2024"></CustomInput>
                <TouchableOpacity style={estilos.botao} ><Icon style={estilos.icone} name="calendar-month" size={30} color="gray" /></TouchableOpacity>
            </View>

            <Text style={estilos.texto}>Imagem</Text>
            <TouchableOpacity style={estilos.botaoImagem} ><Image style={estilos.imagem} source={require('../assets/images/Party_Popper_imag.png')} /></TouchableOpacity>
            </View>

            <View style= {estilos.rodape}>
              <CustomButton backgroundColor='#37BD6D' height={50} marginBottom={0} texto="Salvar" width={270} funcao={goToHome}></CustomButton>
              <TouchableOpacity onPress={() => setVisibleModal(true)}><Icon name="delete" size={60} color="#FFF" /></TouchableOpacity>
            </View>

            <Modal visible={visibleModal} transparent={true} onRequestClose={() => setVisibleModal(false)}>
              <ActionModal 
                handleConfirma={() => props.navigation.navigate("Home")} 
                handleCancel={() => props.navigation.navigate("AcoesPesquisa")}
              />
            </Modal>

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
        width: '50%', 
        height: 110,
        alignItems: 'center',
        justifyContent: 'center'
      },
      botaoImagem: {
        backgroundColor: "white", 
        height: 130, 
        width: 220,
        justifyContent: 'center',
        alignItems: 'center'
      },
      rodape:{
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      campos: {
        marginTop: 40
      },
      botao: {
        backgroundColor: 'white',
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
      }
})

export default ModificarPesquisa;