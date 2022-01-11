import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Target() {
  return (
    <View>
      <View>
        <Text style={styles.text}>Target v/s Achievement</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text1}>Target: 120</Text>
        <View style={styles.container}>
          <Ionicons name="trophy-sharp" size={23} />
          <Text style={styles.text2}>60</Text>
        </View>
        <View>
          <View style={styles.progressbar}>
            <View style={styles.progress} />
            <Text>50%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 15,
    fontWeight: '600',
  },
  text1: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  container: {
    marginLeft: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
  box: {
    height: 110,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'white',
  },
  progressbar: {
    margin: 7,
    width: '85%',
    height: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    flexDirection: 'row',
  },
  progress: {
    width: '50%',
    height: 20,
    backgroundColor: '#7fe1ad',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#7fe1ad',
  },
});
