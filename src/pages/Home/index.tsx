import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Gap, PageHeader, FiturUtama } from '../../components';
import Challange from '../../assets/images/challange'
import Event from '../../assets/images/eventdua'
import CC from '../../assets/images/cc'
import Box from '../../assets/images/box'

const Home = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <PageHeader
            />
            <View style={styles.fitur}>
              <FiturUtama/>
            </View>
            <Gap height={36} />
            <Text style={styles.title}> Premium Event </Text>
            <View style={styles.event}>
                <Challange width={'100%'} height={'100%'} />
            </View>
            <Gap height={16} />
            <View style={styles.eventdua}>
                <Event width={'100%'} height={'100%'} />
            </View>
            <Gap height={16} />
            <View style={styles.eventbawah}>
                
                <View style={styles.eventtiga}>
                    <CC width={'100%'} height={'100%'}/>
                </View>
                <Gap height={16} />
                <View style={styles.eventempat}>
                    <Box width={'100%'} height={'100%'}/>
                </View>
            </View>
                
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    fitur: {
        marginHorizontal: 18,
        height: 200,
        marginTop: -100,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
    },
    title :{
        fontFamily: 'Poppins-Medium',
        fontSize:15,
        marginHorizontal: 18,
        color:'BBD409'
    },
    event:{
        marginHorizontal: 26,
        height: 140,
        marginTop: 5,
        backgroundColor: '#0B6E4F',
        borderRadius: 10,
    },
    eventbawah:{
        flexDirection:'row'
    },
    eventdua:{
        marginHorizontal: 26,
        height: 80,
        marginTop: 5,
        backgroundColor: '#F0F5F9',
        borderRadius: 10,
    },
    eventtiga:{
        marginHorizontal: 26,
        height: 150,
        width : '43%',
        marginTop: 5,
        backgroundColor: '#56C9A0',
        borderRadius: 10,
    },
    eventempat:{
        marginHorizontal: 26,
        height: 150,
        width : '43%',
        marginLeft:-22,
        marginTop: 5,
        backgroundColor: '#48D7E4',
        borderRadius: 10,
    },
});
