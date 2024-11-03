/*
Aggrey Nhiwatiwa
1152301
INFO-6132 
Lab 2
*/

/*
Component that creates a stack navigator for the transactions
This is nested in the Tab navigator for the Transactions tab

This navigatior enables the following flow of navigation:
User enters the Transactions Screen, showing a list of Transactions.
Upon pressing a specific transaction, they are taken to a details page with
details of the pressed transaction (this logic is included in the Transaction functional component)

No static title for the TransactionDetailsScreen is set here as 
as this is dynamically rendered depending on the transactions name (logic in the Transactions Detail Screen)
*/

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles";
import TransactionsScreen from "../../screens/TransactionsScreen";
import TransactionDetailScreen from "../../screens/TransactionDetailScreen";

export default function TransactionStackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
    screenOptions={{
      tabBarStyle: styles.tabbar,
      headerShown: true,
    }}>
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
