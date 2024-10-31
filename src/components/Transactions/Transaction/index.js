import styles from "./styles";
import { useContext } from "react";
import { Alert, Text, View } from "react-native";
import { TransactionContext } from "../../../contexts/TransactionContext";



/*
Component that renders a single Task item.
The stateful list of tasks is used to render the UI for each item.
This list is retrieved from TaskContext
*/
export default function Transaction({ id, name, amount, date }) {
    const { transactions, setTransactions } = useContext(TransactionContext);
  
    /*
    If the current task matches a task in the array (itself), a new task object is
    created (...) with a changed state, and sets the state to trigger the re-render
    */
    // const toggleTaskStatus = (transactionId) => {
    //   const updatedTasks = tasks.map((transaction) =>
    //     transaction.id === transactionId ? { ...task, status: !task.status } : task
    //   );
    //   setTasks(updatedTasks);
    // };
  
    /*
    If the id of the current task is in the array, filter it out ("remove") it 
    and return a new array, before setting the state to trigger the re-render
    */
    const deleteTransaction = (transactionId) => {
      const updatedTransactions = transactions.filter((transaction) => transaction.id !== transactionId);
      setTransactions(updatedTransactions);
    };
  
    /*
    Function to show the user an Alert where they can delete the current
    task if they wish to do so
    */
    const handleDeleteTransaction = () => {
      Alert.alert("Delete this Task?", "This action cannot be undone.", [
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
  
    return (
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    );
  }
  