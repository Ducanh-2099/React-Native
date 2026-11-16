
import React from 'react';

import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

import CommentSection from './CommentSection';
import theme from '../Theme';

export default function GameDetail({
  game,
  onBack,
  comments = [],
  onAddComment,
  onDelete,
}) {
  // Xác nhận trước khi xóa game
  function confirmDelete() {
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
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Nút quay lại */}
      <Pressable
        onPress={onBack}
        style={styles.backButton}
      >
        <Text style={styles.backText}>
          ← Quay lại
        </Text>
      </Pressable>

      {/* Hình ảnh game */}
      {game.image ? (
        <Image
          source={{ uri: game.image }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>
            🎮
          </Text>
          <Text style={styles.placeholderLabel}>
            GAME IMAGE
          </Text>
        </View>
      )}

      <View style={styles.content}>

        {/* Tên game */}
        <Text style={styles.title}>
          {game.title}
        </Text>

        {/* Điểm đánh giá */}
        <View style={styles.ratingBox}>
          <Text style={styles.rating}>
            ⭐ {game.rating || 'Chưa đánh giá'}
          </Text>
        </View>

        {/* Thông tin game */}
        <Text style={styles.sectionTitle}>
          📋 Thông tin game
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.info}>
            🎮 Thể loại: {game.genre || 'Chưa cập nhật'}
          </Text>

          <Text style={styles.info}>
            📅 Năm phát hành: {game.year || 'Chưa cập nhật'}
          </Text>

          <Text style={styles.info}>
            🏢 Nhà phát hành: {game.publisher || 'Chưa cập nhật'}
          </Text>
        </View>

        {/* Mô tả game */}
        <Text style={styles.sectionTitle}>
          📝 Mô tả game
        </Text>

        <View style={styles.descriptionBox}>
          <Text style={styles.description}>
            {game.description || 'Chưa có mô tả cho game này.'}
          </Text>
        </View>

        {/* Bình luận */}
        <Text style={styles.sectionTitle}>
          💬 Bình luận
        </Text>

        <CommentSection
          comments={comments}
          onAddComment={onAddComment}
        />

        {/* Nút xóa game */}
        <Pressable
          style={styles.deleteButton}
          onPress={confirmDelete}
        >
          <Text style={styles.deleteText}>
            🗑 XÓA GAME
          </Text>
        </Pressable>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },

  contentContainer: {
    padding: 15,
    paddingBottom: 30,
  },

  // Nút quay lại
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 15,
  },

  backText: {
    color: theme.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },

  // Hình ảnh
  image: {
    width: '100%',
    height: 230,
    borderRadius: 15,
    backgroundColor: theme.card,
  },

  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.border,
  },

  placeholderText: {
    fontSize: 50,
  },

  placeholderLabel: {
    color: theme.textSecondary,
    fontSize: 14,
    marginTop: 8,
  },

  content: {
    paddingTop: 18,
  },

  // Tên game
  title: {
    color: theme.text,
    fontSize: 26,
    fontWeight: 'bold',
  },

  // Đánh giá
  ratingBox: {
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.primary,
    alignSelf: 'flex-start',
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginTop: 12,
  },

  rating: {
    color: theme.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },

  // Tiêu đề từng phần
  sectionTitle: {
    color: theme.primary,
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 12,
  },

  // Thông tin
  infoBox: {
    backgroundColor: theme.card,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
    gap: 14,
  },

  info: {
    color: theme.text,
    fontSize: 14,
    lineHeight: 21,
  },

  // Mô tả
  descriptionBox: {
    backgroundColor: theme.card,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
  },

  description: {
    color: theme.textSecondary,
    fontSize: 14,
    lineHeight: 23,
  },

  // Nút xóa
  deleteButton: {
    backgroundColor: theme.danger,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  deleteText: {
    color: theme.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
