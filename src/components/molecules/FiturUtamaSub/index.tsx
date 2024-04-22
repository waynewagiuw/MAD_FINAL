import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    imageFeatureUtama: {
        height: 50,
        width: 50,
        marginTop: 15,
    },
    textFeatureUtama: {
        textAlign: 'center',
        marginTop: 4,
        fontFamily: 'Poppins-Medium',
    }
})

const FiturUtamaSub = (props) => {
    const navigation = useNavigation();
    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    };
    return (
        <TouchableOpacity onPress={() => goToPage(props.pageName)} style={{ width: '25%', alignItems: 'center' }}>
            <View>
                <Image style={styles.imageFeatureUtama} source={props.image} />
                <Text style={styles.textFeatureUtama}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FiturUtamaSub;

