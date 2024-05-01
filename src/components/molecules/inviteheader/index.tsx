import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Photo from '../../../assets/icon/profilkotak'
import  Gap from '../../atoms/Gap';

const Inviteheader = () => {
    return (
        <View style={styles.wrapperFiturUtama}>
            <View >
                <View style={styles.foto}>
                    <Photo width={'100%'} height={'94%'} marginVertical={2} alignSelf={'center'} />
                </View>
            </View>
            <View >
                <Gap height={40} />

                <Text style={styles.detail}>081234567812</Text>
                <Gap height={10} />
                <Text style={styles.detail}>Username Jhon Doe </Text>
                <Text style={styles.detail}>Total Points This Month 130</Text>
                <Text style={styles.detail}>Total Prize Redemption 2</Text>
                <Gap height={10} />
                <Text style={styles.edit}>Edit Profil</Text>
                <Text style={styles.version}>version 1.3.50</Text>
                
            </View>

        </View>
    );
};


export default Inviteheader;


const styles = StyleSheet.create({
    wrapperFiturUtama: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },
    foto: {
        width: 100,
        height: 100,
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: '#90E0AA'
    },
    detail: {
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        color:'#c0c0c0',
    },
    edit: {
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
        color:'#BBD409',
        marginLeft:120,
        fontWeight:'bold'

    },
    version: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color:'#c0c0c0',
        marginLeft:-120,
        marginTop:-5
    },
});
