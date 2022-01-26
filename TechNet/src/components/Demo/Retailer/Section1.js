import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Section1() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
  ]);
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select QTR"
        style={styles.drop}
        dropDownContainerStyle={styles.box}
        listItemLabelStyle={styles.item}
        arrowIconStyle={styles.icon}
        iconContainerStyle={{borderWidth: 3}}
        arrowIconContainerStyle={{backgroundColor: 'grey'}}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  drop: {
    width: 130,
    height: 30,
    borderRadius: 3,
    zIndex: 1,
  },
  box: {
    width: 80,
    zIndex: 1,
  },
  item: {
    textAlign: 'center',
  },
  icon: {
    backgroundColor: 'grey',
  },
});
