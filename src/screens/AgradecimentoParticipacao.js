import { View, Text, StyleSheet } from "react-native";

const AgradecimentoParticipacao = () => {
    return(
        <View style={estilos.main_view}>
            <Text style={estilos.texto} >Obrigado por participar da pesquisa!</Text>
            <Text style={estilos.texto}>Aguardamos você no próximo ano!</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    main_view: {
      padding: 30,
      backgroundColor: '#372775',
      flex: 1,
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center"
    },
    texto: {
      fontSize: 20.3,
      fontFamily: 'AveriaLibre-Regular',
      color: 'white',
      marginBottom: 30
    }
  })

export default AgradecimentoParticipacao