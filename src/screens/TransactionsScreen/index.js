/*
Aggrey Nhiwatiwa
1152301
INFO-6132 
Lab 2
*/

/*
This screen / component simply renders the list of Transaction objects
This is done using a flatlist
As the id for each Transaction is generated using UUID (In App.js), these
will be unique 
*/

import { FlatList, View } from "react-native";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";
import Transaction from "../../components/Transaction";
import styles from "./styles";

export default function TransactionsScreen() {
  const { transactions } = useContext(TransactionContext);

  const renderItem = ({ item }) => (
    <Transaction
      id={item.id}
      recipient={item.recipient}
      name={item.name}
      amount={item.amount}
      time={item.time}
      category={item.category}
      status={item.status}
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
