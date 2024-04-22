import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Gap, PageHeader, ButtonMini, Date } from '../../components';


const History = ({ navigation }) => {


    return (
        <ScrollView style={styles.container}>
            <PageHeader
            />

            <TouchableOpacity style={styles.content} onPress={() => navigation.navigate('Shop')}>
                <View >
                    <Text style={[styles.contenttext, { color: '#EAEAEA' }]}>Exchange</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.contentdua}>
                <Text style={styles.contenttext}>History</Text>
            </View>
            <View style={styles.contentWrapper}>
               <Gap height={16}/>
               <ButtonMini/>
               <Gap height={30}/>
               <Date
               label={"2024-04-11"}/>
               <Date
               label={"2024-04-10"}/>
            </View>
        </ScrollView>
    );
};

export default History;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    content: {
        backgroundColor: '#8DB596',
        width: '46%',
        borderRadius: 12,
        height: 55,
        marginLeft: 10,
        marginTop: -80,
        paddingHorizontal: 24,
    },
    contentdua: {
        backgroundColor: 'white',
        width: '46%',
        borderRadius: 12,
        height: 55,
        marginLeft: 10,
        marginTop: -55,
        paddingHorizontal: 24,
        alignSelf: 'flex-end',
        marginRight: 10,
    },

    contenttext: {
        fontSize: 16,
        alignSelf: 'center',
        fontFamily: 'Poppins-Medium',
        color: '#0A3832',
        marginTop: 10
    },
    contentWrapper: {
        backgroundColor: 'white',
        width: 400,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: -10
    },

    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        marginHorizontal: 18,
        color: '#0A3832'
    },
    event: {
        marginHorizontal: 26,
        height: 300,
        marginTop: 5,
        backgroundColor: '#01427A',
        borderRadius: 7,
    },
    produk: {
        marginHorizontal: 18,
        height: 200,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
    },
});
