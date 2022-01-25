import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Target from '../components/Dashboard/Target';
import Performance from '../components/Dashboard/Performance';
import Activation from '../components/Dashboard/Activation';
import Header from '../components/Header';

export default function Dashboard() {
  return (
    <ScrollView>
      {/* Header Section */}
      <Header name="Technet Informa..." />
      {/* Target vs Achievement */}
      <Target />
      {/* Activation Performance */}
      <Activation />
      {/* Performance Table */}
      <Performance />
    </ScrollView>
  );
}
