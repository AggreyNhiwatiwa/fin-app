/*
Styles for the transaction details screen which shows advanced details for a specific transaction
*/
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  tabbar: {
    backgroundColor: "#009E4D",
  },
  iconExpense: {
    marginTop: 30,
    marginBottom: 30,
    color: "#8A0000",
  },
  iconIncome: {
    marginTop: 30,
    marginBottom: 30,
    color: "#007038",
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
