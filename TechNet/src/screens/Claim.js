import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../components/Claim/Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Reseller from '../components/Claim/Reseller';
import Retailer from '../components/Claim/Retailer';
import Toggle from '../components/Claim/Toggle';
export default function Claim() {
  return (
    <View>
      <Header />
      {/* <Toggle /> */}

      <Retailer />
    </View>
  );
}
