import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
export default function Section2() {
  const [metrics, Setmetrics] = useState([true, false]);
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
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
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
          closeOnBackPressed={true}
          showTickIcon={false}
        />
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={metrics[0] ? styles.click : styles.nclicked}
            onPress={() => {
              Setmetrics([true, false]);
            }}>
            <Text style={styles.text}>At least single Demo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={metrics[1] ? styles.click : styles.nclicked}
            onPress={() => {
              Setmetrics([false, true]);
            }}>
            <Text style={styles.text}>100% demo</Text>
          </TouchableOpacity>
        </View>
        <View>{metrics[0] ? <Single /> : metrics[1] ? <Full /> : <></>}</View>
      </View>
    </View>
  );
}

export function Single() {
  return (
    <View>
      <View style={styles.container2}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.view}>
            <Text
              style={[
                {
                  color: '#7fe1ad',
                },
                styles.number,
              ]}>
              250
            </Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.view}>
            <Text
              style={[
                {
                  color: '#5f6af8',
                },
                styles.number,
              ]}>
              477
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text1}>ALP</Text>
        <Text style={styles.text1}>ASP</Text>
      </View>
    </View>
  );
}

export function Full() {
  return (
    <View>
      <View style={styles.container2}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.view}>
            <Text
              style={[
                {
                  color: '#7fe1ad',
                },
                styles.number,
              ]}>
              130
            </Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.view}>
            <Text
              style={[
                {
                  color: '#5f6af8',
                },
                styles.number,
              ]}>
              317
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text1}>ALP</Text>
        <Text style={styles.text1}>ASP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'white',
  },
  click: {
    flex: 1,
    justifyContent: 'center',
    borderBottomColor: '#0076ff',
    borderBottomWidth: 4,
    borderRadius: 5,
    height: 40,
  },
  nclicked: {
    flex: 1,
    justifyContent: 'center',
    height: 40,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container2: {
    flexDirection: 'row',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#3894ff',
  },
  number: {
    textAlign: 'center',
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text1: {
    flex: 1,
    textAlign: 'center',
    margin: 6,
  },
  drop: {
    width: '35%',
    height: 30,
    borderRadius: 3,
    marginLeft: '60%',
  },
  box: {
    width: '10%',
    marginLeft: '60%',
  },
  item: {
    textAlign: 'center',
  },
});
