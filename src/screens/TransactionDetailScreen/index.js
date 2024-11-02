import { Alert, Text, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { DataTable } from "react-native-paper";
import { TransactionContext } from "../../contexts/TransactionContext";
import { useContext, useEffect } from "react";

/*
Screen which shows details of a pressed Transaction.
*/
export default function TransactionDetailScreen() {
  const {
    transactions,
    setTransactions,
    currentTransaction,
    setCurrentTransaction,
  } = useContext(TransactionContext);
  const navigation = useNavigation();

  /*
    Dynamically setting the title based on the transaction name
    Dependency to make sure a transaction exists before trying to set anyth
    */
  useEffect(() => {
    if (currentTransaction) {
      navigation.setOptions({ title: currentTransaction.name });
    }
  }, [currentTransaction]);

  return (
    <View style={styles.container}>
      {/* <MaterialCommunityIcons name={"cash-plus"} size={100} style={styles.icon} /> */}

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
            <Text style={styles.leftText}>Payee:</Text>
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
            <Text style={styles.leftText}>Amount:</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.rightText}>{currentTransaction.amount}</Text>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}
