import styles from "./styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SummaryScreen from "../../screens/SummaryScreen";
import TransactionStackNavigator from "../TransactionStackNavigator";

/*
Nested navigation
Tab Navigator with both the Summary Screen and The transactions Screen
In the Transactions screen its custom stack navigator is nested
*/

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
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTintColor: "#AEFF00",
          headerTitleStyle: {
            fontWeight: "bold",
          },
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
