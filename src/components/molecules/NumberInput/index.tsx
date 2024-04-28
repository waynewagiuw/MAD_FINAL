import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const Noinput = ({ placeholder}) => {
  return (
    <View>
      <Input style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default Noinput;

const styles = StyleSheet.create({
  input: {
    backgroundColor:'#E4E4E4',
    marginHorizontal:24,
    borderRadius:5,
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    padding: 12,
    textAlign:'center',
    color:'#8D92A3'
  },

});
