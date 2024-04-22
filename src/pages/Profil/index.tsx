import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {  Bio, Help, Gap, ProfilHeader } from '../../components';

const Profil = ({navigation}) => {

    return (
        <ScrollView style={styles.container}>
            <ProfilHeader
            />
            <Gap height={24} />
            <View style={styles.profil}>
               <Bio/> 
            </View>
            <Gap height={16} />
            <Text style={styles.title}>Help Center</Text>
            <View style={[styles.profil, {marginTop:5}, {height:160}]} >
               <Help/> 
            </View>
            <Gap height={16} />
            <Text style={styles.title}>Settings</Text>
            <Gap height={16} />
            <Text style={styles.title}>Logout</Text>
        </ScrollView>
    );
};

export default Profil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    contentWrapper: {
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 24,
        
    },
    profil: {
        marginHorizontal: 18,
        height: 200,
        marginTop: -100,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
    },
    title:{
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color:'#0A3832',
        fontWeight:'bold',
        marginLeft:18,
        marginVertical:7, 
    }
});
