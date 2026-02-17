import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import api from "../api/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export default function ProductsScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data.products);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleFavorite = async (id) => {
    await api.post(`/favorites/${id}`);
  };

  if (loading) return <Loader />;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          onPress={() => navigation.navigate("ProductDetail", { id: item._id })}
          toggleFavorite={() => toggleFavorite(item._id)}
        />
      )}
    />
  );
}
