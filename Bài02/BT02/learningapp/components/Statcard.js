import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function StatCard({ icon, number, title }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>

      <Text style={styles.number}>{number}</Text>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#252525',
    padding: 12,
    borderRadius: 16,
    marginRight: 10,
    minHeight: 125,
  },

  icon: {
    fontSize: 23,
    marginBottom: 10,
  },

  number: {
    color: '#B6FF4A',
    fontSize: 25,
    fontWeight: 'bold',
  },

  title: {
    color: '#AAAAAA',
    fontSize: 12,
    marginTop: 5,
  },
});
