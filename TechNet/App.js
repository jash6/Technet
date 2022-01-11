import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Dashboard from './src/screens/Dashboard';

const App = () => {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
  },
});

export default App;
