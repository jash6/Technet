import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Header from '../components/Header';
import Scroll from '../components/Target/Scroll';

export default function More() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
  ]);
  return (
    <View>
      <Header name={'Target V/S Achievement'} />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="AES"
        style={styles.drop}
        dropDownContainerStyle={styles.box}
        listItemLabelStyle={styles.item}
        closeOnBackPressed={true}
        showTickIcon={false}
      />
      <View style={styles.back}>
        <ScrollView style={styles.scroll}>
          <Scroll name={'Andhra Pradesh'} no={'267/300'} />
          <Scroll name={'Pune'} no={'267/300'} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  back: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 3,
    height: '72%',
  },
  drop: {
    width: 150,
    height: 30,
    borderRadius: 3,
    marginLeft: '60%',
    marginTop: 10,
  },
  box: {
    width: 110,
    marginLeft: '60%',
    marginTop: 10,
  },
  item: {
    textAlign: 'center',
  },
  text: {
    // marginTop: 20,
    marginLeft: '58%',
    color: 'grey',
    fontWeight: 'bold',
  },
  text1: {
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },

  scroll: {
    marginTop: 10,
    borderWidth: 1,
  },
  back: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 3,
    height: '77%',
  },
});
