import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import { Button, Gap, PageHeader, Invitefooter } from '../../components';
import Copy from '../../assets/icon/copy'

const Invite = ({ navigation }) => {

  return (
    <ScrollView>
      <View style={styles.container}>
        <PageHeader />
        <View style={styles.head} >
          <View style={styles.headtitle}>
            <Text style={styles.texthead}>Riwayat</Text>
            <Text style={styles.texthead}>See all</Text>
          </View>
          <View style={[styles.headtitle, { marginHorizontal: 40, marginVertical: 5 }]}>
            <Text style={styles.count}>3</Text>
            <Text style={styles.count}>0</Text>
            <Text style={styles.count}>0</Text>
          </View>
          <View style={[styles.headtitle, { marginHorizontal: 25 }]}>
            <Text style={[styles.textheadsub, { marginLeft: 10 }]}>Click</Text>
            <Text style={[styles.textheadsub, { marginLeft: 10 }]}>Friends</Text>
            <Text style={styles.textheadsub}>Invite Cash</Text>
          </View>
        </View>
        <View style={styles.contentWrapper}>
          <Gap height={26} />
          <Text style={styles.title}>Invite Friends!</Text>
          <Text style={styles.subtitle}>Dapatkan 10% cash dari undangan teman </Text>
          <Gap height={36} />
          <View style={styles.box}>
            <View>
              <Text style={styles.textbox}>22i7lbl</Text>
            </View>
            <View style={{ marginLeft: 50, justifyContent: 'center', }}>
              <Copy />
            </View>
          </View>
          <Gap height={26} />
          <View style={[styles.box, { height: 65 }]}>
            <View>
              <Text style={[styles.textbox, { marginVertical: 10, marginHorizontal: -40, fontFamily: 'Poppins-Light' }]}>http://inv.friend.site/22i7bl</Text>
            </View>
            <View style={{ marginLeft: 50, justifyContent: 'center' }}>
              <Copy />
            </View>
          </View>

          <Gap height={26} />
          <View style={[styles.box, { backgroundColor: '#BBD409' }]}>
            <View>
              <Text style={[styles.textbox, { marginHorizontal: 70 }]}>Invite Friend</Text>
            </View>
          </View>
          <Gap height={26} />
          <View style={styles.box}>
            <View>
              <Text style={[styles.textbox, { marginHorizontal: 25 }]}>Undang Dari Daftar Kontak</Text>
            </View>
          </View>
          <Gap height={66} />
          <Invitefooter
            label={"Keuntungan mengajak teman untuk gabung di GreenPoint"} />
          <Invitefooter
            label={"woi Keuntungan mengajak teman untuk gabung di GreenPoint"} />
        </View>
      </View>
    </ScrollView>

  );
};

export default Invite;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A3832',
    flex: 1,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    backgroundColor: '#145C61',
    borderRadius: 20,
    elevation: 7,
    paddingHorizontal: 24,
    width: 350,
    height: 100,
    marginTop: -110,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: '#D7E1E2',
    borderRadius: 10,
    paddingHorizontal: 24,
    width: 300,
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  headtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
  },
  count: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: 'white'
  },
  textbox: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: 'black',
    marginLeft: -100,
    padding: 15
  },
  contentWrapper: {
    backgroundColor: '#145C61',
    borderRadius: 20,
    paddingHorizontal: 24,
    width: 350,
    height: '100%',
    marginTop: 30,
    alignSelf: 'center',
  },

  title: {
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
    color: 'white'
  },
  texthead: {
    fontFamily: 'Poppins-Light',
    fontSize: 13,
    color: 'white'
  },
  textheadsub: {
    fontFamily: 'Poppins-Regular',
    fontSize: 7,
    color: 'white'
  },
  subtitle: {
    fontFamily: 'Poppins-Thin',
    fontSize: 11,
    textAlign: 'center',
    color: 'white'
  },

});