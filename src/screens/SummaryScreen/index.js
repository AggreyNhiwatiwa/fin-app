import styles from "./styles";
import { Text, View } from "react-native";
import { DataTable } from "react-native-paper";
import { TransactionContext } from "../../contexts/TransactionContext";
import { useContext, useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PieChart from "react-native-pie-chart";
import { Dimensions } from "react-native";

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
  Calculating today's date
  */

  const todaysDate = new Date();
  const todaysDateString = `${
    todaysDate.getMonth() + 1
  }-${todaysDate.getDate()}-${todaysDate.getFullYear()}`;

  /*
  Calculate number of transactions
  */

  /*
  useEffect hook with empty array dependency to trigger the function once,
  as the transaction list is static
  */
  useEffect(() => {
    calculate();
    console.log("Expenses: ", sumExpenses);
    console.log("Income: ", sumIncome);
  }, [transactions]);

  /*
  Creating dimensions
  */
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const total = sumExpenses + sumIncome;

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Balance</Text>
        <Text style={styles.balanceText}>
          ${parseFloat((sumIncome + sumExpenses).toFixed(2))}
        </Text>
      </View>

      <View>
        {total === 0 ? (
          <Text>No data to display</Text>
        ) : (
          <PieChart
            style={styles.pieChart}
            widthAndHeight={windowWidth * 0.7}
            series={[sumExpenses * -1, sumIncome]}
            sliceColor={["#8A0000", "#007038"]}
            coverRadius={0.45}
            coverFill={"#FFF"}
          />
        )}
      </View>

 


      <DataTable style={styles.table}>






        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Today's date:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>{todaysDateString}</Text>
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Account Name:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>Checking</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell style={styles.leftCell}>
            <Text style={styles.expenseText}>Expenses:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>${(sumExpenses * -1).toFixed(2)}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.incomeText}>Income:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>${(sumIncome).toFixed(2)}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Transactions:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>{transactions.length}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Credit Score:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>973 (959)</Text>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}
