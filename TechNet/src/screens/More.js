import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import Map from '../components/Map';
import Map2 from '../components/Map2';
import Entypo from 'react-native-vector-icons/Entypo';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default function More() {
  const [latdelta, Setlatdelta] = useState(25);
  const [londelta, Setlondelta] = useState(25);
  const [lat, Setlat] = useState(20.5937);
  const [lon, Setlon] = useState(78.9629);
  const dimensions = Dimensions.get('window');
  const customData = require('../../assets/data/Data_Total_Final.json');
  const Logo = require('../../assets/images/shop.jpeg');
  return (
    <View style={styles.container1}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: lat,
          longitude: lon,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
          latitudeDelta: latdelta,
          longitudeDelta: londelta,
        }}>
        {customData.map(x => (
          <Marker
            title={x.Counts.toString()}
            description={`District: ${x.District} Count: ${x.Counts}`}
            coordinate={{
              latitude: x.lat,
              longitude: x.lon,
            }}
            key={x.District}>
            {x.Counts > 10 ? (
              <Entypo name="shop" size={20} color="blue" />
            ) : (
              <Entypo name="shop" size={7} color="blue" />
            )}
          </Marker>
        ))}
      </MapView>
      {/* <Map dimensions={dimensions} /> */}
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
