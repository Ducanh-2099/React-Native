import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TECH STORE</Text>
      <Text style={styles.subtitle}>
        Công nghệ trong tầm tay
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#111827',
    borderRadius: 16,
    marginBottom: 20,
  },
  logo: {
    color: '#38BDF8',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 6,
  },
});
