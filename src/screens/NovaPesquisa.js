import { Text, View, Image, Modal } from "react-native";
import { StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import { useState } from "react";
import { initializeFirestore, collection, addDoc } from 'firebase/firestore';
import app from "../firebase/config";
import storage from "../firebase/config";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { ActionModalImagem } from "../components/ActionModalImagem";

const NovaPesquisa = (props) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [data, setData] = useState('')
  const [nome, setNome] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [isValidData, setIsValidData] = useState(false)
  const [messageError1, setMessageError1] = useState('Preencha o nome da pesquisa')
  const [messageError2, setMessageError2] = useState('Preencha a data')
  const [messageError3, setMessageError3] = useState('')
  const [url, setUrlImage] = useState('') //pega a url da imagem tirada
  const [img, setImage] = useState()//guarda dados img
  const [idImg, setIdImagem] = useState('')

  db = initializeFirestore(app, { experimentalForceLongPolling: true })
  pesquisaCollection = collection(db, "pesquisas")

  const addPesquisa = async () => {
    const imageRef = ref(getStorage(storage), idImg + '.jpeg') //referencia da imagem no storage, passa ome do arquivo para ser armazenado/ arquivo que esta no disp movel
    const file = await fetch(img.uri) //referencia imagem da camera 
    const blob = await file.blob()//extrai os bytes do arquivo

    uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
      .then(
        (result) => { console.log("Arquivo enviado com sucesso.") },
        getDownloadURL(imageRef)
          .then(
            (urlD) => {
              const docPesquisa = {
                titulo: nome,
                subtitulo: data,
                imageUrl: urlD,
                imageNome: idImg+'.jpeg'
              }
              addDoc(pesquisaCollection, docPesquisa).then((docRef) => { console.log("Pesquisa criada com sucesso, ID: " + docRef.id) }).then(props.navigation.navigate("Home"))
                .catch((erro) => { console.log("ERRO" + erro) })
            }
          )
          .catch(
            (error) => (console.log("ERRO: " + JSON.stringify(error)))
          )

      )
      .catch(
        (error) => { console.log("ERRO ao enviar arquivo: " + JSON.stringify(error)) }
      )


  }

  const goToHome = () => {
    if (isValid && isValidData) {
      addPesquisa()
    } else {
      setMessageError3("Nome e/ou Data inválidos.")
    }
  }

  const handleNomePesq = (text) => {
    setMessageError3("")
    setNome(text)
    if (text === null || text === '' || text.length === 0) {
      setIsValid(false)
      setMessageError1("Preencha o nome da pesquisa")
    } else {
      setMessageError1("")
      setIsValid(true)
    }
  }

  const handleDataPesq = (text) => {
    setMessageError2("")
    setData(text)
    const formaData = /^\d{2}\/\d{2}\/\d{4}$/;
    if (text && formaData.test(text)) {
      setMessageError3("")
      setIsValidData(true)
    } else {
      setIsValidData(false)
      setMessageError2("Preencha a data")
    }
  }

  const capturarImage = () => {
    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
      .then(
        (result) => {
          setUrlImage(result.assets[0].uri)
          setImage(result.assets[0])
          setIdImagem(Date.now().toString())
        }
      )
      .catch(
        (error) => { console.log("Erro captura de imagem: " + JSON.stringify(error)) }
      )
    setVisibleModal(false)
  }

  const uploadImage = () => {
    launchImageLibrary({ mediaType: 'photo', includeBase64: true })
      .then(
        (result) => {
          setUrlImage(result.assets[0].uri)
          setImage(result.assets[0])
          setIdImagem(Date.now().toString());
        }
      )
      .catch(
        (error) => {
          console.log("Erro captura de imagem: " + JSON.stringify(error))
        }
      )
    setVisibleModal(false)
  }
  return (
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

        { //se url tem conteudo, aparece imagem. Caso vazia, o botao.
          url ?
            <TouchableOpacity onPress={() => setVisibleModal(true)}>
              <Image style={estilos.botaoImagem}  source={{ uri: url }} />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => setVisibleModal(true)} style={estilos.botaoImagem}><Text style={estilos.imagem} > Câmera/Galeria de imagens</Text></TouchableOpacity>
        }

        <Text style={estilos.textoErro}>{messageError3}</Text>
      </View>

      <View style={estilos.rodape}>
        <CustomButton backgroundColor='#37BD6D' height={50} marginBottom={0} texto="CADASTRAR" width={330} funcao={goToHome}></CustomButton>
      </View>

      <Modal visible={visibleModal} transparent={true} onRequestClose={() => setVisibleModal(false)}>
        <ActionModalImagem
          handleCamera={capturarImage}
          handleGaleria={uploadImage}
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
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoImagem: {
    marginTop: 5,
    backgroundColor: "white",
    height: 110,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
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
    backgroundColor: 'white',
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