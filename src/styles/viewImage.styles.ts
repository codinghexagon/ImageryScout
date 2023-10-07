import { StyleSheet, Dimensions} from "react-native";
const window = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: window.width,
      height: window.height,
    },
  });
