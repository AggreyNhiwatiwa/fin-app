/*
Aggrey Nhiwatiwa
1152301
INFO-6132 
Lab 2
*/

/*
The root component

The mock static transaction data is generated here and set to the state from the context

This root rendered component is the provider for the TransactionContext, making the 
list of transactions, the current transactions and their setters globally available

The navgation container renders the Tabbar (bottom tab navigator), which also renders
the Transaction Stack Navigator

Libraries used:
- UUID: https://www.npmjs.com/package/react-native-uuid

*/

import { Text } from "react-native";
import TabBar from "./src/components/TabBar";
import { NavigationContainer } from "@react-navigation/native";
import { TransactionContext } from "./src/contexts/TransactionContext";
import { useEffect } from "react";
import { useState } from "react";
import uuid from 'react-native-uuid';

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [currentTransaction, setCurrentTransaction] = useState(null);

  useEffect(() => {
    const initialTransactions = [
      
      { id: uuid.v4(), recipient: "Hydro Homies", name: "Hydro bill", amount: -38.54, date: "11-02-2024", time: "15:33", category: "Utilities", status: "Completed", isExpense: true },
      { id: uuid.v4(), recipient: "No.1 Landlord", name: "Rent", amount: -1275.92, date: "11-01-2024", time: "13:45", category: "Bills", status: "Pending", isExpense: true },
      { id: uuid.v4(), recipient: "Tech Company", name: "Salary", amount: 2310.28, date: "10-30-2024", time: "00:17", category: "Income", status: "Completed", isExpense: false },
      { id: uuid.v4(), recipient: "Money Bay", name: "Sold Hoodie", amount: 105.62, date: "10-29-2024", time: "09:39", category: "Income", status: "Completed", isExpense: false },
      { id: uuid.v4(), recipient: "Streamy", name: "Video Subscription", amount: -6.99, date: "10-27-2024", time: "20:10", category: "Entertainment", status: "Completed", isExpense: true },
      { id: uuid.v4(), recipient: "Fresh Mart", name: "Groceries", amount: -92.47, date: "10-23-2024", time: "17:13", category: "Food", status: "Completed", isExpense: true },
      { id: uuid.v4(), recipient: "Buzz Electricity Co.", name: "Electricity Bill", amount: -40.89, date: "10-22-2024", time: "08:16", category: "Utilities", status: "Pending", isExpense: true },
      { id: uuid.v4(), recipient: "Pill Pharma", name: "Prescription", amount: -18.26, date: "10-21-2024", time: "14:00", category: "Health", status: "Completed", isExpense: true },
      { id: uuid.v4(), recipient: "Indie Records Store", name: "Project Payment", amount: 512.33, date: "10-21-2024", time: "11:23", category: "Income", status: "Completed", isExpense: false },
      { id: uuid.v4(), recipient: "Caffeine Cafe", name: "Coffee", amount: -5.75, date: "10-20-2024", time: "08:19", category: "Food", status: "Completed", isExpense: true },
      { id: uuid.v4(), recipient: "InstantPay", name: "Transfer to Savings", amount: -150.00, date: "10-18-2024", time: "12:45", category: "Transfers", status: "Completed", isExpense: true },
      { id: uuid.v4(), recipient: "Yoober", name: "Ride to Work", amount: -14.35, date: "10-17-2024", time: "08:36", category: "Transport", status: "Completed", isExpense: true },
      { id: uuid.v4(), recipient: "InstantPay", name: "Transfer from Savings", amount: 400.00, date: "10-15-2024", time: "18:15", category: "Transport", status: "Completed", isExpense: false },
      { id: uuid.v4(), recipient: "EZ Electronics", name: "Laptop riser", amount: -36.99, date: "10-15-2024", time: "15:45", category: "Shopping", status: "Completed", isExpense: true },
      { id: uuid.v4(), recipient: "Mazin Mobile", name: "Phone Bill", amount: -45.00, date: "10-12-2024", time: "11:50", category: "Utilities", status: "Completed", isExpense: true },
      { id: uuid.v4(), recipient: "Better Books", name: "Books", amount: -28.78, date: "10-10-2024", time: "13:41", category: "Shopping", status: "Completed", isExpense: true },
      { id: uuid.v4(), recipient: "Pump Gym", name: "Gym Membership", amount: -39.99, date: "10-08-2024", time: "16:26", category: "Health", status: "Completed", isExpense: true },
      { id: uuid.v4(), recipient: "John Doe", name: "Payment for Dinner", amount: 17.47, date: "10-05-2024", time: "20:32", category: "Transfers", status: "Completed", isExpense: false },
      { id: uuid.v4(), recipient: "Audio Waves", name: "Music Subscription", amount: -9.99, date: "05-04-2024", time: "22:47", category: "Entertainment", status: "Completed", isExpense: true },
      { id: uuid.v4(), recipient: "Doe and Doe", name: "Tenants Insurance", amount: -23.28, date: "03-04-2024", time: "13:23", category: "Utilities", status: "Completed", isExpense: true },
      
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
