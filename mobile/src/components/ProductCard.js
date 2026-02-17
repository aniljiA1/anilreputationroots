import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function ProductCard({ product, onPress, toggleFavorite }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text>${product.price}</Text>

      <Button title="View" onPress={onPress} />
      <Button title="❤️ Favorite" onPress={toggleFavorite} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    marginVertical: 5,
  },
});
