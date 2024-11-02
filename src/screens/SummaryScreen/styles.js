/*
Styles for the Summary screen
*/
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      // justifyContent: "center",
    },
    header: {
      height: 60,
      backgroundColor: '#f8f8f8',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 4,
    },
    leftText: {
      fontSize: "18",
      fontWeight: "600",
    },
    rightText: {
      fontSize: "18",
    },
  });

  export default styles;