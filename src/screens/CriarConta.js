import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton"

const CriarConta = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPass, setRepeatPass] = useState('')
  const [messageError, setMessageError] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPassValid, setIsPassValid] = useState(false)

  const goToLogin = () => {
    if(isEmailValid && isPassValid){
      props.navigation.navigate("Login")
    }else if(!isEmailValid){
      setMessageError("E-mail parece ser inválido")
    }else{
      setMessageError("O campo repetir senha difere da senha")
    }
  }

  const handleEmailChange = (text) => {
    setEmail(text)
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
    const testeEmail = emailRegex.test(text)
    if (!testeEmail) {
      setIsEmailValid(false)
    }else{
      setMessageError("")
      setIsEmailValid(true)
    }
  }

  const handlePasswordChange = (text) => {
    setPassword(text)
  }

  const handleRepeatPasswordChange = (text) => {
    setRepeatPass(text)
    if(text != password){
      setIsPassValid(false)
    }else{
      setIsPassValid(true)
      setMessageError("")
    }
  }

  return(
      <View style={estilos.main_view}>
        <View style={estilos.tituloContainer}>
      </View>

        <View style = {estilos.inputContainer}>
          <Text style = {estilos.textoLogin}>E-mail</Text>
          <CustomInput onChangeText={handleEmailChange} isSecure={false} value={email} />
          <Text style = {estilos.textoLogin}>Senha</Text>
          <CustomInput onChangeText={handlePasswordChange} isSecure={true} value={password} />
          <Text style = {estilos.textoLogin}>Repetir senha</Text>
          <CustomInput onChangeText={handleRepeatPasswordChange} isSecure={true} value={repeatPass} />
          <Text style={estilos.textoErro}>{messageError}</Text>
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
    justifyContent: "space-around"
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

