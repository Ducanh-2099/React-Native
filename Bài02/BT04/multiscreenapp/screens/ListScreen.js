
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';

const tasks = [
  {
    id: '1',
    name: 'Hoàn thành bài tập React Native',
    category: 'Học tập',
    deadline: '20/11/2026',
    priority: 'Cao',
    description:
      'Hoàn thiện giao diện và chức năng ứng dụng React Native.',
    icon: '💻',
  },
  {
    id: '2',
    name: 'Ôn tập tiếng Anh',
    category: 'Học tập',
    deadline: '21/11/2026',
    priority: 'Trung bình',
    description:
      'Ôn từ vựng và luyện kỹ năng giao tiếp tiếng Anh.',
    icon: '📚',
  },
  {
    id: '3',
    name: 'Dọn dẹp phòng',
    category: 'Cá nhân',
    deadline: '22/11/2026',
    priority: 'Thấp',
    description:
      'Sắp xếp bàn học và dọn dẹp phòng ngủ.',
    icon: '🧹',
  },
  {
    id: '4',
    name: 'Tập thể dục',
    category: 'Sức khỏe',
    deadline: '23/11/2026',
    priority: 'Trung bình',
    description:
      'Dành 30 phút chạy bộ và vận động.',
    icon: '🏃',
  },
  {
    id: '5',
    name: 'Đọc sách',
    category: 'Cá nhân',
    deadline: '24/11/2026',
    priority: 'Thấp',
    description:
      'Đọc sách phát triển kỹ năng cá nhân.',
    icon: '📖',
  },
  {
    id: '6',
    name: 'Nộp bài tập Node.js',
    category: 'Học tập',
    deadline: '25/11/2026',
    priority: 'Cao',
    description:
      'Kiểm tra code và hoàn thành bài nộp GitHub.',
    icon: '📂',
  },
];

export default function ListScreen({ navigation }) {
  function renderTask({ item }) {
    return (
      <Pressable
        style={styles.card}
        onPress={() =>
          navigation.navigate('Detail', { task: item })
        }
      >
        <View style={styles.iconBox}>
          <Text style={styles.icon}>
            {item.icon}
          </Text>
        </View>

        <View style={styles.taskInfo}>
          <Text style={styles.name}>
            {item.name}
          </Text>

          <Text style={styles.category}>
            Danh mục: {item.category}
          </Text>

          <Text style={styles.deadline}>
            Hạn: {item.deadline}
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Công việc của bạn
      </Text>

      <Text style={styles.subtitle}>
        Chọn một công việc để xem thông tin chi tiết.
      </Text>

      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1120',
    padding: 16,
  },

  heading: {
    color: '#F8FAFC',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 8,
  },

  subtitle: {
    color: '#94A3B8',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 20,
  },

  list: {
    paddingBottom: 25,
  },

  card: {
    backgroundColor: '#172033',
    padding: 15,
    borderRadius: 15,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 48,
    height: 48,
    backgroundColor: '#202D42',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: 24,
  },

  taskInfo: {
    flex: 1,
    marginLeft: 13,
  },

  name: {
    color: '#F8FAFC',
    fontSize: 14,
    fontWeight: 'bold',
  },

  category: {
    color: '#34D399',
    fontSize: 12,
    marginTop: 6,
  },

  deadline: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 5,
  },

  arrow: {
    color: '#34D399',
    fontSize: 28,
    marginLeft: 8,
  },
});
