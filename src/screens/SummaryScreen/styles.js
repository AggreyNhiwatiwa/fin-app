/*
Styles for the Summary screen
*/
import { StyleSheet } from "react-native";
import PieChart from "react-native-pie-chart";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  icon: {
    //color: "#000000",
  },
  pieChart: {
    marginTop: 30,
  },
  balanceContainer: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    width: 280,
    height: 60,
    backgroundColor: "#4F4F4F",
    borderColor: "#000000",
    borderWidth: 2,
  },
  balanceText :{
    fontSize: 20,
    color: "#AEFF00",
    fontWeight: "600",

  },
  table: {
    marginTop: 30,
  },
  leftCell: {
    flex: 1,
    alignContent: "center",
    //justifyContent: "center",
  },
  rightCell: {},
  leftText: {
    fontSize: "20",
    fontWeight: "600",
  },
  expenseText: {
    fontSize: "20",
    fontWeight: "600",
    color: "#8A0000",

  },
  incomeText: {
    fontSize: "20",
    fontWeight: "600",
    color: "#007038",
    
  },
  rightText: {
    fontSize: "18",
  },
});

export default styles;
