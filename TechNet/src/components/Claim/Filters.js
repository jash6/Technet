import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Filters(props) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(props.placeholder);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          width: props.width,
          height: 30,
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 1,
            borderTopLeftRadius: 3,
            borderBottomLeftRadius: 3,
            borderRightWidth: 0,
            backgroundColor: 'white',
            height: 30,
            flex: 0.75,
            justifyContent: 'center',
          }}>
          <Text style={{alignItems: 'center', padding: 5, fontSize: 15}}>
            {item}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            backgroundColor: '#e5e5e5',
            flex: 0.15,
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3,
            borderLeftWidth: 0,
            alignItems: 'center',
          }}
          onPress={() => {
            if (open) {
              setOpen(false);
            } else {
              setOpen(true);
            }
          }}>
          {open ? (
            <Ionicons name="ios-caret-up" size={20} />
          ) : (
            <Ionicons name="ios-caret-down" size={20} />
          )}
        </TouchableOpacity>
      </View>
      {open ? (
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
      ) : (
        <></>
      )}
    </View>
  );
}
