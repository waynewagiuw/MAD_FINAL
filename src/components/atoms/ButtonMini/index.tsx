import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonMini = () => {
  return (
    <View >
      <TouchableOpacity style={styles.content}>
        <View style={styles.button}>
          <Text style={styles.text}>See all</Text>
        </View>
        <View style={styles.buttondua}>
          <Text style={[styles.text, { color: '#8F8F8F' }]}>Voucher Code</Text>
        </View>
        <View style={styles.buttontiga}>
          <Text style={styles.text}>Claim Prize</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};


export default ButtonMini;


const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginHorizontal:26
  },
  button: {
    width: 110,
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#0A3832',
    borderRadius: 20
  },
  buttondua: {
    width: 110,
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 20
  },
  buttontiga: {
    width: 110,
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#BBD409',
    borderRadius: 20
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: 'white'
  }
});
