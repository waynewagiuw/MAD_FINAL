import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import  Gap from '../../atoms/Gap';

const Help = () => {
    return (
        <View style={styles.wrapperFiturUtama}>
            <View >
            <Gap height={16} />
                <Text style={styles.detail}> Help Center</Text>
                <Text style={styles.detail}> Ask via Email</Text>
                <Text style={styles.detail}> Privacy Policy</Text>
                <Text style={styles.detail}> Terms and Conditions</Text>
            </View>

        </View>
    );
};


export default Help;


const styles = StyleSheet.create({
    wrapperFiturUtama: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        
    },
    detail: {
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        color:'#BBD409',
        fontWeight:'bold',
        marginLeft:30,
        marginVertical:7,
    },
});
