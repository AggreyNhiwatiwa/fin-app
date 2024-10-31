import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabBar from "./src/components/TabBar";
import { NavigationContainer } from "@react-navigation/native";
import { TransactionContext } from "./src/contexts/TransactionContext";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const initialTransactions = [
      { id: 1, name: "MyTransaction", amount: "200.00", date: "17th May"},
      { id: 2, name: "TestTransaction", amount: "12.50", date: "26th May"},
    ];

    setTransactions(initialTransactions);
  }, []);

  /*
  Enables the app to only be rendered when the initial tasks are added
  to the state successfully.

  Without this the Task items do not render due to the timing delays
  in the change of stage and the initial render
  */
  if (transactions === null) {
    return <Text>Please wait</Text>;
  }

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      <NavigationContainer style={{ flex: 1 }}>
        <TabBar />
      </NavigationContainer>
      </TransactionContext.Provider>
  );
}
