import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
// import Scroll from '../../Claim/Scroll';
import Scroll from './Scroll';
import Filter from '../../Filter';

export default function Section3() {
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
      <View style={styles.back}>
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
        <View>
          <Text style={styles.text}>Compulsory: 20</Text>
        </View>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <Text style={[styles.text1, {marginLeft: 10}]}>
              Partner Count: 157
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={[styles.text1, {marginLeft: 30}]}>
              Total: 600/3120
            </Text>
          </View>
        </View>

        <ScrollView style={styles.scroll}>
          <Scroll name={'Andhra Pradesh'} pc={'8'} exe={'32/60'} />
          <Scroll name={'Pune'} pc={'9'} exe={'60/180'} />
          <Scroll name={'Job'} pc={'12'} exe={'180/240'} />
          <Scroll name={'Gujarat'} pc={'15'} exe={'180/240'} />
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
    width: 110,
    height: 30,
    borderRadius: 3,
    marginLeft: 10,
    marginTop: 10,
  },
  box: {
    width: 110,
    marginLeft: 10,
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
    // height: '2%',
    // height: 20,
  },
});
