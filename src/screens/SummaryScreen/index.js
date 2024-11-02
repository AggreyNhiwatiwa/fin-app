import styles from "./styles";
import { Text, View } from "react-native";
import { DataTable } from "react-native-paper";
import { TransactionContext } from "../../contexts/TransactionContext";
import { useContext, useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function SummaryScreen() {

  const { transactions } = useContext(TransactionContext);

  const [sumExpenses, setSumExpenses] = useState(0);
  const [sumIncome, setSumIncome] = useState(0);

  /*
  Iterate through the list of transactions from the context,
  If the isExpense flag is true add the amount to the
  expense sum, if not, add to the income sum
  */
  function calculate() {
    let expenses = 0;
    let income = 0;

    transactions.forEach((transaction) => {
      if (transaction.isExpense) {
        expenses += transaction.amount;
      } else {
        income += transaction.amount;
      }

      setSumExpenses(expenses);
      setSumIncome(income);
    });
  }

  /*
  useEffect hook with empty array dependency to trigger the function once,
  as the transaction list is static
  */
  useEffect(() => {
    calculate();
    console.log("Expenses: ", sumExpenses);
    console.log("Income: ", sumIncome);
  }, []);

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Today's date:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text></Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Balance:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text></Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Total Expenses:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>{sumExpenses}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Total Incomings:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>{sumIncome}</Text>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}
