
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { task } = route.params;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>
            {task.icon}
          </Text>
        </View>

        <Text style={styles.name}>
          {task.name}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.label}>
          Danh mục
        </Text>

        <Text style={styles.value}>
          {task.category}
        </Text>

        <Text style={styles.label}>
          Hạn hoàn thành
        </Text>

        <Text style={styles.value}>
          {task.deadline}
        </Text>

        <Text style={styles.label}>
          Mức độ ưu tiên
        </Text>

        <Text
          style={[
            styles.priority,
            task.priority === 'Cao'
              ? styles.high
              : task.priority === 'Trung bình'
              ? styles.medium
              : styles.low,
          ]}
        >
          {task.priority}
        </Text>

        <Text style={styles.label}>
          Mô tả công việc
        </Text>

        <Text style={styles.description}>
          {task.description}
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          ← Quay lại danh sách
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1120',
  },

  content: {
    padding: 20,
    paddingBottom: 35,
  },

  card: {
    backgroundColor: '#172033',
    borderRadius: 18,
    padding: 22,
  },

  iconBox: {
    width: 75,
    height: 75,
    borderRadius: 18,
    backgroundColor: '#202D42',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  icon: {
    fontSize: 38,
  },

  name: {
    color: '#F8FAFC',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },

  divider: {
    height: 1,
    backgroundColor: '#334155',
    marginVertical: 22,
  },

  label: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 17,
  },

  value: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 7,
  },

  priority: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 7,
  },

  high: {
    color: '#F87171',
  },

  medium: {
    color: '#FBBF24',
  },

  low: {
    color: '#34D399',
  },

  description: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 23,
    marginTop: 7,
  },

  button: {
    backgroundColor: '#34D399',
    padding: 16,
    borderRadius: 12,
    marginTop: 22,
    alignItems: 'center',
  },

  buttonText: {
    color: '#0B1120',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
