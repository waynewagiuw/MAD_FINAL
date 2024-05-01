import React from "react";
import { View, StyleSheet } from 'react-native';
import ProdukSub from "../ProdukSub";

const styles = StyleSheet.create({
    wrapperFiturUtama:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:'wrap',
        width:'100%',
    },
});

const Produk = () => {
    return (
        <View style={styles.wrapperFiturUtama}>
            <ProdukSub image={require('../../../assets/icon/pulsa.jpg')} title="Pulsa" />
            <ProdukSub image={require('../../../assets/icon/dana.jpg')} title="DANA" pageName="Dana" />
            <ProdukSub image={require('../../../assets/icon/gopay.jpg')} title="GoPay" />
            <ProdukSub image={require('../../../assets/icon/ovo.jpg')} title="OVO" />
            <ProdukSub image={require('../../../assets/icon/limited.jpg')} title="limited" />
            <ProdukSub image={require('../../../assets/icon/seabank.jpg')} title="SeaBank" />
            <ProdukSub image={require('../../../assets/icon/voucher.jpg')} title="Voucher" />
            <ProdukSub image={require('../../../assets/icon/more.jpg')} title="More" />
        </View>
    );
}

export default Produk;
