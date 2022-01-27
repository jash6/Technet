import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Popup from '../../Claim/Popup';
import Popup from './Popup';
export default function Scroll(props) {
  const [clicked, setClicked] = useState(false);
  const [clickedeye, setClickedeye] = useState(false);
  const [see, setSee] = useState(false);
  const toggle = () => {
    setClicked(!clicked);
  };
  return (
    <View style={styles.tile}>
      <View style={styles.align}>
        <View style={{flex: 1}}>
          <Text style={[styles.title, styles.common]}>{props.name}</Text>
          <View style={styles.align}>
            <View style={styles.align}>
              <Text style={styles.text1}>Partner Count: </Text>
              <Text style={styles.text2}>{props.pc}</Text>
            </View>
            <View style={styles.align}>
              <Text style={styles.text1}>Execution: </Text>
              <Text style={styles.text2}>{props.exe}</Text>
            </View>
          </View>
        </View>
        <View style={styles.icon1}>
          <TouchableOpacity onPress={toggle}>
            <MaterialIcons
              name="keyboard-arrow-right"
              style={{color: 'black'}}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>
      {clicked ? (
        <View>
          <View style={styles.align}>
            <Text style={{flex: 1}}>NB</Text>
            <Text style={{flex: 1}}>NR</Text>
            <Text style={{flex: 1}}>DTAIO</Text>
            <Text style={{flex: 1}}>GDT</Text>
          </View>
          <View style={styles.align}>
            <View style={styles.adjust}>
              <View style={[styles.circle, {borderColor: '#7fe1ad'}]}>
                <Text style={[styles.val, {color: '#7fe1ad'}]}>53</Text>
              </View>
            </View>
            <View style={styles.adjust}>
              <View style={[styles.circle, {borderColor: 'red'}]}>
                <Text style={[styles.val, {color: 'red'}]}> 36</Text>
              </View>
            </View>
            <View style={styles.adjust}>
              <View style={[styles.circle, {borderColor: '#037aff'}]}>
                <Text style={[styles.val, {color: '#037aff'}]}>36</Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  common: {
    marginLeft: 10,
    marginRight: 10,
  },
  align: {
    flexDirection: 'row',
  },
  tile: {
    borderBottomWidth: 1,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 17,
    // marginLeft: 5,
    marginTop: 5,
    color: '#000',
  },
  text1: {
    color: 'grey',
    marginLeft: 5,
    fontSize: 17,
    marginBottom: 7,
  },
  text2: {
    color: 'grey',
    marginLeft: 5,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  icon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icon1: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icon2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trow1: {
    flexDirection: 'row',
    backgroundColor: '#e5e5e5',
    height: 45,
    borderWidth: 1,
  },
  ttext: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  ttext1: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    color: 'black',
  },
});
