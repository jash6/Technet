import React from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';
import Toggle from '../components/Demo/Toggle';
export default function Demo() {
  return (
    <View>
      <Header name="Demo Program" />
      <Toggle />
    </View>
  );
}
