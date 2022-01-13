import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text2}>Claim Master</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
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
    // fontFamily: 'Ubuntu-Light',
    color: 'white',
  },
  text2: {
    marginTop: 65,
    marginBottom: 5,
    marginLeft: 20,
    fontSize: 25,
    fontWeight: '500',
    // fontFamily: 'Ubuntu-Bold',
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
