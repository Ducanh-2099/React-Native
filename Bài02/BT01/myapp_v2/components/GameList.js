
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import GameCard from './GameCard';
import theme from '../Theme';

export default function GameList({
  games = [],
  onSelectGame,
  onDelete,
}) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Tiêu đề */}
      <Text style={styles.heading}>
        🎮 Thư viện game
      </Text>

      {/* Số lượng game */}
      <Text style={styles.count}>
        Hiện có {games.length} trò chơi
      </Text>

      {/* Danh sách game */}
      {games.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyIcon}>🎮</Text>

          <Text style={styles.empty}>
            Chưa có game nào!
          </Text>

          <Text style={styles.emptyDescription}>
            Hãy thêm trò chơi mới vào thư viện của bạn.
          </Text>
        </View>
      ) : (
        games.map((game) => (
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
    paddingBottom: 25,
  },

  heading: {
    color: theme.primary,
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  count: {
    color: theme.textSecondary,
    fontSize: 14,
    marginBottom: 20,
  },

  emptyBox: {
    backgroundColor: theme.card,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme.border,
    padding: 30,
    alignItems: 'center',
    marginTop: 10,
  },

  emptyIcon: {
    fontSize: 40,
    marginBottom: 12,
  },

  empty: {
    color: theme.text,
    fontSize: 17,
    fontWeight: 'bold',
  },

  emptyDescription: {
    color: theme.textSecondary,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
  },
});
