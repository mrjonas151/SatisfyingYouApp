import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton"

const CriarConta = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPass, setRepeatPass] = useState('')

  const goToLogin = () => {
      props.navigation.navigate("Login")
  }

  return(
      <View style={estilos.main_view}>
        <View style={estilos.tituloContainer}>
      </View>

        <View style = {estilos.inputContainer}>
          <Text style = {estilos.textoLogin}>E-mail</Text>
          <CustomInput texto="jurandir.pereira@hotmail.com" />
          <Text style = {estilos.textoLogin}>Senha</Text>
          <CustomInput texto="********"/>
          <Text style = {estilos.textoLogin}>Repetir senha</Text>
          <CustomInput texto=""/>
          <Text style={estilos.textoErro}>O campo repetir senha difere da senha</Text>
          </View>

        <View style = {estilos.buttonContainer}>
          <CustomButton  backgroundColor= '#37BD6D' height={50}  marginBottom={40} texto="CADASTRAR" funcao={goToLogin}></CustomButton>
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

export default CriarConta;

