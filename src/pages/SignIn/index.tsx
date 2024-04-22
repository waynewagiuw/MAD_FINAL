import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import { Button, Gap, PageHeader, TextInput } from '../../components';

import Logo from '../../assets/icon/Eco.svg';

const SignIn = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo width={50} height={50} marginTop={300}
        />
        <Text style={styles.text}>GreenPoint</Text>
      </View>
      <View style={styles.contentWrapper}>

        <View style={styles.line}>

        </View>
        <Gap height={16} />
        <Text style={styles.login}>Login</Text>
        <Gap height={26} />
        <Button
          label="Continue with phone"
          backgroundColor='#135D66'
          textColor='white'
          onPress={() =>navigation.navigate('Verification')}
        />
        <Gap height={16} />
        <Button
          label="Continue with Email"
          backgroundColor='#0A3832'
          textColor='white'
          
        />
        <Gap height={60} />
        <Text style={styles.snk}>By Continuing you agree to our <Text style={styles.blue}>Term &</Text> </Text>
        <Text style={styles.snk}><Text style={styles.blue}>Condition</Text> and <Text style={styles.blue}>Privacy Polcy</Text> </Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A3832',
    flex: 1,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 310,
    marginLeft: 5,
    fontSize: 26,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 24,
    width: 350,
    height: 400,
    marginTop: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  line: {
    borderWidth: 3,
    borderRadius: 8,
    width: 70,
    borderColor: '#d3d3d3',
    alignSelf: 'center',
    marginTop: -50,
  },
  login: {
    fontSize: 26,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
    color: 'black'
  },
  snk:{
    fontFamily:'Poppins-Medium',
    fontSize:11,
    textAlign:'center'
  },
  blue:{
    color:'#201658',
    textDecorationLine:'underline',
    fontWeight:'bold'
  }
});