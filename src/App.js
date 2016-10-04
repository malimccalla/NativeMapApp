import React from 'react';
import { View } from 'react-native';
import Map from './components/Map';
import Header from './components/Header';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText="Map App" />
      <Map />
    </View>
  );
};

export default App;
