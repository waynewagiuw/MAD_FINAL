import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const Transaction = ({ label, date, description, amount }) => {
    return (
        <View style={styles.transactionItem}>
            <View style={styles.border}>
                <View>
                    <Text style={styles.transactionDate}>{date}</Text>
                    <Text style={[styles.transactionDate, { color: 'black' }]}>{description}</Text>
                </View>
                <View>
                    <Text style={[styles.transactionAmount, amount.startsWith('+') ? styles.greenText : styles.redText]}>{amount}</Text>
                </View>
            </View>
        </View>
    );
};


export default Transaction;


const styles = StyleSheet.create({
    border: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        height: 70,
        marginHorizontal: 20,
        marginTop: 35,
        marginBottom: -40,
        borderRadius: 7,
        backgroundColor:"white",
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    transactionItem: {
        marginBottom: 10,
    },
    transactionDate: {
        fontSize: 14,
        marginBottom: 5,
        marginHorizontal: 10,
        fontFamily: 'Poppins-Medium'
    },
    transactionAmount: {
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        fontFamily: 'Poppins-Medium'
    },
    greenText: {
        color: '#02CF8E',
    },
    redText: {
        color: '#D9435E',
    },
});
