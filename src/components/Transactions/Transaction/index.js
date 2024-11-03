import styles from "./styles";
import { useContext } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { TransactionContext } from "../../../contexts/TransactionContext";
import { useNavigation } from "@react-navigation/native";

/*
Component that renders a single Transaction item.
The stateful list of Transaction is used to render the UI for each item.
This list is retrieved from TransactionContext
*/
export default function Transaction({
  id,
  recipient,
  name,
  amount,
  date,
  isExpense,
}) {
  const { transactions, setTransactions, setCurrentTransaction } =
    useContext(TransactionContext);
  const navigation = useNavigation();

  /*
    If the id of the current transaction is in the array, filter it out ("remove") it 
    and return a new array, before setting the state to trigger the re-render
    */
  const deleteTransaction = (transactionId) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
    setTransactions(updatedTransactions);
  };

  /*
    Function to show the user an Alert where they can delete the current
    transaction if they wish to do so
    */
  const handleDeleteTransaction = () => {
    Alert.alert("Delete this Transaction?", "This action cannot be undone.", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",

        onPress: () => {
          deleteTransaction(id);
        },
        style: "delete",
      },
    ]);
  };

  //Setting the state to the current transaction
  // Filter returns a new array, .find returns a single object
  const handleTransactionPress = () => {
    const pressedTransaction = transactions.find(
      (transaction) => transaction.id === id
    );
    setCurrentTransaction(pressedTransaction);
    navigation.navigate("TransactionDetailScreen");
  };

  return (
    <Pressable style={styles.container} onPress={handleTransactionPress}>
      <View style={styles.leftContainer}>
        <Text style={styles.mainHeading}>{recipient}</Text>
        <Text style={styles.subHeading}>{name}</Text>
      </View>

      <View style={styles.rightContainer}>
        <Text
          style={[
            styles.mainHeading,
            isExpense ? styles.expenseText : styles.paymentText,
          ]}
        > 
          {amount < 0 ? `-$${Math.abs(amount).toFixed(2)}` : `$${amount.toFixed(2)}`}
        </Text>

        <Text style={styles.subHeading}>{date}</Text>
      </View>
    </Pressable>
  );
}
