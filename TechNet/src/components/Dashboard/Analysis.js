import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Analysis() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text
            style={[
              {
                color: '#7fe1ad',
              },
              styles.number,
            ]}>
            55
          </Text>
        </View>
        <View style={styles.view}>
          <Text
            style={[
              {
                color: '#5f6af8',
              },
              styles.number,
            ]}>
            58
          </Text>
        </View>
        <View style={styles.view}>
          <Text
            style={[
              {
                color: '#f85f6a',
              },
              styles.number,
            ]}>
            36
          </Text>
        </View>
        <View style={styles.view}>
          <Text
            style={[
              styles.number,
              {
                color: '#5f6af8',
                fontSize: 13,
              },
            ]}>
            2758505
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Disti to AWP Units</Text>
        <Text style={styles.text}>AWP to T3 Units</Text>
        <Text style={styles.text}>Unique T3</Text>
        <Text style={styles.text}>Revenue</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  view: {
    flex: 1,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#3894ff',
  },
  number: {
    textAlign: 'center',
    margin: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    margin: 6,
  },
});
