import { Dimensions , StyleSheet} from "react-native";
export const makeStyles = (orientation) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    titleContainer: {
      padding: 20,
      backgroundColor: "#4a90e2",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#ffffff",
    },
    backgroundImage: {
      backgroundColor: "#E5F3FF",
      borderBottomRightRadius: 591,
      borderBottomLeftRadius: 591,
      height:
        orientation === "PORTRAIT"
          ? Dimensions.get("screen").height * 0.35
          : Dimensions.get("screen").width * 0.12,
      marginBottom: 20,
    },
    imageryScoutContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    imageryScout: {
      fontSize: 32,
      color: "#4C8BF5",
      fontWeight: "700",
    },
    landscapeContainer: {
      width: "90%",
      alignSelf: "center",
    },
    searchCheck: {
      color: "red",
      fontSize: 14,
    },
    spellAlert: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      margin: 10,
    },
    correctSpell: {
      fontSize: 15,
      fontWeight: "500",
    },
  });
