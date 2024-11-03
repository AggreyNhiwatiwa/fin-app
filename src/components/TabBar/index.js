/*
Aggrey Nhiwatiwa
1152301
INFO-6132 
Lab 2
*/

/*
Nested navigation
Bottom Tab navigation for both the Transactions screen and the Summary Screen
The Transaction Tab Screen actually renders the Transactions Stack Navigator as a child
for the Transactions and Transactions Details navigation route/
Meanwhile, as the Summary Screen is a single screen, it is simply rendered as a component

As for styling, the header for the Transactions screens is handled by the TransactionsStackNavigator,
while for the summary screen it is handled here.

Libraries used:
- Material Community Icons: https://www.npmjs.com/package/react-native-vector-icons
*/

import styles from "./styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SummaryScreen from "../../screens/SummaryScreen";
import TransactionStackNavigator from "../TransactionStackNavigator";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabbar,
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="Transactions"
        options={{
          title: "Transactions",
          tabBarActiveTintColor: "#AEFF00",
          tabBarInactiveTintColor: "#FFFFFF",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name={"bank-transfer"}
                color={color}
                size={40}
              />
            );
          },
        }}
      >
        {() => <TransactionStackNavigator />}
      </Tab.Screen>

      <Tab.Screen
        name="Summary"
        component={SummaryScreen}
        options={() => ({
          title: "Summary",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#4F4F4F",
          },
          headerTintColor: "#AEFF00",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarActiveTintColor: "#AEFF00",
          tabBarInactiveTintColor: "#FFFFFF",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={"chart-arc"}
              color={color}
              size={40}
            />
          ),
        })}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
