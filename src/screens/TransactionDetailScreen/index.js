/*
Aggrey Nhiwatiwa
1152301
INFO-6132 
Lab 2
*/

/*
Component that shows extra details of the pressed transaction 
(this logic is included in the Transaction functional component)

The header title is dynamically rendered to be that of the transactions' name

Extra transaction details shown (in addition to those already present
on the Transactions screen)

- Time
- Status
- Category
- Transaction ID (UUID)

Some conditional rendering also takes place here, displaying
different icons and logos dependent on whether the transaction is income or an expense.

The isExpense boolean flag is also used to conditionally render a recipient String 
for expenses or a sender string if the transaction is income

Libraries used:
- React Native Paper: https://callstack.github.io/react-native-paper/docs/components/DataTable/
- Material Community Icons: https://www.npmjs.com/package/react-native-vector-icons
*/

import { Text, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { DataTable } from "react-native-paper";
import { TransactionContext } from "../../contexts/TransactionContext";
import { useContext, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function TransactionDetailScreen() {
  const { currentTransaction } = useContext(TransactionContext);
  const navigation = useNavigation();

  /*
    Dynamically setting the title based on the transaction name
    Dependency to make sure a transaction exists before trying to set anything
    */
  useEffect(() => {
    if (currentTransaction) {
      navigation.setOptions({ title: currentTransaction.name });
    }
  }, [currentTransaction]);

  return (
    <View style={styles.container}>
      {currentTransaction.isExpense ? (
        <MaterialCommunityIcons
          name={"bank-minus"}
          size={100}
          style={styles.iconExpense}
        />
      ) : (
        <MaterialCommunityIcons
          name={"bank-plus"}
          size={100}
          style={styles.iconIncome}
        />
      )}

      <DataTable>
        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Date:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>{currentTransaction.date}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Time:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>{currentTransaction.time}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Amount:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>
              $
              {currentTransaction.isExpense
                ? (currentTransaction.amount * -1).toFixed(2)
                : currentTransaction.amount.toFixed(2)}
            </Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Status:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>{currentTransaction.status}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>
              {currentTransaction.isExpense ? "Recipient:" : "Sender:"}
            </Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>{currentTransaction.recipient}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Name:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>{currentTransaction.name}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Category:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>{currentTransaction.category}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.leftText}>Transaction ID:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>{currentTransaction.id}</Text>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}
