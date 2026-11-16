import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CourseCard({
  icon,
  title,
  teacher,
  progress,
  color,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={[styles.iconBox, { backgroundColor: color }]}>
          <Text style={styles.icon}>{icon}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.teacher}>{teacher}</Text>
        </View>

        <Text style={styles.percent}>{progress}%</Text>
      </View>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressBar,
            { width: `${progress}%` },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#252525',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 23,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  teacher: {
    color: '#999999',
    fontSize: 12,
    marginTop: 5,
  },
  percent: {
    color: '#B6FF4A',
    fontWeight: 'bold',
  },
  progressBackground: {
    height: 6,
    backgroundColor: '#444444',
    borderRadius: 5,
    marginTop: 16,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#B6FF4A',
    borderRadius: 5,
  },
});
