import { Alert, Text, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { DataTable } from "react-native-paper";
import { TransactionContext } from "../../contexts/TransactionContext";
import { useContext } from "react";

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

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={"account"} size={200} style={styles.icon} />

      <DataTable>
        <DataTable.Header>
          <DataTable.Title></DataTable.Title>
          <DataTable.Title></DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.keyText}>Name:</Text>
          </DataTable.Cell>
          <DataTable.Cell>{currentTransaction.name}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.keyText}>Employee Number:</Text>
          </DataTable.Cell>
          <DataTable.Cell>{currentTransaction.amount}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>
            <Text style={styles.keyText}>License plate:</Text>
          </DataTable.Cell>
          <DataTable.Cell>{currentTransaction.date}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
}
