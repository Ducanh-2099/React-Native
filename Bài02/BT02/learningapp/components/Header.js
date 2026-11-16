import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Xin chào,</Text>
        <Text style={styles.name}>Lưu Huỳnh Đức Anh 👋</Text>
        <Text style={styles.info}>
          MSSV: CDCNTT18A02
        </Text>
        <Text style={styles.info}>
          Lớp: CD-CNTT18A
        </Text>
      </View>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>A</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  greeting: {
    color: '#A0A0B0',
    fontSize: 15,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  info: {
    color: '#A0A0B0',
    fontSize: 13,
    marginTop: 3,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#B6FF4A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#151515',
    fontSize: 23,
    fontWeight: 'bold',
  },
});
