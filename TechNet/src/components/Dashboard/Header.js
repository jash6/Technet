import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>Hi</Text>
        <Text style={styles.text2}>Technet Informa...</Text>
        <FontAwesome5 name="bell" style={styles.icon} size={23} solid />
        <MaterialCommunityIcons name="login" style={styles.icon2} size={25} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    backgroundColor: '#00539b',
  },
  text_container: {
    flexDirection: 'row',
  },
  text: {
    marginTop: 55,
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 25,
    fontFamily: 'Ubuntu-Light',
    color: 'white',
  },
  text2: {
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu-Bold',
    color: 'white',
  },
  icon: {
    marginTop: 57,
    marginBottom: 5,
    marginLeft: 30,
    color: 'white',
  },
  icon2: {
    marginTop: 57,
    marginBottom: 5,
    marginLeft: 20,
    color: 'white',
  },
});
