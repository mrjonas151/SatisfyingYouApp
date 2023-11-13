import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton"
import { sendPasswordResetEmail } from "firebase/auth";
import { auth_mod } from "../firebase/config";

const App = (props) => {
    const [email, setEmail] = useState('')
    const [messageError, setMessageError] = useState('')
    const [isValid, setIsValid] = useState(false)

    const goToLogin = () => {
      if(isValid){
        sendPasswordResetEmail(auth_mod, email).then( () => {
          console.log("Email de redefinicao enviado com sucesso, caso o e-mail esteja cadastrado, você receberá uma mensagem para redefinicao")
          props.navigation.navigate("Login")
        }).catch( (error) => {
          console.log("Erro ao enviar email de redefinicao" + JSON.stringify(error))
        })
      }else{
        setMessageError("E-mail parece ser inválido")
      }
    }

    const handleEmailChange = (text) => {
      setEmail(text)
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
      const testeEmail = emailRegex.test(text)
      if (!testeEmail) {
        setIsValid(false)
      }else{
        setMessageError("")
        setIsValid(true)
      }
    }
  
    return(
        <View style={estilos.main_view}>
  
          <View style = {estilos.inputContainer}>
            <Text style = {estilos.textoLogin}>E-mail</Text>
            <CustomInput onChangeText={handleEmailChange} isSecure={false} value={email} />
            <Text style={estilos.textoErro}>{messageError}</Text>
          </View>
  
          <View style = {estilos.buttonContainer}>
            <CustomButton  backgroundColor= '#37BD6D' height={50}  marginBottom={40} texto="RECUPERAR" funcao={goToLogin}></CustomButton>
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
    textoLogin: {
      fontSize: 25,
      fontFamily: 'AveriaLibre-Regular',
      color: 'white'
    },
    inputContainer: {
      marginBottom: 20,
      marginTop: 170
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
  
  export default App;