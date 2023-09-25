import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton"

const App = (props) => {
    const [email, setEmail] = useState('')
  
    const goToLogin = () => {
        props.navigation.navigate("Login")
    }
  
    return(
        <View style={estilos.main_view}>
  
          <View style = {estilos.inputContainer}>
            <Text style = {estilos.textoLogin}>E-mail</Text>
            <CustomInput texto="jurandir.pereira@hotmail.com" />
            <Text style={estilos.textoErro}>E-mail parece ser inválido</Text>
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