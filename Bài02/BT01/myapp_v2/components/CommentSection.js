
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

import theme from '../Theme';

export default function CommentSection({
  comments = [],
  onAddComment,
}) {
  const [content, setContent] = useState('');

  // Gửi bình luận
  function handleSend() {
    const message = content.trim();

    if (!message) {
      return;
    }

    onAddComment(message);
    setContent('');
  }

  return (
    <View style={styles.container}>

      {/* Tiêu đề */}
      <Text style={styles.heading}>
        💬 Bình luận ({comments.length})
      </Text>

      {/* Danh sách bình luận */}
      {comments.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyIcon}>💬</Text>

          <Text style={styles.empty}>
            Chưa có bình luận nào!
          </Text>

          <Text style={styles.emptyDescription}>
            Hãy là người đầu tiên chia sẻ cảm nhận của bạn.
          </Text>
        </View>
      ) : (
        comments.map((comment) => (
          <View
            key={comment.id}
            style={styles.commentBox}
          >
            <View style={styles.authorRow}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  👤
                </Text>
              </View>

              <Text style={styles.author}>
                Người dùng
              </Text>
            </View>

            <Text style={styles.commentText}>
              {comment.content}
            </Text>
          </View>
        ))
      )}

      {/* Ô nhập bình luận */}
      <Text style={styles.inputLabel}>
        Viết bình luận của bạn
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Chia sẻ cảm nhận về trò chơi..."
        placeholderTextColor={theme.textSecondary}
        value={content}
        onChangeText={setContent}
        multiline
        textAlignVertical="top"
        maxLength={500}
      />

      <Text style={styles.characterCount}>
        {content.length}/500 ký tự
      </Text>

      {/* Nút gửi */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
          !content.trim() && styles.buttonDisabled,
        ]}
        onPress={handleSend}
        disabled={!content.trim()}
      >
        <Text style={styles.buttonText}>
          ➤ GỬI BÌNH LUẬN
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },

  heading: {
    color: theme.primary,
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  // Khi chưa có bình luận
  emptyBox: {
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
  },

  emptyIcon: {
    fontSize: 30,
    marginBottom: 8,
  },

  empty: {
    color: theme.text,
    fontSize: 15,
    fontWeight: 'bold',
  },

  emptyDescription: {
    color: theme.textSecondary,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 7,
  },

  // Khung bình luận
  commentBox: {
    backgroundColor: theme.card,
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: theme.border,
  },

  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  avatarText: {
    fontSize: 15,
  },

  author: {
    color: theme.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },

  commentText: {
    color: theme.text,
    fontSize: 14,
    lineHeight: 21,
  },

  // Ô nhập
  inputLabel: {
    color: theme.text,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
  },

  input: {
    backgroundColor: theme.card,
    color: theme.text,
    padding: 14,
    borderRadius: 12,
    minHeight: 90,
    borderWidth: 1,
    borderColor: theme.border,
    fontSize: 14,
  },

  characterCount: {
    color: theme.textSecondary,
    fontSize: 11,
    textAlign: 'right',
    marginTop: 6,
  },

  // Nút gửi
  button: {
    backgroundColor: theme.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },

  buttonPressed: {
    opacity: 0.7,
  },

  buttonDisabled: {
    opacity: 0.4,
  },

  buttonText: {
    color: '#080808',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
