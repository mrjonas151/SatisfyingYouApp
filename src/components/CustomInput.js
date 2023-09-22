import { TextInput, StyleSheet } from "react-native";

const CustomInput = (props) => {

    const texto = props.texto

    return(
        <TextInput style={estilos.texto}>
            {texto}
        </TextInput>
    );
}

const estilos = StyleSheet.create({
    texto: {
        fontSize: 20,
        color: '#3F92C5',
        textAlign: "left",
        padding: 10,
        backgroundColor: 'white',
        fontFamily: 'AveriaLibre-Regular'
    },

    
})

export default CustomInput;