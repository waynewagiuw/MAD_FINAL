import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Pic from '../../../assets/icon/profil.svg';
import Poin from '../../../assets/icon/poin.svg';

const ProfilHeader = () => {


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.Hello}>Hello! <Text style={{color:'#BBD409'}} >Jhon</Text></Text>
                <Pic width={28} height={28} marginTop={15} marginLeft={140} />               
                <Poin width={45} height={45} marginTop={8} marginLeft={10} />
            </View>
        </View>
    );
};

export default ProfilHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0A3832',
        paddingLeft: 24,
        height: 190,
    },
    header: {
        flexDirection: 'row',
    },
    Hello: {
        fontSize: 22,
        marginTop: 15,
        marginLeft: 5,
        color: 'white',
        fontFamily: 'Poppins-Medium',
    },
});
