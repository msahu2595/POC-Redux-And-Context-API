import React from 'react';
import UserName from './UserName';
import Redux from './redux';
import {SafeAreaView} from 'react-native';

const App = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: 'white', margin: 16}}>
    <UserName />
    <Redux />
  </SafeAreaView>
);

export default App;
