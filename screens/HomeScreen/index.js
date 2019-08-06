import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Import screens
import HomeScreen from '../HomeScreen';
import AddNewContactScreen from '../AddNewContactScreen';
import EditContactScreen from '../EditContactScreen';
import ViewContactScreen from '../ViewContactScreen';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContactScreen },
    View: { screen: ViewContactScreen },
    Edit: { screen: EditContactScreen }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#b83227'
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

const MainScreen = createAppContainer(MainNavigator);
export default MainScreen;
