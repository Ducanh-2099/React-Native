
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import GameList from './GameList';
import theme from '../Theme';

export default function SearchGames({
  games = [],
  onSelectGame,
  onDelete,
}) {
  const [keyword, setKeyword] = useState('');

  // Lọc game theo tên
  const filteredGames = games.filter((game) =>
    game.title
      .toLowerCase()
      .includes(keyword.trim().toLowerCase())
  );

  return (
    <View style={styles.container}>

      {/* Tiêu đề */}
      <Text style={styles.heading}>
        🔎 Tìm kiếm game
      </Text>

      <Text style={styles.subtitle}>
        Tìm trò chơi yêu thích trong thư viện của bạn
      </Text>

      {/* Ô tìm kiếm */}
      <TextInput
        style={styles.input}
        placeholder="Nhập tên game cần tìm..."
        placeholderTextColor={theme.textSecondary}
        value={keyword}
        onChangeText={setKeyword}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />

      {/* Kết quả tìm kiếm */}
      <View style={styles.resultHeader}>
        <Text style={styles.resultText}>
          Kết quả tìm kiếm: {filteredGames.length} game
        </Text>
      </View>

      {/* Danh sách game */}
      <View style={styles.listContainer}>
        {filteredGames.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyIcon}>🔍</Text>

            <Text style={styles.emptyText}>
              Không tìm thấy game!
            </Text>

            <Text style={styles.emptyDescription}>
              Hãy thử nhập tên trò chơi khác.
            </Text>
          </View>
        ) : (
          <GameList
            games={filteredGames}
            onSelectGame={onSelectGame}
            onDelete={onDelete}
          />
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    padding: 15,
  },

  heading: {
    color: theme.primary,
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  subtitle: {
    color: theme.textSecondary,
    fontSize: 13,
    marginBottom: 18,
  },

  input: {
    backgroundColor: theme.card,
    color: theme.text,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.primary,
    fontSize: 15,
  },

  resultHeader: {
    marginTop: 18,
    marginBottom: 12,
  },

  resultText: {
    color: theme.textSecondary,
    fontSize: 14,
    fontWeight: '600',
  },

  listContainer: {
    flex: 1,
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
    fontSize: 38,
    marginBottom: 12,
  },

  emptyText: {
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
