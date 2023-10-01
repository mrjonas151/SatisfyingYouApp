import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export const DivPadrao = ({ color, textColor, onPress, width, style, disabled, imageSource, text, data }) => {
  const divStyle = {
    backgroundColor: color || 'green',
  };

  const styles = StyleSheet.create({
    div: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center', 
      width: width || 100,
    },
    image: {
      width: 80, 
      height: 80, 
      marginBottom: 10, 
    },
    text: {
      color: textColor,
      fontSize: 25,
      fontFamily: 'AveriaLibre-Regular',
    },
    data: {
      fontSize: 10,
    }
  });

  return (
    <TouchableOpacity
      style={[styles.div, divStyle, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      {data && <Text>{data}</Text>}
    </TouchableOpacity>
  );
};