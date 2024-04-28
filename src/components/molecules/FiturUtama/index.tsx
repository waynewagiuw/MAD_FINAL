import React from "react";
import { View, StyleSheet } from 'react-native';
import FiturUtamaSub from "../FiturUtamaSub";

const styles = StyleSheet.create({
    wrapperFiturUtama:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:'wrap',
        width:'100%',
    },
});

const FiturUtama = () => {
    return (
        <View style={styles.wrapperFiturUtama}>
            <FiturUtamaSub image={require('../../../assets/icon/shop.jpg')} title="Shop" pageName="Shop" />
            <FiturUtamaSub image={require('../../../assets/icon/misi.jpg')} title="Mission" pageName="Mission" />
            <FiturUtamaSub image={require('../../../assets/icon/day.jpg')} title="Stamp" />
            <FiturUtamaSub image={require('../../../assets/icon/game.jpg')} title="Games" />
            <FiturUtamaSub image={require('../../../assets/icon/news.jpg')} title="News" />
            <FiturUtamaSub image={require('../../../assets/icon/doctor.jpg')} title="Health"  pageName="Health"/>
            <FiturUtamaSub image={require('../../../assets/icon/invite.jpg')} title="Invite" />
            <FiturUtamaSub image={require('../../../assets/icon/more.jpg')} title="More" />
        </View>
    );
}

export default FiturUtama;
