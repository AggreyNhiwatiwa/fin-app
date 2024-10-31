import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles";
import TransactionsScreen from "../../screens/TransactionsScreen";
import TransactionDetailScreen from "../../screens/TransactionDetailScreen";

/*
Component that creates stack navigation for the transactions

This enables the following flow of navigation:

User enters the Transactions Screen, showing a list of Transactions.
Upon pressing a specific item, they are taken to a details page.

No title for the TransactionDetailsScreen as this is dynamically rendered depending on the transactions name
*/
export default function TransactionStackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionsScreen"
        component={TransactionsScreen}
        options={{
          title: "Transactions",
          headerStyle: styles.headerStyle,
          headerTintColor: styles.headerTintColor.color,
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />

      <Stack.Screen
        name="TransactionDetailScreen"
        component={TransactionDetailScreen}
        options={{
          headerStyle: styles.headerStyle,
          headerTintColor: styles.headerTintColor.color,
          headerTitleStyle: styles.headerTitleStyle,
        }}
      />
    </Stack.Navigator>
  );
}
