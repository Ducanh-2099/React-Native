
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Header from './components/Header';
import StatCard from './components/Statcard';
import CourseCard from './components/CourseCard';
import BottomMenu from './components/BottomMenu';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
      
        <Header />
        <Text style={styles.heading}>
          Tổng quan học tập
        </Text>

        <View style={styles.statContainer}>
          <StatCard
            icon="📚"
            number="08"
            title="Khóa học"
          />

          <StatCard
            icon="✅"
            number="05"
            title="Hoàn thành"
          />

          <StatCard
            icon="⏳"
            number="03"
            title="Đang học"
          />
        </View>
        <View style={styles.courseHeading}>
          <Text style={styles.heading}>
            Khóa học của tôi
          </Text>

          <Text style={styles.seeAll}>
            Xem tất cả
          </Text>
        </View>

        <CourseCard
          icon="💻"
          title="Lập trình React Native"
          teacher="Nguyễn Văn An"
          progress={75}
          color="#353D2A"
        />

        <CourseCard
          icon="🌐"
          title="Lập trình Web"
          teacher="Trần Văn Bá"
          progress={60}
          color="#30394A"
        />

        <CourseCard
          icon="🗄️"
          title="Cơ sở dữ liệu"
          teacher="Lê Văn Cẩm"
          progress={90}
          color="#45364A"
        />

        <CourseCard
          icon="📱"
          title="Lập trình Android"
          teacher="Phạm Văn Dũng"
          progress={35}
          color="#493D2D"
        />

      </ScrollView>

      <BottomMenu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },

  scrollContent: {
    padding: 20,
    paddingTop: 35,
    paddingBottom: 20,
  },

  heading: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  statContainer: {
    flexDirection: 'row',
    marginBottom: 28,
  },

  courseHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  seeAll: {
    color: '#B6FF4A',
    fontSize: 13,
    marginBottom: 15,
  },
});
