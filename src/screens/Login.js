import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton"
import Icon from "react-native-vector-icons/MaterialIcons"

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const goToCadastro = () => {
        props.navigation.navigate("CriarConta")
    }
  
    const goToHome = () => {
        props.navigation.navigate("Drawer")
    }
  
    const goToRecover = () => {
        props.navigation.navigate("RecuperarSenha")
    }
  
    return(
        <View style={estilos.main_view}>
          <View style={estilos.tituloContainer}>
            <Text style={estilos.titulo}>Satisfying.you</Text>
            <Icon style={estilos.titulo} name="sentiment-satisfied" size={60} color="#274" />
          </View>
  
          <View style = {estilos.inputContainer}>
            <Text style = {estilos.textoLogin}>E-mail</Text>
            <CustomInput texto="jurandir.pereira@hotmail.com" />
            <Text style = {estilos.textoLogin}>Senha</Text>
            <CustomInput texto="********"/>
            <Text style={estilos.textoErro}>E-mail e/ou senha inválidos.</Text>
            </View>
  
          <View style = {estilos.buttonContainer}>
            <CustomButton  backgroundColor= '#37BD6D' height={50}  marginBottom={40} texto="Entrar" funcao={goToHome}></CustomButton>
            <CustomButton backgroundColor= '#419ED7' texto="Criar minha conta" funcao={goToCadastro}></CustomButton>
            <CustomButton backgroundColor= '#B5C7D1' texto="Esqueci minha senha" funcao={goToRecover}></CustomButton>  
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
    tituloContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: 35
    },
    titulo: {
      fontFamily: 'AveriaLibre-Regular',
      fontSize: 40,
      color: 'white',
    },
    textoLogin: {
      fontSize: 25,
      fontFamily: 'AveriaLibre-Regular',
      color: 'white',
      marginTop: 20,
    },
    inputContainer: {
      marginBottom: 20,
      marginTop: 70
    },
    buttonContainer: {
      marginTop: 50
    },
    textoErro: {
      fontFamily: 'AveriaLibre-Regular',
      color: '#FD7979',
      fontSize: 18
    }
  })
  
  export default Login;