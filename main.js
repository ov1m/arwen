import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Arwen from './src/Arwen';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Arwen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
