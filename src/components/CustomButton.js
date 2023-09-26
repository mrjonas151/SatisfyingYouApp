import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = (props) => {

    const texto = props.texto
    const backgroundColor = props.backgroundColor || 'blue';
    const height = props.height || 35;
    const marginBottom = props.marginBottom || 10;

    return(
        <TouchableOpacity style={[estilos.fundo, { backgroundColor, height, marginBottom }]} onPress={props.funcao}>
            <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    texto: {
        fontSize: 20,
        color: 'white',
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular',
    },
    fundo: {
        marginVertical: 5,
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    }

})


export default CustomButton;

