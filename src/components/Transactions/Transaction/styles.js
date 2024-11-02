/*
Styles for each individual Transaction component that is rendered
*/
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 2,
    width: 380,
    height: 60,
    paddingLeft: 4,
    paddingRight: 4,
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomColor: "#5C5C5C",
    borderBottomWidth: 2,

  },
  leftContainer: {
    width: 190,
    height: 50,

  },
  rightContainer: {

    width: 190,
    height: 50,
    alignItems: "flex-end",

  },
  mainHeading: {
    fontSize: "20",
    fontWeight: "1000",
    
  },
  subHeading: {
    fontSize: "18",
    fontWeight: "1000",
    color: "#5C5C5C",

  },
  expenseText: {
    color: "#8A0000",
  
  },
  paymentText: {
    color: "#007038",
  },


});

export default styles;

