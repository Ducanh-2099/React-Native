
import React, { useState } from 'react';

import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';
import AddGame from './components/AddGame';
import SearchGames from './components/SearchGames';
import TabBar from './components/TabBar';

import theme from './Theme';

export default function App() {

  // Danh sách game
  const [games, setGames] = useState([
    {
      id: '1',
      title: 'COD: MW4',
      genre: 'FPS',
      year: '2024',
      publisher: 'Activision',
      rating: '9/10',
      description: 'Trò chơi bắn súng hành động.',
      image: null,
    },
    {
      id: '2',
      title: 'Delta Force',
      genre: 'FPS',
      year: '2024',
      publisher: 'TiMi Studio',
      rating: '8/10',
      description: 'Trò chơi chiến thuật quân sự.',
      image: null,
    },
    {
      id: '3',
      title: 'Street Fighter',
      genre: 'Fighting',
      year: '2023',
      publisher: 'Capcom',
      rating: '9/10',
      description: 'Trò chơi đối kháng hấp dẫn.',
      image: null,
    },
  ]);

  // Tab đang được chọn
  const [activeTab, setActiveTab] = useState('home');

  // Game đang được chọn
  const [selectedGame, setSelectedGame] = useState(null);

  // Tab trước khi mở chi tiết
  const [previousTab, setPreviousTab] = useState('home');

  // Danh sách bình luận
  const [comments, setComments] = useState({});

  // Mở chi tiết game
  function openGame(game) {
    setPreviousTab(activeTab);
    setSelectedGame(game);
  }

  // Quay lại màn hình trước
  function closeDetail() {
    setSelectedGame(null);
    setActiveTab(previousTab);
  }

  // Thêm game mới
  function addGame(newGame) {
    const game = {
      ...newGame,
      id: Date.now().toString(),
    };

    setGames((oldGames) => [...oldGames, game]);
    setActiveTab('list');
  }

  // Xóa game
  function deleteGame(id) {
    setGames((oldGames) =>
      oldGames.filter((game) => game.id !== id)
    );

    // Xóa bình luận của game
    setComments((oldComments) => {
      const updated = { ...oldComments };
      delete updated[id];
      return updated;
    });

    setSelectedGame(null);
    setActiveTab('list');
  }

  // Thêm bình luận
  function addComment(gameId, content) {
    const newComment = {
      id: Date.now().toString(),
      content,
    };

    setComments((oldComments) => ({
      ...oldComments,
      [gameId]: [
        ...(oldComments[gameId] || []),
        newComment,
      ],
    }));
  }

  // Lấy dữ liệu game mới nhất
  const currentGame = selectedGame
    ? games.find((game) => game.id === selectedGame.id)
    : null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />

      <View style={styles.content}>

        {currentGame ? (
          <GameDetail
            game={currentGame}
            onBack={closeDetail}
            comments={comments[currentGame.id] || []}
            onAddComment={(content) =>
              addComment(currentGame.id, content)
            }
            onDelete={deleteGame}
          />
        ) : (
          <>
            {activeTab === 'home' && (
              <HomeScreen
                games={games}
                onSelectGame={openGame}
                onDelete={deleteGame}
              />
            )}

            {activeTab === 'list' && (
              <GameList
                games={games}
                onSelectGame={openGame}
                onDelete={deleteGame}
              />
            )}

            {activeTab === 'search' && (
              <SearchGames
                games={games}
                onSelectGame={openGame}
                onDelete={deleteGame}
              />
            )}

            {activeTab === 'add' && (
              <AddGame onAdd={addGame} />
            )}
          </>
        )}

      </View>

      {!currentGame && (
        <TabBar
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },

  content: {
    flex: 1,
    backgroundColor: theme.background,
  },
});
