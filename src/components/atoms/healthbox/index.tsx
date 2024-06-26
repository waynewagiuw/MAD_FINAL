import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Gap from '../Gap';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Healthbox = ({
  label,
  image,
}) => {
  return (
    <ScrollView>
      <View style={styles.content}>
        <TouchableOpacity style={styles.contentwrapper}>
          {image && <Image source={image} style={styles.image} />}
          <View style={{marginHorizontal:42, marginLeft:10}}>
            <Text style={styles.textone}>{label}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

export default Healthbox;

const styles = StyleSheet.create({
  content: {
    height: 120,
    backgroundColor: 'white',
    elevation: 7,
    borderRadius: 10,
    marginHorizontal: 24,
  },
  contentwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    padding: 1
  },
  textone: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: 'Black',
  },
});
