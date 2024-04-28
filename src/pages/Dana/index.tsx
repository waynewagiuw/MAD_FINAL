import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Gap, PageHeader, Danatukar, Noinput} from '../../components';
import Eventdana from '../../assets/images/eventdana'

const Dana = ({ navigation }) => {


    return (
        <ScrollView style={styles.container}>
            <PageHeader
            />
            <View style={styles.contentWrapper}>
                <View style={styles.event}>
                    <Eventdana width={'100%'} height={'110%'} />
                </View>
                <Gap height={56} />
                <Text style={styles.title}>E-money </Text>
                <Danatukar />
            </View>
            <Gap height={26} />
            <Noinput
            placeholder={"Enter Dana Number"}/>
        </ScrollView>
    );
};

export default Dana;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentWrapper: {
        backgroundColor: 'white',
        width: 400,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: -40,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        marginHorizontal: 18,
        color: '#0A3832'
    },
    event: {
        marginHorizontal: 18,
        height: 115,
        marginTop: -60,
        borderRadius: 10,
    },
    tukar: {
        marginHorizontal: 26,
        height: 340,
        marginTop: 5,
        backgroundColor: '#0472D7',
        borderRadius: 7,
    },

    
});
