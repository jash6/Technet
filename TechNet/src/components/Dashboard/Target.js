import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Target() {
  const [target, Settarget] = useState(120);
  const [current, Setcurrent] = useState(60);
  const [qtr, Setqtr] = useState('Select QTR');
  const [modalVisible, setModalVisible] = useState(false);
  const list = ['1', '2', '3', '4'];
  const percent = (current / target) * 100;
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 2}}>
          <Text style={styles.text}>Target v/s Achievement</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            width: 140,
            height: 25,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 1,
              borderTopLeftRadius: 3,
              borderBottomLeftRadius: 3,
              borderRightWidth: 0,
              backgroundColor: 'white',
              height: 25,
              flex: 0.75,
              justifyContent: 'center',
            }}>
            <Text
              style={{alignItems: 'center', textAlign: 'center', fontSize: 15}}>
              {qtr}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              backgroundColor: '#e5e5e5',
              flex: 0.15,
              borderTopRightRadius: 3,
              borderBottomRightRadius: 3,
              borderLeftWidth: 0,
              alignItems: 'center',
            }}
            onPress={() => {}}>
            <Ionicons name="ios-caret-down" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.text1}>Target: {target}</Text>
        <View style={styles.container}>
          <Ionicons name="trophy-sharp" size={23} />
          <Text style={styles.text2}>{current}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.progressbar}>
            <View style={styles.progress} />
          </View>
          <Text style={{fontSize: 16, marginTop: 7}}>{percent}%</Text>
        </View>
        <TouchableOpacity style={styles.text3}>
          <Text
            style={{
              color: '#70b4ff',
              margin: 10,
              fontSize: 13,
              fontWeight: '600',
            }}>
            See More
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 15,
    fontWeight: '700',
    color: '#444444',
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
  text3: {
    alignItems: 'flex-end',
  },
  container: {
    marginLeft: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
  box: {
    // height: 110,
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
