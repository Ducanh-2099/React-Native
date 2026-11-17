import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.name}>
          {product.name}
        </Text>

        <Text style={styles.price}>
          {product.price}
        </Text>

        <Text style={styles.description}
          numberOfLines={2}>
          {product.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#1F2937',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 140,
    backgroundColor: '#374151',
  },
  info: {
    padding: 12,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    color: '#38BDF8',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  description: {
    color: '#9CA3AF',
    fontSize: 12,
    lineHeight: 18,
  },
});
