import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flexDirection: "row",
      paddingHorizontal: 8,
      alignItems: "center",
      width: "100%",
    },
    input: {
      flex: 1,
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginRight: 10,
    },
    search: {
      width: 100,
      height: 40,
      borderWidth: 1,
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderColor: "#5189EC",
      backgroundColor: "#5189EC",
      justifyContent: "center",
      alignItems: "center",
    },
    searchText: {
      color: "white",
      fontWeight: "bold",
    },
    focusedInput: {
      borderColor: "#5189EC",
    },
  });
