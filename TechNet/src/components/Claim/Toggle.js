import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Reseller from './Reseller';
import Retailer from './Retailer';
export default function Toggle() {
  const Tab1 = createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      <Tab1.Navigator>
        <Tab1.Screen name="Reseller (AWP)" component={Reseller} />
        <Tab1.Screen name="Retail" component={Retailer} />
      </Tab1.Navigator>
    </NavigationContainer>
  );
}
