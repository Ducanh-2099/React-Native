
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../Theme';

export default function Header() {
  return (
    <View style={styles.header}>

      <View style={styles.logoContainer}>
        <MaterialCommunityIcons
          name="gamepad-variant"
          size={32}
          color={theme.primary}
        />

        <Text style={styles.logo}>
          GAME LIBRARY
        </Text>
      </View>

      <Text style={styles.subtitle}>
        Khám phá thế giới trò chơi của bạn
      </Text>

      <View style={styles.line} />

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.background,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 12,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  logo: {
    color: theme.primary,
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  subtitle: {
    color: theme.textSecondary,
    fontSize: 13,
    marginTop: 7,
  },

  line: {
    height: 1,
    backgroundColor: theme.border,
    marginTop: 15,
  },
});
