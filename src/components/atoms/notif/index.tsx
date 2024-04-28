import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Gap from '../../atoms/Gap';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Detail from '../../../assets/icon/back'
import Read from '../../../assets/icon/bulat'

const Notif = ({
  label,
  labelone,
  labeltwo
}) => {
  return (
    <ScrollView>
      <View style={styles.content}>
        <TouchableOpacity style={styles.contentwrapper}>
          <View>
            <Text style={styles.text}>{label}</Text>
            <Text style={styles.textone}>{labelone}</Text>
            <Text style={styles.texttwo}>{labeltwo}</Text>
          </View>
          <View>
            <Gap height={10} />
            <Read width={8} height={8} marginLeft={2} />
            <Gap height={3} />
            <Detail width={12} height={12} />
          </View>
        </TouchableOpacity>
      </View>
      <Gap height={20} />

    </ScrollView>

  );
};


export default Notif


const styles = StyleSheet.create({
  content: {
    height: 120,
    backgroundColor: 'white',
    elevation: 7,
    borderRadius: 10,
    marginHorizontal: 24
  },
  contentwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: 'black'
  },
  textone: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: 'Black',
  },
  texttwo: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#c0c0c0',
    marginVertical: 12
  },



});
