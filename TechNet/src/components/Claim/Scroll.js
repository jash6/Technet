import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Popup from './Popup';

export default function Scroll(props) {
  const [clicked, setClicked] = useState(false);
  const [clickedeye, setClickedeye] = useState(false);
  const [see, setSee] = useState(false);
  const companies = [
    {Name: 'Rajesh Computers', Amount: '250000', Status: 'Closed'},
    {Name: 'Ace Computers', Amount: '3200', Status: 'In Process'},
  ];

  return (
    <View style={styles.tile}>
      {clicked ? (
        <View>
          <View style={styles.align}>
            <Text style={[styles.title, styles.common]}>{props.name}</Text>
            <View style={styles.align}>
              <Text style={[styles.text1, {marginTop: 5, marginLeft: 0}]}>
                Total closed:
              </Text>
              <Text style={[styles.text2, {marginTop: 5, marginLeft: 0}]}>
                {props.no}/30
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setClicked(false);
              }}
              style={styles.icon}>
              <MaterialIcons
                name="keyboard-arrow-down"
                style={{color: 'black'}}
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.common}>
            <View style={styles.trow1}>
              <View
                style={{
                  flex: 2,
                  borderRightWidth: 1,
                  justifyContent: 'center',
                }}>
                <Text style={styles.ttext}>Name</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  borderRightWidth: 1,
                  justifyContent: 'center',
                }}>
                <Text style={styles.ttext}>Amount</Text>
              </View>
              <View
                style={{
                  flex: 1.2,
                  borderRightWidth: 1,
                  justifyContent: 'center',
                }}>
                <Text style={styles.ttext}>Status</Text>
              </View>
              <View style={{flex: 1, borderRightWidth: 0}}>
                <Text></Text>
              </View>
            </View>
            {companies.map(x => (
              <View style={[styles.align, {borderWidth: 1, borderTopWidth: 0}]}>
                <View
                  style={{
                    flex: 2,
                    borderRightWidth: 1,
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.ttext1}>{x.Name}</Text>
                </View>
                <View
                  style={{
                    flex: 2,
                    borderRightWidth: 1,
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.ttext1}>{x.Amount}</Text>
                </View>
                <View
                  style={{
                    flex: 1.2,
                    borderRightWidth: 1,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={[
                      styles.ttext1,
                      {
                        fontWeight: 'bold',
                        color: x.Status == 'Closed' ? '#7fe1ad' : '#70b4ff',
                      },
                    ]}>
                    {x.Status}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    borderRightWidth: 0,
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setClickedeye(true);
                    }}
                    style={styles.icon2}>
                    <MaterialIcons
                      name="remove-red-eye"
                      style={{color: 'black'}}
                      size={25}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <Modal
              //   animationType="slide"
              transparent={true}
              visible={clickedeye}>
              <Popup
                onClose={() => setClickedeye(false)}
                name={'Rajesh Computer'}
                no={'IN232661AT03003'}
              />
            </Modal>
          </View>
          <View style={styles.row3}>
            <TouchableOpacity
              onPress={() => {
                console.log('clicked');
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  margin: 7,
                  fontWeight: '600',
                  color: '#70b4ff',
                }}>
                See More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.align}>
          <View style={{flex: 1}}>
            <Text style={[styles.title, styles.common]}>{props.name}</Text>
            <View style={styles.align}>
              <Text style={styles.text1}>Total closed: </Text>
              <Text style={styles.text2}>{props.no}/30</Text>
            </View>
          </View>
          <View style={styles.icon1}>
            <TouchableOpacity
              onPress={() => {
                setClicked(true);
              }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                style={{color: 'black'}}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  common: {
    marginLeft: 10,
    marginRight: 10,
  },
  align: {
    flexDirection: 'row',
  },
  tile: {
    borderBottomWidth: 1,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 17,
    // marginLeft: 5,
    marginTop: 5,
    color: '#000',
  },
  text1: {
    color: 'grey',
    marginLeft: 5,
    fontSize: 17,
    marginBottom: 7,
  },
  text2: {
    color: 'grey',
    marginLeft: 5,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  icon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icon1: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icon2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trow1: {
    flexDirection: 'row',
    backgroundColor: '#e5e5e5',
    height: 45,
    borderWidth: 1,
  },
  ttext: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  ttext1: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    color: 'black',
    borderRightWidth: 1,
  },
});
