import React, { useState, useEffect } from "react";
import { View, useWindowDimensions, ScrollView, Text } from "react-native";

import { ImageSlider, SearchField } from "../components";
import { ImageryScout } from "../assets";
import { makeStyles } from "../styles/home.styles";
import { HomeType, ImageType } from "../types";
import { getDetails } from "../utils/helpers";

const Home: HomeType = () => {
  const [search, setSearch] = useState<string | undefined>("random");
  const [images, setImages] = useState<ImageType[]>([]);
  const [suggestionCheck, setSuggestionCheck] = useState<string | undefined>();

  const window = useWindowDimensions();

  const orientation =
    (window.width > window.height && "LANDSCAPE") || "PORTRAIT";
  const styles = makeStyles(orientation);

  useEffect(() => {
    getDetails(search, setImages, setSuggestionCheck);
  }, [search]);

  return (
    <View
      style={
        orientation === "PORTRAIT"
          ? styles.container
          : styles.landscapeContainer
      }
    >
      <View style={styles.backgroundImage}>
        <View style={styles.imageryScoutContainer}>
          <ImageryScout height="200" width="300" />
        </View>
      </View>
      <SearchField onSearch={setSearch} />
      {suggestionCheck && suggestionCheck !== search?.toLowerCase() && (
        <View style={styles.spellAlert}>
          <Text style={styles.searchCheck}>Did you mean to search for:</Text>
          <Text style={styles.correctSpell}>{suggestionCheck ?? ""}</Text>
        </View>
      )}

      {images && images.length === 0 && (
        <View style={styles.spellAlert}>
          <Text style={styles.searchCheck}>No results found</Text>
        </View>
      )}
      <ScrollView
        contentContainerStyle={
          orientation !== "PORTRAIT" && { minHeight: "110%" }
        }
        showsVerticalScrollIndicator={false}
      >
        <ImageSlider images={images.slice(0, images.length / 2)} />
        <ImageSlider images={images.slice(images.length / 2)} />
      </ScrollView>
    </View>
  );
};

export default Home;
