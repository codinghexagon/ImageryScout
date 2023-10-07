import React from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/imageSlider.styles";

const ImageSlider = ({ images }) => {
  const windowWidth = Dimensions.get("window").width;
  const { navigate } = useNavigation();

  return (
    <View style={styles.imageSection}>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.horizontalContainer}>
              <View style={styles.imageSection}>
                <TouchableOpacity
                  onPress={() => navigate("image", { id: item.id })}
                >
                  <Image
                    source={{ uri: item.urls.small }}
                    style={styles.image}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        getItemLayout={(data, index) => ({
          length: index === 0 ? windowWidth : 100,
          offset: 100 * index,
          index,
        })}
      />
    </View>
  );
};

export default ImageSlider;
