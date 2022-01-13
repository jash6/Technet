import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
export default function Dropdowns() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);
  const [value5, setValue5] = useState(null);
  const [items, setItems] = useState([
    {label: 'ID3', value: 'Small'},
    {label: 'Medium', value: 'Large'},
  ]);
  const [qtr, setQtr] = useState([
    {label: '1', value: '3'},
    {label: '2', value: '4'},
  ]);
  const [month, setMonth] = useState([
    {label: 'January', value: '1'},
    {label: 'Febuary', value: '2'},
    {label: 'March', value: '3'},
    {label: 'April', value: '4'},
    {label: 'May', value: '5'},
    {label: 'June', value: '6'},
    {label: 'July', value: '7'},
    {label: 'August', value: '8'},
    {label: 'September', value: '9'},
    {label: 'October', value: '10'},
    {label: 'November', value: '11'},
    {label: 'December', value: '12'},
  ]);
  return (
    <View>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <DropDownPicker
            style={styles.row1}
            placeholder="Partner Type"
            placeholderStyle={styles.placeholder}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
        <View style={{flex: 1}}>
          <DropDownPicker
            style={styles.row1}
            placeholder="Select QTR"
            placeholderStyle={styles.placeholder}
            open={open1}
            value={value1}
            items={qtr}
            setOpen={setOpen1}
            setValue={setValue1}
            setItems={setQtr}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <DropDownPicker
            style={styles.row1}
            placeholder="Start Month"
            placeholderStyle={styles.placeholder}
            open={open2}
            value={value2}
            items={month}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setMonth}
          />
        </View>
        <View style={{flex: 1}}>
          <DropDownPicker
            style={styles.row1}
            placeholder="End Month"
            placeholderStyle={styles.placeholder}
            open={open3}
            value={value3}
            items={month}
            setOpen={setOpen3}
            setValue={setValue3}
            setItems={setMonth}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <DropDownPicker
            style={styles.row2}
            placeholder="Claim Code"
            placeholderStyle={styles.placeholder}
            open={open4}
            value={value4}
            items={qtr}
            setOpen={setOpen4}
            setValue={setValue4}
            setItems={setItems}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <DropDownPicker
            style={styles.row2}
            placeholder="Application No"
            placeholderStyle={styles.placeholder}
            open={open5}
            value={value5}
            items={qtr}
            setOpen={setOpen5}
            setValue={setValue5}
            setItems={setItems}
          />
        </View>
      </View>
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
