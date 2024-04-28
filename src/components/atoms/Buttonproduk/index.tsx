import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const index = ({
  label,
  onPress
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#0472D7',
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth:1,
    borderBlockColor:'white',
    height:50,
  },
  label: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color:'white'
  },
});
