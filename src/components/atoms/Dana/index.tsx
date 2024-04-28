import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Danadua from '../../../assets/images/dana2'
import { Buttonproduk } from '..';
import { Jenis } from '../../molecules';
import Gap from '../Gap'

const Danatukar = () => {
  return (

    <View style={styles.tukar}>
      <View style={styles.contentwrapper}>
        <View style={styles.titledana}>
          <View style={styles.header}>
            <View>
              <Danadua />
            </View>
            <View style={{marginLeft:10, marginTop:5}}>
              <Text style={{
                color: 'black',
                fontSize: 25,
                fontFamily: 'Poppins-Medium',
              }}>DANA</Text>
              <Text style={{
                color: 'black',
                fontSize: 12,
                fontFamily: 'Poppins-Bold',
                marginTop:-10
              }}>Tukar Poin dengan Dana</Text>
            </View>
          </View>
          <Gap height={20} />

        </View>
        <View>

        </View>
        <View style={styles.middana}>
          <Jenis
            label={"10k"}
            labelone={"50p"} />
          <Jenis
            label={"20k"}
            labelone={"100p"} />
          <Jenis
            label={"50k"}
            labelone={"150p"} />
        </View>
        <Buttonproduk
          label={"Lihat Semua"} />
      </View>

    </View>

  );
};


export default Danatukar


const styles = StyleSheet.create({
  contentwrapper: {
    marginVertical:35,
    marginHorizontal:24,
  },
  header: {
    flexDirection: 'row',
    alignItems:'center'
  },
  titledana: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf:'center'
    
  },
  middana: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  tukar: {
    marginHorizontal: 24,
    marginTop: 5,
    backgroundColor: '#0472D7',
    borderRadius: 7,
  },
});
