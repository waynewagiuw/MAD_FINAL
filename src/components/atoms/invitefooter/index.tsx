import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Gap from '../Gap';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Detail from '../../../assets/icon/backwhite'

const Invitefooter = ({
  label,
}) => {
  return (
    <ScrollView>
      <View style={styles.content}>
        <TouchableOpacity style={styles.contentwrapper}>
          <View>
            <Text style={styles.text}>{label}</Text>
          </View>
          <View>
            <Gap height={10} />
            <Detail width={12} height={12} marginTop={-10}/>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );
};


export default Invitefooter


const styles = StyleSheet.create({
  content: {
    backgroundColor: '#145C61',
    borderWidth:1,
    borderColor:'white',
    borderRadius: 10,
  },
  contentwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  text: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: 'white'
  },
  


});
