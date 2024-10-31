/*
Custom Delete Button component which will be used when a user wants to delete an item.
*/

import styles from "./styles";
import { Text, TouchableOpacity, View } from "react-native";

export default function DeleteButton(props) {
  
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View>

        <Text style={styles.buttonText}>Delete</Text>
        
      </View>
    </TouchableOpacity>
  );
}
