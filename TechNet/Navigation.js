import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './screens/../src/screens/Dashboard';
import Claim from './screens/../src/screens/Claim';
import Demo from './screens/../src/screens/Demo';
import Account from './screens/../src/screens/Account';
import More from './screens/../src/screens/More';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RootNavigation() {
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Dashboard') {
              iconName = 'stream';
              size = focused ? 25 : 20;
              color = focused ? '#037aff' : '#555';
            } else if (route.name === 'Demo') {
              iconName = 'laptop';
              size = focused ? 25 : 20;
              color = focused ? '#037aff' : '#555';
            } else if (route.name === 'Claim') {
              iconName = 'tag';
              size = focused ? 25 : 20;
              color = focused ? '#037aff' : '#555';
            } else if (route.name === 'Account') {
              iconName = 'user';
              size = focused ? 25 : 20;
              color = focused ? '#037aff' : '#555';
            } else if (route.name === 'More') {
              iconName = 'list';
              size = focused ? 25 : 20;
              color = focused ? '#037aff' : '#555';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: '#037aff',
          inactiveTintColor: '#555',
        }}>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Demo" component={Demo} />
        <Tab.Screen name="Claim" component={Claim} />
        <Tab.Screen name="Account" component={Account} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
