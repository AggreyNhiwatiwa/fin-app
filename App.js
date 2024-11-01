import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabBar from "./src/components/TabBar";
import { NavigationContainer } from "@react-navigation/native";
import { TransactionContext } from "./src/contexts/TransactionContext";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [currentTransaction, setCurrentTransaction] = useState(null);

  useEffect(() => {
    const initialTransactions = [
      { id: 1, recipient:"Landlord Lender", name: "Rent", amount: "-$1275.00", date: "28-10-2024", isExpense: true},
      { id: 2, recipient:"Tech Company", name: "Paycheck", amount: "+$2310.00", date: "25-10-2024", isExpense: false },
    ];

    setTransactions(initialTransactions);
  }, []);

  /*
  Enables the app to only be rendered when the initial transactions are added
  to the state successfully.

  Without this the Transaction items do not render due to the timing delays
  in the change of stage and the initial render
  */
  if (transactions === null) {
    return <Text>Please wait</Text>;
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        currentTransaction,
        setCurrentTransaction,
      }}
    >
      <NavigationContainer style={{ flex: 1 }}>
        <TabBar />
      </NavigationContainer>
    </TransactionContext.Provider>
  );
}
