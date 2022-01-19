import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Circle() {
  return (
    <View>
      {/* Row 1 */}
      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Total</Text>
        </View>

        <View style={styles.text}>
          <Text>Closed App No</Text>
        </View>

        <View style={styles.text}>
          <Text>In Process</Text>
        </View>
      </View>
      {/* Row 2 */}

      <View style={styles.row}>
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
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,

    borderWidth: 5,
  },
  text: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 5,
  },
  adjust: {
    flex: 1,
    alignItems: 'center',
  },
  val: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
