import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Gap from '../../atoms/Gap';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Back from '../../../assets/icon/back'

const Date = ({
  label
}) => {
  return (
    <View >
      <TouchableOpacity style={styles.content}>
        <View>
          <Text style={styles.text}>{label}</Text>
        </View>
        <View>
          <Back width={12} height={12}/>
        </View>
      </TouchableOpacity>
      <Gap height={20}/>
      <View style={styles.line}>
      </View>
      <Gap height={20}/>
    </View>
  );
};


export default Date


const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginHorizontal:40,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'black'
  },
  line:{
    borderWidth:2,
    marginHorizontal:36,
    borderColor:'#dcdcdc'
  }

  
});
