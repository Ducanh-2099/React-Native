
import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import GameCard from './GameCard';
import theme from '../Theme';

export default function HomeScreen({
  games,
  onSelectGame,
  onDelete,
}) {
  // Lấy 3 game mới được thêm gần đây
  const recentGames = [...games].reverse().slice(0, 3);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      {/* Banner chào mừng */}
      <View style={styles.banner}>
        <Text style={styles.welcome}>
          WELCOME TO
        </Text>

        <Text style={styles.title}>
          GAME LIBRARY 🎮
        </Text>

        <Text style={styles.subtitle}>
          Khám phá và quản lý thế giới game của bạn.
        </Text>
      </View>

      {/* Thống kê số lượng game */}
      <View style={styles.statBox}>
        <Text style={styles.statNumber}>
          {games.length}
        </Text>

        <Text style={styles.statLabel}>
          Tổng số trò chơi
        </Text>
      </View>

      {/* Danh sách game mới */}
      <Text style={styles.heading}>
        🎮 Game mới thêm
      </Text>

      {recentGames.length === 0 ? (
        <Text style={styles.empty}>
          Chưa có game nào trong thư viện.
        </Text>
      ) : (
        recentGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onPress={() => onSelectGame(game)}
            onDelete={onDelete}
          />
        ))
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },

  content: {
    padding: 15,
    paddingBottom: 30,
  },

  banner: {
    backgroundColor: theme.card,
    padding: 22,
    borderRadius: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: theme.primary,
  },

  welcome: {
    color: theme.primary,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  title: {
    color: theme.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },

  subtitle: {
    color: theme.textSecondary,
    marginTop: 8,
    lineHeight: 21,
  },

  statBox: {
    backgroundColor: theme.card,
    padding: 20,
    borderRadius: 14,
    marginBottom: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.border,
  },

  statNumber: {
    color: theme.primary,
    fontSize: 36,
    fontWeight: 'bold',
  },

  statLabel: {
    color: theme.textSecondary,
    marginTop: 4,
  },

  heading: {
    color: theme.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 14,
  },

  empty: {
    color: theme.textSecondary,
    textAlign: 'center',
    marginTop: 20,
  },
});
