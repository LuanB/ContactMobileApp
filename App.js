import React, { Component } from 'react';
import Expo from 'expo';
import { ActivityIndicator } from 'react-native';
import MainScreen from './screens/HomeScreen/index.js';
import * as Font from 'expo-font';
export default class App extends Component {
  state = {
    isReady: false
  };

  componentWillMount = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf')
    });
    this.setState({ isReady: true });
  };

  render() {
    if (!this.state.isReady) {
      return <ActivityIndicator />;
    }
    return <MainScreen />;
  }
}
