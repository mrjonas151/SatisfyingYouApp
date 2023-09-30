import { TextInput, StyleSheet } from "react-native";

const CustomInput = (props) => {

    const { onChangeText, isSecure, value, width} = props;


    return (
        <TextInput
          style={estilos.texto}
          secureTextEntry={isSecure}
          onChangeText={onChangeText}
          value={value}
          width={width}
        />
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