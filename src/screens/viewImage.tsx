import React from "react";
import { View, Image } from "react-native";
import useImage from "../hooks/useImage";

import { styles } from "../styles/viewImage.styles";

const ImageDisplayScreen = ({ route }) => {
  const { id } = route.params;
  const imageUrl = useImage(id);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default ImageDisplayScreen;
