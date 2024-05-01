import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Pic from '../../../assets/icon/profil.svg';
import Poin from '../../../assets/icon/poin.svg';
import Notif from '../../../assets/icon/bel.svg';
import { useNavigation } from '@react-navigation/native';

const PageHeader = () => {
    const navigation = useNavigation();

    const goToProfile = () => {
        navigation.navigate('Profil');
    };
    const goToNotification = () => {
        navigation.navigate('Notification');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goToProfile}>
                    <Pic width={40} height={40} marginTop={15} marginLeft={-10} />
                </TouchableOpacity>
                <Text style={styles.Hello}>Hello! <Text style={styles.yellow} color='#FFC700'>Jhon</Text></Text>
                <Poin width={60} height={60} marginTop={5} marginLeft={85} />
                <TouchableOpacity onPress={goToNotification}>
                    <Notif width={30} height={30} marginTop={25} marginLeft={20} />
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default PageHeader;

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
    yellow: {
        color: '#BBD409',
    }
});
