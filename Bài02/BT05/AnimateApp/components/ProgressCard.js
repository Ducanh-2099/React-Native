
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function ProgressCard({
  progress,
  started,
  completed,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Tiến độ học tập
        </Text>

        <Text style={styles.icon}>
          📈
        </Text>
      </View>

      <Text style={styles.percentage}>
        {progress}%
      </Text>

      <Text style={styles.description}>
        {completed
          ? 'Bạn đã đạt được mục tiêu!'
          : started
          ? 'Bạn đang tiến bộ rất tốt!'
          : 'Hãy bắt đầu hành trình của bạn!'}
      </Text>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            { width: `${progress}%` },
          ]}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {progress === 0
            ? 'Chưa bắt đầu'
            : progress === 50
            ? 'Đang thực hiện'
            : 'Hoàn thành'}
        </Text>

        <Text style={styles.footerText}>
          {progress}/100
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#172033',
    borderRadius: 20,
    padding: 22,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: '#F8FAFC',
    fontSize: 17,
    fontWeight: 'bold',
  },

  icon: {
    fontSize: 25,
  },

  percentage: {
    color: '#34D399',
    fontSize: 43,
    fontWeight: 'bold',
    marginTop: 20,
  },

  description: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 5,
    marginBottom: 20,
  },

  progressBackground: {
    height: 12,
    backgroundColor: '#334155',
    borderRadius: 20,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#34D399',
    borderRadius: 20,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  footerText: {
    color: '#94A3B8',
    fontSize: 12,
  },
});
