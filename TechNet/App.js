import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RootNavigation from './Navigation';
import Dashboard from './src/screens/Dashboard';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Dashboard /> */}
      <RootNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
});

export default App;
