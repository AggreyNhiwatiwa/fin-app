import { FlatList, Text, View } from "react-native";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";
import Transaction from "../../components/Transactions/Transaction";
import styles from "../../components/TabBar/styles";


/*
This screen / component simply renders the list of Vehicle objects (The Vehicles component)
using a custom hook from the context to get the current list of vehicles.

Passes the list of vehicles to the Vehicles component so it can render and map them into
Vehicle components
*/
export default function TransactionsScreen() {

  const { transactions } = useContext(TransactionContext);

  const renderItem = ({ item }) => (
    <Transaction id={item.id} name={item.name} amount={item.amount} date={item.date}></Transaction>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}