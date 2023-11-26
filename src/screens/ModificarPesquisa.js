import { Text, View, Button, Modal } from "react-native";
import { StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import { Image } from "react-native";
import { useEffect, useState } from "react";
import { ActionModal } from "../components/ActionModal";
import { initializeFirestore, collection, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import app from "../firebase/config";
import { useSelector } from "react-redux";



const ModificarPesquisa = (props, {route}) => {
    const [visibleModal, setVisibleModal] = useState(false);
    const [data, setData] = useState('')
    const [nome, setNome] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [isValidData, setIsValidData] = useState(false)
    const [messageError1, setMessageError1] = useState('Preencha o nome da pesquisa')
    const [messageError2, setMessageError2] = useState('Preencha a data')
    const [messageError3, setMessageError3] = useState('')
    const [url, setUrl] = useState('imagemtesteinicial.com') //depois testar a implementacao da imagem

    const pesquisaId = useSelector(state => state.pesquisaId);
    const nome_1 = useSelector(state => state.pesquisa.nome_1)
    const data_1 = useSelector(state => state.pesquisa.data_1)
    const imageUrl_1 = useSelector(state => state.pesquisa.imageUrl_1)

    useEffect(() => {
      setNome(nome_1)
      setData(data_1)
      setUrl(imageUrl_1)
    }, [])

    db = initializeFirestore(app, {experimentalForceLongPolling:true})
    pesquisaCollection = collection(db, "pesquisas")

    const changePesquisa = () => {
      const pesqRef = doc(db, "pesquisas", pesquisaId)

      updateDoc(pesqRef, {
        titulo: nome,
        subtitulo: data,
        imageUrl: url
      })
    }

    const deletePesquisa = () => {
      deleteDoc(doc(db, "pesquisas", pesquisaId));
    }

    /*const recuperarDados = (id) => {

      setData()
      setNome()
      setUrl()
    } */

    const goToHomeAfterModified = () => {
      if(isValid && isValidData){
        changePesquisa();
        props.navigation.navigate("Home")
      }else{
        setMessageError3("Nome e/ou Data inválidos.")
      }
    }

    const goToHomeAfterDelete = () => {
        deletePesquisa();
        props.navigation.navigate("Home")
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
            <Text style={estilos.texto}>Data</Text>

            <View style={estilos.calendario}>
            <CustomInput onChangeText={handleDataPesq} width={290} value={data}></CustomInput>
                <TouchableOpacity style={estilos.botao} ><Icon style={estilos.icone} name="calendar-month" size={30} color="gray" /></TouchableOpacity>
            </View>

            <Text style={estilos.textoErro}>{messageError2}</Text>
            <Text style={estilos.texto}>Imagem</Text>
            <TouchableOpacity style={estilos.botaoImagem} ><Image style={estilos.imagem} source={require('../assets/images/Party_Popper_imag.png')} /></TouchableOpacity>
            <Text style={estilos.textoErro}>{messageError3}</Text>
            </View>

            <View style= {estilos.rodape}>
              <CustomButton backgroundColor='#37BD6D' height={50} marginBottom={0} texto="Salvar" width={270} funcao={goToHomeAfterModified}></CustomButton>
              <TouchableOpacity onPress={() => setVisibleModal(true)}><Icon name="delete" size={60} color="#FFF" /></TouchableOpacity>
            </View>

            <Modal visible={visibleModal} transparent={true} onRequestClose={() => setVisibleModal(false)}>
              <ActionModal 
                handleConfirma={goToHomeAfterDelete} 
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
      },
      textoErro: {
        fontFamily: 'AveriaLibre-Regular',
        color: '#FD7979',
        fontSize: 18
    }
})

export default ModificarPesquisa;