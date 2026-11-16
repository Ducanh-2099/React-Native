
import React from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

import theme from '../Theme';

const tabs = [
  { id: 'home', icon: '⌂', label: 'Trang chủ' },
  { id: 'list', icon: '🎮', label: 'Danh sách' },
  { id: 'search', icon: '⌕', label: 'Tìm kiếm' },
  { id: 'add', icon: '＋', label: 'Thêm game' },
];

export default function TabBar({ activeTab, onChange }) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = activeTab === tab.id;

        return (
          <Pressable
            key={tab.id}
            style={styles.item}
            onPress={() => onChange(tab.id)}
          >
            <View
              style={[
                styles.iconContainer,
                active && styles.activeIconContainer,
              ]}
            >
              <Text
                style={[
                  styles.icon,
                  active && styles.activeText,
                ]}
              >
                {tab.icon}
              </Text>
            </View>

            <Text
              style={[
                styles.label,
                active && styles.activeText,
              ]}
            >
              {tab.label}
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
    backgroundColor: theme.card,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderTopWidth: 1,
    borderTopColor: theme.border,
  },

  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    width: 42,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeIconContainer: {
    backgroundColor: '#303D1B',
  },

  icon: {
    color: theme.textSecondary,
    fontSize: 22,
  },

  label: {
    color: theme.textSecondary,
    fontSize: 10,
    marginTop: 4,
  },

  activeText: {
    color: theme.primary,
    fontWeight: 'bold',
  },
});
