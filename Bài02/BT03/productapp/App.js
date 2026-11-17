import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import Header from './components/Header';
import ProductList from './components/ProductList';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0B1120"
      />

      <View style={styles.container}>
        <Header />
        <ProductList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0B1120',
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
