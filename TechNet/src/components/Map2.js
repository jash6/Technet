import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
export default function Map2(props) {
  const dimensions = Dimensions.get('window');
  const customData = require('../../assets/data/Data_Final.json');
  const Logo = require('../../assets/images/shop.jpeg');
  return (
    <View style={styles.container1}>
      {console.log(props)}
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 20.5937,
          longitude: 78.9629,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {customData.map(x => (
          <Marker
            title={x.Total}
            coordinate={{
              latitude: x.lat,
              longitude: x.lon,
            }}
            key={x.State}
            onPress={e => console.log(e.nativeEvent)}>
            <Entypo name="shop" size={20} color="blue" />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});
