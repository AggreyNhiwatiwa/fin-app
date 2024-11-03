import { FlatList, Text, View } from "react-native";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";
import Transaction from "../../components/Transactions/Transaction";
import { DataTable } from "react-native-paper";
import styles from "./styles";

/*
This screen / component simply renders the list of Transaction objects
*/
export default function TransactionsScreen() {
  const { transactions } = useContext(TransactionContext);

  const renderItem = ({ item }) => (
    <Transaction
      id={item.id}
      recipient={item.recipient}
      name={item.name}
      amount={item.amount}
      time = {item.time}
      category = {item.category}
      status = {item.status}
      date={item.date}
      isExpense={item.isExpense}
    ></Transaction>
  );

  return (
    <View style={styles.container}>
        <FlatList
          style={styles.flatListContent}
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
    </View>
  );
}
