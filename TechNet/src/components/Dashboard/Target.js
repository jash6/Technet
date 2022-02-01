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
import DropDownPicker from 'react-native-dropdown-picker';
import Filters from '../Claim/Filters';

export default function Target({navigation}) {
  const [target, Settarget] = useState(120);
  const [current, Setcurrent] = useState(60);
  const [qtr, Setqtr] = useState('Select QTR');
  const [modalVisible, setModalVisible] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
  ]);

  const list = ['1', '2', '3', '4'];
  const percent = (current / target) * 100;
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.text}>Target v/s Achievement</Text>
        </View>

        {/* <Filters
          placeholder={'Set QTR'}
          array={['1', '2', '3', '4']}
          width={140}
        /> */}
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select QTR"
          style={styles.drop}
          dropDownContainerStyle={styles.box1}
          listItemLabelStyle={styles.item}
          closeOnBackPressed={true}
          showTickIcon={false}
        />
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
        <TouchableOpacity
          style={styles.text3}
          onPress={() => navigation.navigate('Target')}>
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

  drop: {
    width: '31%',
    height: 30,
    borderRadius: 3,
    marginLeft: '18%',
    marginTop: '2%',
  },
  box1: {
    // width: 10,
    width: '6%',
    marginTop: 6,
    marginLeft: '18%',
  },
  item: {
    textAlign: 'center',
  },
});
