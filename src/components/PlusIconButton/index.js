/*
Custom Icon Button component which will be used when a user wants to add a new item.
*/

import styles from "./styles";
import { TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function PlusIconButton(props) {
  
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        <MaterialCommunityIcons size={30} style={styles.icon} name={"plus"} />
      </View>
    </TouchableOpacity>
  );
}
