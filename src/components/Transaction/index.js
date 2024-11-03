/*
Aggrey Nhiwatiwa
1152301
INFO-6132 
Lab 2
*/

/*
Component that renders a single Transaction item.
The stateful list of Transaction is used to render the UI for each item.

The transactions name, recipient, date and amount are rendered in this custom component
Upon clicking the component (which is a Pressable), it navigates to the correponding transactions' 
details screen.
*/

import styles from "./styles";
import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { TransactionContext } from "../../contexts/TransactionContext";
import { useNavigation } from "@react-navigation/native";

export default function Transaction({
  id,
  recipient,
  name,
  amount,
  date,
  isExpense,
}) {
  const { transactions, setCurrentTransaction } =
    useContext(TransactionContext);
  const navigation = useNavigation();

  /*
  Setting the state to the current transaction,
  which is then used to get the extra details for the correct
  transaction in the following details screen without having to prop-drill 
  as setTransaction is located in the Context.
  */
  const handleTransactionPress = () => {
    const pressedTransaction = transactions.find(
      (transaction) => transaction.id === id
    );
    setCurrentTransaction(pressedTransaction);
    navigation.navigate("TransactionDetailScreen");
  };

  /*
  Conditional rendering for styling depending on whether
  the transaction is an expense or income

  Note Math.abs(absolute) is used here to get the value irrespective
  of polarity to then conduct the correct formatting
  e.g/ $1000 for income or -$1000 for an expense

  To fixed(2) always provides the value to 2dp (and adds trailing 0's if needed)
  */
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
          {amount < 0
            ? `-$${Math.abs(amount).toFixed(2)}`
            : `$${amount.toFixed(2)}`}
        </Text>

        <Text style={styles.subHeading}>{date}</Text>
      </View>
    </Pressable>
  );
}
