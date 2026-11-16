
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../Theme';

export default function GameCard({ game, onPress, onDelete }) {
  const confirmDelete = () => {
    Alert.alert(
      'Xóa game',
      `Bạn có chắc muốn xóa "${game.title}" không?`,
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xóa',
          style: 'destructive',
          onPress: () => onDelete(game.id),
        },
      ]
    );
  };

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        {game.image ? (
          <Image source={{ uri: game.image }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <MaterialCommunityIcons
              name="gamepad-variant"
              size={40}
              color={theme.textSecondary}
            />
          </View>
        )}

        <Pressable
          style={styles.deleteButton}
          onPress={confirmDelete}
        >
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={21}
            color="#FFFFFF"
          />
        </Pressable>
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.description}>
          {game.genre} • {game.year}
        </Text>
        <Text style={styles.rating}>
          ★ {game.rating}/10
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#171717',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333333',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 170,
  },
  placeholder: {
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#DC2626',
    padding: 9,
    borderRadius: 10,
  },
  info: {
    padding: 15,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#A3A3A3',
    marginTop: 5,
  },
  rating: {
    color: '#A3E635',
    marginTop: 8,
    fontWeight: 'bold',
  },
});
