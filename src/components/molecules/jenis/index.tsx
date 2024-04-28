import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Jenis = ({
  label,
  labelone,
}) => {
  return (
    <View>
      <View style={styles.jenis}>
        <Text style={styles.text}>{label}</Text>
        <Text style={styles.textdua}>{labelone}</Text>
      </View>
    </View>
  );
};


export default Jenis


const styles = StyleSheet.create({
  jenis: {
    backgroundColor :'#D4E5F4',
    width : 70,
    height :70,
    borderRadius :10,
    alignItems:'center',
    marginVertical:10
  },
  text: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: 'black',
    marginVertical :10
  },
  textdua: {
    fontSize: 12,
    marginTop:-20,
    fontFamily: 'Poppins-Medium',
    color: 'black'
  },

});
