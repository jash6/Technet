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

export default function Retailer() {
  const [clickeditem, setClickedItem] = useState(false);

  return (
    <View>
      <View style={{marginBottom: 20}}>
        <View style={{marginLeft: 15, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Filters
              placeholder={'Activation Scheme'}
              array={['Large', 'SME', 'Government']}
              width={170}
            />
          </View>
          <View style={{flex: 1, marginLeft: 20}}>
            <Filters
              placeholder={'Set QTR'}
              array={['1', '2', '3', '4']}
              width={170}
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
          <Scroll name={'Gujrat'} no={'15'} />
        </ScrollView>
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
    // marginTop: 20,
    borderWidth: 1,
    height: 320,
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
