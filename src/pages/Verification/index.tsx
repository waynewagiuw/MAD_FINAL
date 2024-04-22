import {
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Text,
} from 'react-native';
import React, { useState } from 'react';
import { Button, Gap, PageHeader, TextInput } from '../../components';

import Logo from '../../assets/images/log.svg';

const SignIn = ({ navigation }) => {
    const [number, setNumber] = useState('');
    return (
        <View style={styles.container}>

            <View style={styles.contentWrapper}>
                <Gap height={16} />
                <View style={styles.line}>
                </View>
                <Gap height={16} />
                <Text style={styles.login}>Login</Text>
                <Logo width={'100%'} />
                <Text style={styles.snk}>Input your phone number </Text>
                <Gap height={26} />
                <TextInput
                    placeholder={"0812345678"}
                    style={styles.input}
                    value={number}
                    onChangeText={text => setNumber(text)}
                />
                <Gap height={150} />
                <Button
                    label="Next"
                    backgroundColor='#135D66'
                    textColor='white'
                    onPress={() => navigation.navigate('Home')}
                />
                
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
        height: '100%',
        marginTop: 50,
        alignSelf: 'center',
    },
    line: {
        borderWidth: 3,
        borderRadius: 8,
        width: 70,
        borderColor: '#d3d3d3',
        alignSelf: 'center',
    },
    login: {
        fontSize: 26,
        alignSelf: 'center',
        fontFamily: 'Poppins-Medium',
        color: '#0A3832',
        fontWeight: 'bold'
    },
    snk: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        textAlign: 'center',
        color: '#595757',
        marginTop:-30
    },
});