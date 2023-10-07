import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/searchField.styles";
import { SearchFieldType } from "../types";

const SearchField: SearchFieldType = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused ? styles.focusedInput : {}]}
        value={query.toLocaleLowerCase()}
        onChangeText={setQuery}
        placeholder="Search..."
        onSubmitEditing={handleSearch}
        returnKeyType="search"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity
        style={styles.search}
        onPress={handleSearch}
        disabled={query ? false : true}
      >
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchField;
