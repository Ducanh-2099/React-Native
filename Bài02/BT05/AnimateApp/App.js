
import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import ProgressCard from './components/ProgressCard';
import ActionButton from './components/ActionButton';
import AnimatedMessage from './components/AnimatedMessage';

export default function App() {
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  function handleAction() {
    if (completed) {
      // Bắt đầu lại mục tiêu
      setProgress(0);
      setStarted(false);
      setCompleted(false);
    } else if (!started) {
      // Bắt đầu học
      setStarted(true);
      setProgress(50);
    } else {
      // Hoàn thành mục tiêu
      setProgress(100);
      setCompleted(true);
    }
  }

  const buttonTitle = completed
    ? 'Bắt đầu lại'
    : started
    ? 'Hoàn thành mục tiêu'
    : 'Bắt đầu học ngay';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0B1120"
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.logo}>
          ANIMATE APP ✨
        </Text>

        <Text style={styles.heading}>
          Chinh phục mục tiêu
        </Text>

        <Text style={styles.subtitle}>
          Mỗi ngày một bước tiến gần hơn
          đến thành công!
        </Text>

        <View style={styles.profileCard}>
          <Text style={styles.profileIcon}>🎓</Text>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>
              Mục tiêu của tôi
            </Text>

            <Text style={styles.profileDescription}>
              Học tập và phát triển bản thân
            </Text>
          </View>
        </View>

        <ProgressCard
          progress={progress}
          started={started}
          completed={completed}
        />

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            🎯 Mục tiêu hôm nay
          </Text>

          <Text style={styles.infoText}>
            Hoàn thành 2 giờ học React Native
            và thực hành xây dựng ứng dụng.
          </Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>
              Thời gian dự kiến
            </Text>

            <Text style={styles.infoValue}>
              120 phút
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>
              Trạng thái
            </Text>

            <Text style={styles.status}>
              {completed
                ? 'Đã hoàn thành'
                : started
                ? 'Đang thực hiện'
                : 'Chưa bắt đầu'}
            </Text>
          </View>
        </View>

        <ActionButton
          title={buttonTitle}
          onPress={handleAction}
        />

        <AnimatedMessage
          visible={completed}
          title="Tuyệt vời! 🎉"
          description="Bạn đã hoàn thành mục tiêu học tập hôm nay!"
        />

        <Text style={styles.footer}>
          KIÊN TRÌ HÔM NAY - THÀNH CÔNG NGÀY MAI
        </Text>
      </ScrollView>
    </SafeAreaView>
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

  logo: {
    color: '#34D399',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginTop: 15,
  },

  heading: {
    color: '#F8FAFC',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 12,
  },

  subtitle: {
    color: '#94A3B8',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 25,
  },

  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#172033',
    padding: 17,
    borderRadius: 16,
    marginBottom: 20,
  },

  profileIcon: {
    fontSize: 35,
    marginRight: 15,
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  profileDescription: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 5,
  },

  infoCard: {
    backgroundColor: '#172033',
    padding: 20,
    borderRadius: 18,
    marginTop: 20,
  },

  infoTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  infoText: {
    color: '#94A3B8',
    fontSize: 14,
    lineHeight: 22,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },

  infoLabel: {
    color: '#94A3B8',
    fontSize: 13,
  },

  infoValue: {
    color: '#34D399',
    fontWeight: 'bold',
  },

  status: {
    color: '#FBBF24',
    fontSize: 13,
    fontWeight: 'bold',
  },

  footer: {
    color: '#64748B',
    fontSize: 10,
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: 30,
  },
});
