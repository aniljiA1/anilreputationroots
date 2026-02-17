import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import api from "../api/api";

export default function ProductDetailScreen({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, []);

  if (!product) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { height: 200, borderRadius: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginVertical: 10 },
  price: { fontSize: 18, marginTop: 10 },
});
