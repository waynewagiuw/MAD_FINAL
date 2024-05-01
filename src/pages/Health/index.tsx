import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {  Gap, PageHeader, Healthbox } from '../../components';

const Health = () => {

    return (
        <ScrollView style={styles.container}>
            <PageHeader/>
            <View style={styles.contentWrapper}> 
                <Text style={styles.title}>Health</Text>
                <Gap height={16} />
                <View >
                    <Healthbox
                    image={require('../../assets/icon/bike.png')}
                    label={"Mari kita berkontribusi pada pelestarian lingkungan dan kesehatan diri dengan mengurangi emisi karbon melalui penggunaan transportasi umum atau bersepeda, bukan menggunakan kendaraan pribadi yang berpolusi."}
                   />
                    <Healthbox
                    image={require('../../assets/icon/throw.png')}
                    label={"Jaga kebersihan lingkungan kita dengan membuang sampah pada tempatnya, sehingga kita dapat mencegah polusi tanah dan air yang berdampak buruk pada kesehatan masyarakat dan ekosistem."}
                    />
                    <Healthbox
                    image={require('../../assets/icon/recycle.png')}
                    label={"Mari kita mengurangi penggunaan botol air sekali pakai dengan menggunakan botol air daur ulang, yang tidak hanya mengurangi limbah plastik tetapi juga membantu menjaga kesehatan kita dengan minum air yang bersih dan aman."}
                    />
                    <Healthbox
                    image={require('../../assets/icon/plant.png')}
                    label={"Dukung keanekaragaman hayati dengan tidak menebang pohon secara sembarangan, melainkan dengan menanam lebih banyak pohon dan menghijaukan lingkungan sekitar kita, yang juga dapat meningkatkan kesehatan mental dan fisik kita."}
                    />
                    <Healthbox
                    image={require('../../assets/icon/friends.png')}
                    label={"Ajak teman dan keluarga untuk bergabung dalam menjaga kebersihan dan kelestarian lingkungan, dengan melakukan kegiatan bersama seperti membersihkan pantai, menanam pohon, atau mendaur ulang sampah, yang dapat mempererat ikatan sosial sambil menjaga kesehatan dan keberlanjutan lingkungan."}
                    />
                </View>
                 <Gap height={16} />
            </View>

        </ScrollView>
    );
};

export default Health;

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
