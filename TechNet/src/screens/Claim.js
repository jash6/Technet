import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
// import Header from '../components/Claim/Header';
import Toggle from '../components/Claim/Toggle';
import Header from '../components/Header';
export default function Claim() {
  return (
    <View>
      <Header name={'Claim Master'} />
      <Toggle />
    </View>
  );
}
