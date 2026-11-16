import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
const menus = [
  { id: 'home', icon: '⌂', title: 'Trang chủ' },
  { id: 'course', icon: '▤', title: 'Khóa học' },
  { id: 'schedule', icon: '◷', title: 'Lịch học' },
  { id: 'profile', icon: '●', title: 'Cá nhân' },
];
export default function BottomMenu() {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <View style={styles.container}>
      {menus.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <Pressable
            key={item.id}
            style={styles.item}
            onPress={() => setActiveTab(item.id)}
          >
            <Text
              style={[
                styles.icon,
                isActive && styles.active,
              ]}
            >
              {item.icon}
            </Text>

            <Text
              style={[
                styles.title,
                isActive && styles.active,
              ]}
            >
              {item.title}
            </Text>
          </Pressable>
        );
      })}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#252525',
    paddingVertical: 13,
    borderTopWidth: 1,
    borderTopColor: '#383838',
  },

  item: {
    alignItems: 'center',
    flex: 1,
  },

  icon: {
    color: '#888888',
    fontSize: 23,
  },

  title: {
    color: '#888888',
    fontSize: 11,
    marginTop: 5,
  },

  active: {
    color: '#B6FF4A',
  },
});
