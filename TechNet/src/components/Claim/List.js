import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function List(props) {
  const [clickedb, setClickedb] = useState(false);
  const [remark, onChangeRemark] = useState('');
  const [date, setDate] = useState(new Date());
  const [clicked, Setclicked] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setDate(date);
    hideDatePicker();
  };
  return (
    <View>
      <View style={{borderBottomWidth: 1}}>
        <View style={styles.container}>
          <Text style={[{flex: 1}, styles.text]}>{props.name}</Text>
          <Text style={[{flex: 1, fontSize: 12, marginLeft: 10}, styles.text1]}>
            {props.no}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text1, {flex: 1}]}>
            [NR211007] ALP activation support
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (clickedb) {
                setClickedb(false);
              } else {
                setClickedb(true);
              }
            }}>
            {clickedb ? (
              <MaterialIcons name="keyboard-arrow-down" size={30} />
            ) : (
              <MaterialIcons name="keyboard-arrow-right" size={30} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {clickedb ? (
        <View>
          <View>
            <View style={styles.container}>
              <Text style={styles.text2}>Claim date: </Text>
              <Text style={styles.text}>02/10/2021 -15/10/2021</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.text2}>Claim date: </Text>
              <Text style={styles.text}>EXACT</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.text2}>Case Status: </Text>
              <Text style={styles.text}>CN is passed to Disti</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.container, {flex: 1}]}>
                <Text style={styles.text2}>Pre Tax: </Text>
                <Text style={styles.text}> 105786.00</Text>
              </View>
              <View style={[styles.container, {flex: 1}]}>
                <Text style={styles.text2}>After Tax: </Text>
                <Text style={styles.text}> 124827.48</Text>
              </View>
            </View>
            <View style={{marginLeft: 20}}>
              <TouchableOpacity onPress={showDatePicker}>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 25,
                    marginTop: 7,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderTopLeftRadius: 3,
                      borderBottomLeftRadius: 3,
                      borderRightWidth: 0,
                      flex: 0.8,
                    }}>
                    <Text style={{padding: 2, fontSize: 16}}>
                      CN# Received Date
                    </Text>
                  </View>
                  <View
                    style={{
                      // marginLeft: 5,
                      backgroundColor: '#e5e5e5',
                      borderWidth: 1,
                      borderTopRightRadius: 3,
                      borderBottomRightRadius: 3,
                      borderLeftWidth: 0,
                      flex: 0.1,
                      alignItems: 'center',
                    }}>
                    <MaterialIcons name="date-range" size={23} />
                  </View>
                </View>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
          </View>
          <View style={{borderBottomWidth: 1}}>
            <View style={[styles.container]}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeRemark}
                value={remark}
                placeholder="Remark"
              />
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  marginLeft: 15,
                  backgroundColor: 'green',
                  width: 80,
                  height: 35,
                  borderRadius: 3,
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    marginTop: 5,
                    fontSize: 15,
                  }}>
                  Confirm
                </Text>
              </TouchableOpacity>
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
  row1: {
    backgroundColor: 'white',
    width: 150,
    height: 35,
    marginTop: '10%',
    marginLeft: '10%',
    borderRadius: 4,
  },
  row2: {
    backgroundColor: 'white',
    height: 35,
    marginTop: '5%',
    marginLeft: '5%',
    width: 335,
    borderRadius: 4,
  },
  container: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  placeholder: {
    fontWeight: '600',
  },
  box: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'white',
  },
  scroll: {
    marginTop: 20,
    borderWidth: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  text1: {
    color: 'grey',
    marginBottom: 5,
    marginLeft: 10,
  },
  text2: {
    marginBottom: 7,
    fontSize: 15,
  },
  input: {
    height: 40,
    width: 130,
    margin: 12,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
});
