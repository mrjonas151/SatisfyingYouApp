import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import { useState } from "react";


const NovaPesquisa = (props) => {
    const [data, setData] = useState('')
    const [nome, setNome] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [isValidData, setIsValidData] = useState(false)
    const [messageError1, setMessageError1] = useState('Preencha o nome da pesquisa')
    const [messageError2, setMessageError2] = useState('Preencha a data')
    const [messageError3, setMessageError3] = useState('')

    const goToHome = () => {
      if(isValid && isValidData){
        props.navigation.navigate("Home")
      }else{
        setMessageError3("Nome e/ou Data inválidos.")
      }
    }

    const handleNomePesq = (text) => {
      setMessageError3("")
      setNome(text)
      if (text===null || text === '' || text.length === 0) {
        setIsValid(false)
        setMessageError1("Preencha o nome da pesquisa")
      }else{
        setMessageError1("")
        setIsValid(true)
      }
    }

    const handleDataPesq = (text) => {
      setMessageError2("")
      setData(text)
      const formaData = /^\d{2}\/\d{2}\/\d{4}$/;
      if(text && formaData.test(text)){
        setMessageError3("")
        setIsValidData(true)
      }else{
        setIsValidData(false)
        setMessageError2("Preencha a data")
      }
    }

    return(
        <View style={estilos.main_view}>

          <View style={estilos.campos}>
            <Text style={estilos.texto}>Nome</Text>
            <CustomInput onChangeText={handleNomePesq} value={nome}></CustomInput>
            <Text style={estilos.textoErro}>{messageError1}</Text>

            <Text style={estilos.texto}>Data</Text>

            <View style={estilos.calendario}>
                <CustomInput onChangeText={handleDataPesq} width={290} value={data}></CustomInput>
                <TouchableOpacity style={estilos.botao} ><Icon style={estilos.icone} name="calendar-month" size={30} color="gray" /></TouchableOpacity>
            </View>

            <Text style={estilos.textoErro}>{messageError2}</Text>
            <Text style={estilos.texto}>Imagem</Text>
            <TouchableOpacity style={estilos.botaoImagem} ><Text style={estilos.imagem}>Câmera/Galeria de imagens</Text></TouchableOpacity>
            <Text style={estilos.textoErro}>{messageError3}</Text>
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