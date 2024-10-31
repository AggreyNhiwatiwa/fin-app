import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabBar from "./src/components/TabBar";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
      <NavigationContainer style={{ flex: 1 }}>
        <TabBar />
      </NavigationContainer>
  );
}
