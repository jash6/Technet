import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Popup(props) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={props.onClose}>
            <MaterialIcons name="close" style={{color: 'black'}} size={30} />
          </TouchableOpacity>
        </View>
        <View style={{borderWidth: 1}}>
          <View>
            <View style={styles.container}>
              <Text style={[{flex: 1}, styles.text]}>{props.name}</Text>
              <Text style={[{flex: 1, fontSize: 12}, styles.text1]}>
                {props.no}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.text1, {flex: 1}]}>
                [NR211007] ALP activation support
              </Text>
            </View>
          </View>
          <View>
            <View>
              <View style={styles.container}>
                <Text style={styles.text2}>Claim date: </Text>
                <Text style={styles.text3}>02/10/2021 -15/10/2021</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.text2}>Claim date: </Text>
                <Text style={styles.text3}>EXACT</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.text2}>Case Status: </Text>
                <Text style={styles.text3}>CN is passed to Disti</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={[styles.container, {flex: 1}]}>
                  <Text style={styles.text2}>Pre Tax: </Text>
                  <Text style={styles.text3}> 105786.00</Text>
                </View>
                <View style={[styles.container, {flex: 1}]}>
                  <Text style={styles.text2}>After Tax: </Text>
                  <Text style={styles.text3}> 124827.48</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Second Repitition */}
        <View style={{borderWidth: 1}}>
          <View>
            <View style={styles.container}>
              <Text style={[{flex: 1}, styles.text]}>{props.name}</Text>
              <Text style={[{flex: 1, fontSize: 12}, styles.text1]}>
                {props.no}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.text1, {flex: 1}]}>
                [NR211007] ALP activation support
              </Text>
            </View>
          </View>
          <View>
            <View>
              <View style={styles.container}>
                <Text style={styles.text2}>Claim date: </Text>
                <Text style={styles.text3}>02/10/2021 -15/10/2021</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.text2}>Claim date: </Text>
                <Text style={styles.text3}>EXACT</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.text2}>Case Status: </Text>
                <Text style={styles.text3}>CN is passed to Disti</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={[styles.container, {flex: 1}]}>
                  <Text style={styles.text2}>Pre Tax: </Text>
                  <Text style={styles.text3}> 145786.00</Text>
                </View>
                <View style={[styles.container, {flex: 1}]}>
                  <Text style={styles.text2}>After Tax: </Text>
                  <Text style={styles.text3}> 148827.48</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* End */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  modalView: {
    width: '95%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 20,
  },
  container: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 10,
  },
  text1: {
    color: 'grey',
    marginBottom: 5,
    marginLeft: 10,
  },
  text2: {
    marginBottom: 7,
    fontSize: 15,
    marginLeft: 10,
  },
  text3: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    color: 'black',
  },
  icon: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
});
