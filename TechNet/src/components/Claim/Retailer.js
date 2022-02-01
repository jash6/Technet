import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Scroll from './Scroll';
import Filters from './Filters';
import Circle from './Circle';
import DropDownPicker from 'react-native-dropdown-picker';
export default function Retailer() {
  const [clickeditem, setClickedItem] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items, setItems] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
  ]);
  const [items1, setItems1] = useState([
    {label: 'Large', value: 'Large'},
    {label: 'SME', value: 'SME'},
    {label: 'Government', value: 'Government'},
  ]);

  return (
    <View>
      <View style={{marginBottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <DropDownPicker
              open={open1}
              value={value1}
              items={items1}
              setOpen={setOpen1}
              setValue={setValue1}
              setItems={setItems1}
              placeholder="Activation Scheme"
              style={styles.drop1}
              dropDownContainerStyle={styles.box1}
              listItemLabelStyle={styles.item}
              closeOnBackPressed={true}
              showTickIcon={false}
            />
          </View>
          <View style={{flex: 1}}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Select QTR"
              style={styles.drop2}
              dropDownContainerStyle={styles.box2}
              listItemLabelStyle={styles.item}
              closeOnBackPressed={true}
              showTickIcon={false}
            />
          </View>
        </View>
      </View>
      {/* <View style={{marginLeft: 15, flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 1}}>
          <Filters
            placeholder={'Start Month'}
            array={[
              'January',
              'Febuary',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ]}
            width={160}
          />
        </View>
        <View style={{flex: 1, marginLeft: 20}}>
          <Filters
            placeholder={'End Month'}
            array={[
              'January',
              'Febuary',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ]}
            width={160}
          />
        </View>
      </View> */}
      {/* <View style={{marginLeft: 15, marginTop: 10}}>
        <View>
          <Filters
            placeholder={'Claim Code'}
            array={['Large', 'SME', 'Government']}
            width={370}
          />
        </View>
      </View>
      <View style={{marginLeft: 15, marginTop: 10}}>
        <View>
          <Filters
            placeholder={'Application No'}
            array={['A2T56E', 'JH345R', 'KK0BH']}
            width={370}
          />
        </View>
      </View> */}
      <View style={{marginBottom: 20}}>
        <Circle />
      </View>
      <View style={styles.box}>
        <ScrollView style={styles.scroll}>
          {/* <List name={'Chokhani Computers PVT LTD(HO)'} no={'IN232661AT03003'} />
        <List name={'Dotnet(HO)'} no={'IN232661AT03023'} />
        <List name={'Emart 4 u (HO)'} no={'IN232661AR03045'} /> */}
          <Scroll name={'Andhra Pradesh'} no={'15'} />
          <Scroll name={'Pune'} no={'15'} />
          <Scroll name={'Job'} no={'15'} />
          <Scroll name={'Gujarat'} no={'15'} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'white',
    height: '59%',
  },
  scroll: {
    // marginTop: 20,
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

  drop1: {
    width: '90%',
    marginLeft: 15,
    height: 30,
    borderRadius: 3,
    marginTop: '2%',
  },
  box1: {
    width: '90%',
    marginTop: 4,
    marginLeft: 15,
  },
  drop2: {
    width: '70%',
    marginLeft: 40,
    height: 30,
    borderRadius: 3,
    marginTop: '2%',
  },
  box2: {
    width: '70%',
    marginTop: 4,
    marginLeft: 40,
  },
  item: {
    textAlign: 'center',
  },
});
