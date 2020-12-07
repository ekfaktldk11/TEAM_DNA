import React from 'react';
import Colors from '../constants/colors';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import GameOverScreen from '../screens/GameOverScreen';
import HomeScreen from '../screens/HomeScreen';
import DisplayPostScreen from '../screens/DisplayPostScreen';
import MySaleScreen from '../screens/MySaleScreen';
import makePostScreen from '../screens/makePostScreen';

const defaultstackNavOptions = {
    defaultstackNavOptions:{
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
};

const SysNavigator = createStackNavigator(
    {
        Home : HomeScreen,
        DisplayPost : DisplayPostScreen,
        MySale : MySaleScreen,
        makePost : makePostScreen
    },
    {
        defaultNavigationOptions: defaultstackNavOptions
    }
);

export default createAppContainer(SysNavigator);