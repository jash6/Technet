import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../components/Dashboard/Header';
import Target from '../components/Dashboard/Target';
import Performance from '../components/Dashboard/Performance';
import Activation from '../components/Dashboard/Activation';
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <ScrollView>
      {/* Header Section */}
      <Header />
      {/* Target vs Achievement */}
      <Target />
      {/* Activation Performance */}
      <Activation />
      {/* Performance Table */}
      <Performance />
      {/* Footer */}
      {/* <Footer /> */}
    </ScrollView>
  );
}
