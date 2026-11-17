import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import ProductCard from './ProductCard';

const products = [
  {
    id: '1',
    name: 'iPhone 16',
    price: '20.000.000đ',
    description: 'Điện thoại Apple, thiết kế hiện đại.',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600',
  },
  {
    id: '2',
    name: 'MacBook Neo',
    price: '17.990.000 ₫',
    description: 'Laptop mỏng nhẹ, hiệu năng mạnh mẽ.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBqprUkFYNLlcacJmnvCdSSaGZJeyak-s2za5TPvYoA&     s=10',
  },
  {
    id: '3',
    name: 'Tai nghe Sony',
    price: '3.500.000đ',
    description: 'Âm thanh sống động, chống ồn tốt.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
  },
  {
    id: '4',
    name: 'Apple Watch',
    price: '8.000.000đ',
    description: 'Đồng hồ thông minh theo dõi sức khỏe.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
  },
  {
    id: '5',
    name: 'REDMAGIC Astra 2',
    price: '10.000.000đ',
    description: 'Máy tính bảng nhỏ nhẹ dành cho game thủ.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQ8WkC7x3RyuYhianh_vtUvGi2cCPYGfve4rrlVT46Q&s',
  },
  {
    id: '6',
    name: 'Loa Bluetooth',
    price: '2.000.000đ',
    description: 'Loa không dây nhỏ gọn, âm thanh tốt.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600',
  },
];

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Sản phẩm nổi bật
      </Text>

      <Text style={styles.count}>
        Khám phá các sản phẩm công nghệ
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  count: {
    color: '#9CA3AF',
    fontSize: 13,
    marginBottom: 18,
  },
  row: {
    gap: 12,
  },
});
