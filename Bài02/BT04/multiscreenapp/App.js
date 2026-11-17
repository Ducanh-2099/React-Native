
import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from './Navigation/AppNavigator';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0B1120"
      />

      <AppNavigator />
    </>
  );
}
