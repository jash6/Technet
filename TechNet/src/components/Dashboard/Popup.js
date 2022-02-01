import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CalendarPicker from 'react-native-calendar-picker';
export default function Popup(props) {
  //   const [selectedStartDate, SetselectedStartDate] = useState(null);
  //   const [selectedEndDate, SetselectedEndDate] = useState(null);

  //   const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  //   const endDate = selectedEndDate ? selectedEndDate.toString() : '';

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      props.SetselectedEndDate(date);
    } else {
      props.SetselectedStartDate(date);
    }
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={props.onClose}>
            <MaterialIcons name="close" style={{color: 'black'}} size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <CalendarPicker
            allowRangeSelection={true}
            todayBackgroundColor="#f2e6ff"
            selectedDayColor="#7300e6"
            selectedDayTextColor="#FFFFFF"
            onDateChange={onDateChange}
          />
        </View>
        {/* <View>
          <Text>SELECTED START DATE:{startDate}</Text>
          <Text>SELECTED END DATE:{endDate}</Text>
        </View> */}
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
  icon: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
});
