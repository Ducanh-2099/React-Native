
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.greeting}>
        XIN CHÀO! 👋
      </Text>

      <Text style={styles.title}>
        Chào mừng đến với MyTasks
      </Text>

      <Text style={styles.subtitle}>
        Hôm nay bạn có kế hoạch gì?
      </Text>

      <View style={styles.banner}>
        <Text style={styles.bannerSmall}>
          MY PERSONAL SPACE
        </Text>

        <Text style={styles.bannerTitle}>
          QUẢN LÝ CÔNG VIỆC
        </Text>

        <Text style={styles.bannerDescription}>
          Sắp xếp công việc, quản lý thời gian
          và hoàn thành mục tiêu mỗi ngày.
        </Text>

        <Text style={styles.bannerIcon}>
          📋
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Tổng quan công việc
      </Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>📝</Text>
          <Text style={styles.statNumber}>08</Text>
          <Text style={styles.statLabel}>
            Tổng công việc
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>✅</Text>
          <Text style={styles.statNumber}>05</Text>
          <Text style={styles.statLabel}>
            Đã hoàn thành
          </Text>
        </View>
      </View>

      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>
          💡 Gợi ý hôm nay
        </Text>

        <Text style={styles.tipText}>
          Hãy bắt đầu từ công việc quan trọng
          nhất để sử dụng thời gian hiệu quả.
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.buttonText}>
          Xem danh sách công việc →
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

  greeting: {
    color: '#34D399',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 10,
  },

  title: {
    color: '#F8FAFC',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },

  subtitle: {
    color: '#94A3B8',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 25,
  },

  banner: {
    backgroundColor: '#172033',
    borderRadius: 20,
    padding: 22,
    marginBottom: 28,
  },

  bannerSmall: {
    color: '#34D399',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 12,
  },

  bannerDescription: {
    color: '#94A3B8',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 10,
    width: '85%',
  },

  bannerIcon: {
    fontSize: 40,
    position: 'absolute',
    right: 18,
    bottom: 20,
  },

  sectionTitle: {
    color: '#F8FAFC',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  statsContainer: {
    flexDirection: 'row',
    gap: 12,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#172033',
    borderRadius: 16,
    padding: 18,
  },

  statIcon: {
    fontSize: 25,
  },

  statNumber: {
    color: '#34D399',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },

  statLabel: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 5,
  },

  tipCard: {
    backgroundColor: '#202D42',
    padding: 18,
    borderRadius: 15,
    marginTop: 20,
  },

  tipTitle: {
    color: '#FBBF24',
    fontSize: 16,
    fontWeight: 'bold',
  },

  tipText: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
  },

  button: {
    backgroundColor: '#34D399',
    padding: 17,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 25,
  },

  buttonText: {
    color: '#0B1120',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
