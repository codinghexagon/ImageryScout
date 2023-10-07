import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    imageSection: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginHorizontal: 5,
      marginTop: 20,
    },
    shadowContainer: {
      width: 210,
      height: 185,
      margin: 5,
      borderRadius: 20,
      backgroundColor: "#FFF",
      shadowColor: "#000",
      shadowOffset: {
        width: 4,
        height: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    image: {
      width: 200,
      height: 175,
      borderRadius: 20,
    },
    horizontalContainer: {
      flex: 1,
      flexDirection: "row",
    },
  });
