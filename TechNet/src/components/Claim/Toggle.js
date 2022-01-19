import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Reseller from './Reseller';
import Retailer from './Retailer';

export default function Toggle() {
  const [metrics, Setmetrics] = useState([false, true]);
  return (
    <View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={metrics[0] ? styles.click : styles.nclicked}
            onPress={() => {
              Setmetrics([true, false]);
            }}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text2}>51/80</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={metrics[1] ? styles.click : styles.nclicked}
            onPress={() => {
              Setmetrics([false, true]);
            }}>
            <Text style={styles.text}>Channel</Text>
            <Text style={styles.text2}>12/20</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'flex-start'}}>
            <Text style={styles.text}>LFR</Text>
            <Text style={styles.text2}>3/5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'flex-start'}}>
            <Text style={styles.text}>Online</Text>
            <Text style={styles.text2}>12/20</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'flex-start'}}>
            <Text style={styles.text}>Eshops</Text>
            <Text style={styles.text2}>2/5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent: 'flex-start'}}>
            <Text style={styles.text}>Dishti</Text>
            <Text style={styles.text2}>22/30</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {metrics[0] ? <Reseller /> : metrics[1] ? <Retailer /> : <> </>}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'white',
    height: 50,
    marginBottom: 10,
  },
  click: {
    flex: 1,
    borderBottomColor: '#0076ff',
    borderBottomWidth: 4.5,
    borderRadius: 5,
    justifyContent: 'flex-start',
    height: 50,
  },
  nclicked: {
    flex: 1,
    height: 50,
    justifyContent: 'flex-start',
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
  text2: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 10,
    color: 'grey',
  },
});
