import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Filters(props) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(props.placeholder);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.container,
          {
            width: props.width,
            marginTop: props.margint,
            marginBottom: props.marginb,
            marginLeft: props.marginl,
            marginRight: props.marginr,
          },
        ]}
        onPress={toggle}>
        <View style={[styles.box1, {width: props.width - 22}]}>
          <Text style={{alignItems: 'center', padding: 5, fontSize: 14}}>
            {item}
          </Text>
        </View>
        <View style={styles.box2}>
          {open ? (
            <Ionicons name="ios-caret-up" size={20} />
          ) : (
            <Ionicons name="ios-caret-down" size={20} />
          )}
        </View>
      </TouchableOpacity>
      <Modal transparent={true} visible={open}>
        <View
          style={{
            width: props.width > 200 ? props.width - 35 : props.width - 15,
          }}>
          {props.array.map(x => (
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderRadius: 2,
              }}
              onPress={() => {
                setItem(x);
              }}>
              <Text style={{textAlign: 'center'}}>{x}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 3,
    height: 30,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  box1: {},
  box2: {
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: 'grey',
  },
});
