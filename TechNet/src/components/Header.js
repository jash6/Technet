import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        {props.name === 'Technet Informa...' ? (
          <Text style={styles.text}>Hi</Text>
        ) : props.name === 'Target V/S Achievement' ? (
          <TouchableOpacity onPress={props.navigation.goBack}>
            <MaterialIcons
              name="keyboard-arrow-left"
              style={styles.icon2}
              size={25}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
        <Text
          style={
            props.name === 'Technet Informa...'
              ? [styles.text2, {fontWeight: 'bold'}]
              : [styles.text2, {fontWeight: '500'}]
          }>
          {props.name}
        </Text>
        {props.name === 'Technet Informa...' ? (
          <View style={{flexDirection: 'row'}}>
            <FontAwesome5 name="bell" style={styles.icon} size={23} solid />
            <MaterialCommunityIcons
              name="login"
              style={styles.icon2}
              size={25}
            />
          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    backgroundColor: '#00539b',
  },
  text_container: {
    flexDirection: 'row',
  },
  text: {
    marginTop: '9%',
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 25,
    // fontFamily: 'Ubuntu-Light',
    color: 'white',
  },
  text2: {
    marginTop: '9%',
    marginBottom: 5,
    marginLeft: 10,
    fontSize: 25,
    // fontWeight: 'bold',
    // fontFamily: 'Ubuntu-Bold',
    color: 'white',
  },
  icon: {
    marginTop: 40,
    marginBottom: 5,
    marginLeft: 30,
    color: 'white',
  },
  icon2: {
    marginTop: 40,
    marginBottom: 5,
    marginLeft: 20,
    color: 'white',
  },
});
