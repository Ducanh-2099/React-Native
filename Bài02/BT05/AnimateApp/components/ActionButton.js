import React from 'react';

import {
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';

export default function ActionButton({
  title,
  onPress,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#34D399',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 25,
  },

  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.96 }],
  },

  buttonText: {
    color: '#0B1120',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
