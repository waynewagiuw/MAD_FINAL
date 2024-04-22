import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({ placeholder}) => {
  return (
    <View>
      <Input style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderBottomWidth:3,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    fontWeight:'bold',
    padding: 12,
    textAlign:'center',
  },

});
