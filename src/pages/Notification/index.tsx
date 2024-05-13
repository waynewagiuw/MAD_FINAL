import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {  Gap, PageHeader, Notif } from '../../components';

const Notification = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <PageHeader/>
            <View style={styles.contentWrapper}>
                <Text style={styles.title}>Notification</Text>
                <Gap height={16} />
                <View >
                    <Notif 
                    label={"ADA EXTRA REWARD 200 POINT!"}
                    labelone={"Segera upload picture sampah plastik anda, kumpulkan pointnya dan tukar dengan hadiah yang menarik "}
                    labeltwo={"16, Apr 2024, 14:29"}/>
                    <Notif 
                    label={"SELESAIKAN MISI ANDA SEKARANG!!!"}
                    labelone={"Halo sobat GreenPoint! segera join di BEACH CLEAN UP di Pantai Goa Cemara dan kumpul poin anda sebanyak-banyaknya."}
                    labeltwo={"13 Apr 2024, 20:30"}/>
                    <Notif 
                    label={"TUKAR POINT DENGAN SALDO DANA"}
                    labelone={"Dana memudahkan anda dengan menukar point dengan saldo dana mulai dari 10k"}
                    labeltwo={"07 Apr 2024, 10:47"}/>
                    <Notif 
                    label={"Yeay! Point Pertama Untuk Anda"}
                    labelone={"Anda baru saja mendapatkan 10 point dari penanaman pohon.  "}
                    labeltwo={"06 Apr 2024, 07:09"}/>
                    <Notif 
                    label={"Hallo Sobat GreenPoint!"}
                    labelone={"Selamat! anda telah berhasil daftar. Silahkan menjelajahi aplikasi ini dan dapatkan kesempatan untuk mengikuti setiap misi yang ada dan hadiah"}
                    labeltwo={"05 Apr 2024, 15:28"}/>
                </View>
                <Gap height={16} />
            </View>

        </ScrollView>
    );
};

export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentWrapper: {
        backgroundColor: 'white',
        flex: 1,
        marginTop:-100
    },
    title: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        color: 'black',
        marginLeft: 18,
        marginVertical: 7,
    }
});
