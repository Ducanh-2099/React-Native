
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import theme from '../Theme';

export default function AddGame({ onAdd }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  // Chọn ảnh từ thư viện
  async function pickImage() {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        'Thông báo',
        'Bạn cần cấp quyền truy cập thư viện ảnh.'
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  // Thêm game
  function handleAdd() {
    if (!title.trim()) {
      Alert.alert('Thông báo', 'Vui lòng nhập tên game!');
      return;
    }

    onAdd({
      title: title.trim(),
      genre,
      year,
      publisher,
      rating,
      description,
      image,
    });

    // Xóa nội dung sau khi thêm
    setTitle('');
    setGenre('');
    setYear('');
    setPublisher('');
    setRating('');
    setDescription('');
    setImage(null);

    Alert.alert('Thành công', 'Đã thêm game vào thư viện!');
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.heading}>Thêm game mới</Text>
      <Text style={styles.subtitle}>
        Điền thông tin để thêm game vào thư viện của bạn.
      </Text>

      <Text style={styles.label}>Tên game *</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên game..."
        placeholderTextColor={theme.textSecondary}
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Ảnh bìa game</Text>

      <Pressable
        style={styles.imageButton}
        onPress={pickImage}
      >
        <Text style={styles.imageButtonText}>
          📷 Chọn ảnh từ thư viện
        </Text>
      </Pressable>

      {image && (
        <View>
          <Image
            source={{ uri: image }}
            style={styles.preview}
          />
          <Pressable
            style={styles.removeImage}
            onPress={() => setImage(null)}
          >
            <Text style={styles.removeImageText}>
              Xóa ảnh đã chọn
            </Text>
          </Pressable>
        </View>
      )}

      <Text style={styles.label}>Thể loại</Text>
      <TextInput
        style={styles.input}
        placeholder="Ví dụ: FPS, RPG, Action..."
        placeholderTextColor={theme.textSecondary}
        value={genre}
        onChangeText={setGenre}
      />

      <Text style={styles.label}>Năm phát hành</Text>
      <TextInput
        style={styles.input}
        placeholder="Ví dụ: 2024"
        placeholderTextColor={theme.textSecondary}
        keyboardType="numeric"
        value={year}
        onChangeText={setYear}
      />

      <Text style={styles.label}>Nhà phát hành</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên nhà phát hành..."
        placeholderTextColor={theme.textSecondary}
        value={publisher}
        onChangeText={setPublisher}
      />

      <Text style={styles.label}>Đánh giá</Text>
      <TextInput
        style={styles.input}
        placeholder="Ví dụ: 9/10"
        placeholderTextColor={theme.textSecondary}
        value={rating}
        onChangeText={setRating}
      />

      <Text style={styles.label}>Mô tả game</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Nhập mô tả game..."
        placeholderTextColor={theme.textSecondary}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Pressable
        style={styles.addButton}
        onPress={handleAdd}
      >
        <Text style={styles.addButtonText}>
          + THÊM GAME
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },

  content: {
    padding: 18,
    paddingBottom: 35,
  },

  heading: {
    color: theme.text,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitle: {
    color: theme.textSecondary,
    fontSize: 13,
    marginBottom: 15,
  },

  label: {
    color: theme.text,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
  },

  input: {
    backgroundColor: theme.card,
    color: theme.text,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.border,
    fontSize: 14,
  },

  imageButton: {
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.primary,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },

  imageButtonText: {
    color: theme.primary,
    fontWeight: 'bold',
  },

  preview: {
    width: '100%',
    height: 190,
    borderRadius: 12,
    marginTop: 12,
  },

  removeImage: {
    alignSelf: 'flex-end',
    padding: 8,
  },

  removeImageText: {
    color: theme.danger,
    fontSize: 13,
  },

  textArea: {
    height: 110,
    textAlignVertical: 'top',
  },

  addButton: {
    backgroundColor: theme.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },

  addButtonText: {
    color: '#080808',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
