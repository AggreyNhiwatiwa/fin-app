import styles from "./styles";
import { Text, View } from "react-native";


/*
This screen / component simply renders the list of Vehicle objects (The Vehicles component)
using a custom hook from the context to get the current list of vehicles.

Passes the list of vehicles to the Vehicles component so it can render and map them into
Vehicle components
*/
export default function SummaryScreen() {

  return (
    <View style={styles.container}>
      <Text>Summary Screen</Text>
    </View>
  );
}