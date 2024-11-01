import { Alert, Text, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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
            <Text style={styles.keyText}>Date:</Text>
          </DataTable.Cell>
          <DataTable.Cell>{currentTransaction.date}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.keyText}>Payee:</Text>
          </DataTable.Cell>
          <DataTable.Cell>{currentTransaction.recipient}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.keyText}>Name:</Text>
          </DataTable.Cell>
          <DataTable.Cell>{currentTransaction.name}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.keyText}>Amount:</Text>
          </DataTable.Cell>
          <DataTable.Cell>{currentTransaction.amount}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}
