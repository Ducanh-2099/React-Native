import React, { useEffect, useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

export default function AnimatedMessage({
  visible,
  title,
  description,
}) {
  const scale = useRef(
    new Animated.Value(0.5)
  ).current;

  const opacity = useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.spring(scale, {
          toValue: 1,
          friction: 5,
          tension: 60,
          useNativeDriver: true,
        }),

        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      scale.setValue(0.5);
      opacity.setValue(0);
    }
  }, [visible, scale, opacity]);

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.container,
        {
          opacity: opacity,
          transform: [{ scale: scale }],
        },
      ]}
    >
      <Text style={styles.icon}>🏆</Text>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#064E3B',
    borderWidth: 1,
    borderColor: '#34D399',
    borderRadius: 18,
    padding: 22,
    alignItems: 'center',
    marginTop: 20,
  },

  icon: {
    fontSize: 42,
  },

  title: {
    color: '#6EE7B7',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 10,
  },

  description: {
    color: '#D1FAE5',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 8,
  },
});
