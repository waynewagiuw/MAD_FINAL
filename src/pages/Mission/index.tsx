import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Gap, PageHeader, } from '../../components';
import Tips from '../../assets/images/tips'
import CC from '../../assets/images/misisatu'
import Box from '../../assets/images/plant'
import Bersih from '../../assets/images/bersih'
import Poinsatu from '../../assets/icon/poinsatu'
import Eco from '../../assets/icon/ecohijau';



const Mission = () => {


    return (
        <ScrollView style={styles.container}>
            <PageHeader
            />
            <View style={styles.content}>
                <Text style={styles.contenttext}>Mission</Text>
            </View>
            <View style={styles.contentdua}>
                <Text style={[styles.contenttext, { color: '#EAEAEA' }]}>Extra Poin</Text>
            </View>
            <View style={styles.contentWrapper}>
                <Gap height={10} />
                <View style={styles.event}>
                    <Tips width={'100%'} height={'100%'} />
                </View>
                <Gap height={16} />
                <View style={styles.eventbawah}>
                    <View style={styles.eventbawah}>

                        <View style={[styles.eventtiga,
                        { marginTop: 230 },
                        { height: 75 },
                        { backgroundColor: 'white' },
                        { elevation: 2 },
                        { flexDirection: 'row' }
                        ]}>
                            <Poinsatu width={40} height={40} marginTop={25} marginLeft={5} />
                            <View style={styles.pointext}>
                                <Text style={styles.pointextname}>Uploud Picture ...</Text>
                                <Text style={styles.pointextpoin}>+P 50</Text>
                            </View>
                        </View>
                        <Gap height={16} />
                        <View style={[styles.eventempat,
                        { marginTop: 230 },
                        { height: 75 },
                        { backgroundColor: 'white' },
                        { elevation: 2 },
                        { flexDirection: 'row' }
                        ]}>
                            <Eco width={35} height={35} marginTop={25} marginLeft={5} />
                            <View style={styles.pointext}>
                                <Text style={styles.pointextname}>Uploud Picture ...</Text>
                                <Text style={styles.pointextpoin}>+P 50</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.eventbawah}>
                    <View style={styles.eventtiga}>
                        <CC width={'100%'} height={'100%'} />
                    </View>
                    <Gap height={16} />
                    <View style={styles.eventempat}>
                        <Box width={'102%'} height={'100%'} />

                    </View>
                </View>

                <Gap height={16} />
                <View style={[styles.event, { backgroundColor: '#2DB5B5' }, { marginTop: -15 }]}>
                    <Bersih width={'100%'} height={'120%'} />
                </View>
                <Gap height={16} />
            </View>

        </ScrollView>
    );
};

export default Mission;

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
    event: {
        marginHorizontal: 26,
        height: 180,
        marginTop: 5,
        backgroundColor: '#00A652',
        borderRadius: 7,
    },
    eventbawah: {
        flexDirection: 'row',
    },
    eventtiga: {
        marginHorizontal: 26,
        height: 250,
        width: '42%',
        marginTop: -305,
        backgroundColor: '#F4ECDA',
        borderRadius: 14,
    },
    eventempat: {
        marginHorizontal: 26,
        height: 250,
        width: '42%',
        marginLeft: -12,
        marginTop: -305,
        backgroundColor: '#D8F6F8',
        borderRadius: 14,
    },
    poinimage: {
        width: 15,
        height: 15
    },
    pointext: {
        marginTop: 27,
        fontFamily: 'Poppins-Medium',
        fontWeight: 'bold',
        marginLeft:10
    },
    pointextname: {
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        fontWeight: 'bold',
        color: 'Black',
    },
    pointextpoin: {
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        fontWeight: 'bold',
        color: '#FFC700',
        
    },
});
