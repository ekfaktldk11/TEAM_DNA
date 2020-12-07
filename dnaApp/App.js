import React, {useState} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Header from './components/Header';
import SysNavigator from './navigation/SysNavigator';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="NTS SYSTEM by DNA"/>
      <SysNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
  }
});