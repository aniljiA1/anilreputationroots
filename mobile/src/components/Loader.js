import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function Loader() {
  return (
    <View style={{ marginTop: 20 }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
