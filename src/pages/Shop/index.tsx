import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Gap, PageHeader, Produk } from '../../components';
import Reward from '../../assets/images/extra';


const Shop = ({navigation}) => {


    return (
        <ScrollView style={styles.container}>
            <PageHeader
            />
            <View style={styles.content}>
                <Text style={styles.contenttext}>Exchange</Text>
            </View>
            <TouchableOpacity onPress={() =>navigation.navigate('History')}>
                <View style={styles.contentdua}>
                    <Text style={[styles.contenttext, { color: '#EAEAEA' }]}>History</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.contentWrapper}>
                <Gap height={16} />
                <View style={styles.produk}>
                    <Produk />
                </View>

                <Gap height={36} />
                <Text style={styles.title}>Special Reward </Text>
                <View style={styles.event}>
                    <Reward width={'100%'} height={'100%'} />
                </View>
            </View>
        </ScrollView>
    );
};

export default Shop;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        backgroundColor: 'white',
        width: '46%',
        borderRadius: 12,
        height: 55,
        marginLeft: 10,
        marginTop: -80,
        paddingHorizontal: 24,
    },
    contentdua: {
        backgroundColor: '#8DB596',
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
