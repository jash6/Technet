import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Analysis from './Analysis';
import Sellout from './Sellout';
import Inventory from './Inventory';

export default function Performance() {
  const [metrics, Setmetrics] = useState([true, false, false]);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={metrics[0] ? styles.click : styles.nclicked}
          onPress={() => {
            Setmetrics([true, false, false]);
          }}>
          <Text style={styles.text}>Performance</Text>
          <Text style={styles.text}>Analysis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={metrics[1] ? styles.click : styles.nclicked}
          onPress={() => {
            Setmetrics([false, true, false]);
          }}>
          <Text style={styles.text}>Sell Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={metrics[2] ? styles.click : styles.nclicked}
          onPress={() => {
            Setmetrics([false, false, true]);
          }}>
          <Text style={styles.text}>Inventory</Text>
        </TouchableOpacity>
      </View>
      <View>
        {metrics[0] ? <Analysis /> : metrics[1] ? <Sellout /> : <Inventory />}
      </View>
      <View>
        <TouchableOpacity style={{alignItems: 'flex-end'}}>
          <Text
            style={{
              color: '#0076ff',
              margin: 10,
              fontSize: 15,
              fontWeight: '400',
            }}>
            See More
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'white',
  },
  click: {
    flex: 1,
    justifyContent: 'center',
    borderBottomColor: '#0076ff',
    borderBottomWidth: 4,
    borderRadius: 5,
  },
  nclicked: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
