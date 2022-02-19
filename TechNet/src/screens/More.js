import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';

import Map from '../components/Map';
import Map1 from '../components/Map1';

import MapView, {Geojson} from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default function More() {
  const dimensions = Dimensions.get('window');

  const customData = require('../../assets/data/Data_Final.json');

  return (
    <View style={styles.container1}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 20.5937,
          longitude: 78.9629,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
          latitudeDelta: 25,
          longitudeDelta: 25,
        }}>
        {customData.map(x => (
          <Marker
            title={x.Total}
            coordinate={{
              latitude: x.lat,
              longitude: x.lon,
            }}
            key={x.State}
          />
        ))}
      </MapView>
      {/* <Map dimensions={dimensions} /> */}
      {/* <Map1 /> */}
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
