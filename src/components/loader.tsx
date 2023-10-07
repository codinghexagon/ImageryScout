import React from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "../styles/loader.styles";
import { ImageryScout } from "../assets";

const Loader = ({ state }) => {
  return state ? (
    <View style={styles.splashScreen}>
      <ImageryScout width={300} height={200} />
      <ActivityIndicator size="large" color={"#4C8BF5"} />
    </View>
  ) : null;
};

export default Loader;
