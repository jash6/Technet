import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
export default function Popup(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
  ]);
  const list = [
    {Name: 'ROG', Code: 'Zephyrus G14', Status: 'Pending', Id: '', date: ''},
    {Name: 'Vivobook', Code: 'X512', Status: 'Pending', Id: '', date: ''},
    {Name: 'ROG', Code: 'ROG DT', Status: 'Pending', Id: '', date: ''},
    {
      Name: 'ROG',
      Code: 'Zephyrus G14',
      Status: 'Done',
      Id: 'M4NRKD02430315C',
      date: '17 Nov 2021',
    },
    {
      Name: 'Vivobook',
      Code: 'X512',
      Status: 'Done',
      Id: 'M4NRKD02430315C',
      date: '17 Nov 2021',
    },
    {
      Name: 'ROG',
      Code: 'ROG DT',
      Status: 'Done',
      Id: 'M4NRKD02430315C',
      date: '17 Nov 2021',
    },
  ];
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={props.onClose}>
            <MaterialIcons name="close" style={{color: 'black'}} size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select Category"
            style={styles.drop}
            dropDownContainerStyle={styles.box}
            listItemLabelStyle={styles.item}
            closeOnBackPressed={true}
            showTickIcon={false}
          />
          <View>
            {list.map((x, i) => (
              <View
                key={i}
                style={[
                  styles.container,
                  {
                    margin: 7,
                    borderBottomWidth: 2,
                    borderBottomColor: 'grey',
                  },
                ]}>
                <View style={{flex: 2}}>
                  <View style={styles.container}>
                    <Text style={styles.text}>{x.Name} </Text>
                    <Text style={styles.text1}>| {x.Code}</Text>
                  </View>
                  <View>
                    <Text style={[styles.text1, {fontSize: 15}]}>{x.Id}</Text>
                  </View>
                </View>
                <View style={{flex: 2, alignItems: 'center'}}>
                  <View>
                    {x.Status === 'Pending' ? (
                      <Text
                        style={{
                          textAlign: 'center',
                          color: '#70b4ff',
                          fontWeight: '500',
                          fontSize: 17,
                        }}>
                        {x.Status}
                      </Text>
                    ) : (
                      <View>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 12,
                            marginBottom: 5,
                            color: 'grey',
                          }}>
                          {x.date}
                        </Text>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: '#7fe1ad',
                            fontWeight: 'bold',
                          }}>
                          {x.Status}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  modalView: {
    width: '95%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 20,
  },
  container: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 10,
  },
  text1: {
    color: 'grey',
    marginBottom: 5,
    marginLeft: 10,
  },
  text2: {
    marginBottom: 7,
    fontSize: 15,
    marginLeft: 10,
  },
  text3: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    color: 'black',
  },
  icon: {
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  drop: {
    width: 170,
    height: 30,
    borderRadius: 3,
    marginLeft: 10,
    marginBottom: 5,
  },
  box: {
    width: 170,
    marginLeft: 10,
  },
  item: {
    textAlign: 'center',
  },
});
