import styles from "./styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TransactionsScreen from "../../screens/TransactionsScreen";
import SummaryScreen from "../../screens/SummaryScreen";
import PlusIconButton from "../PlusIconButton";

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
        }}
      >
        <Tab.Screen
          name="Transactions"
          component={TransactionsScreen}
          options={{
            headerRight: () => <PlusIconButton />,
            title: "Transactions",
            headerStyle: {
              backgroundColor: "#FFFFFF",
            },
            headerTintColor: "#009E4D",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarActiveTintColor: "#000000",
            tabBarInactiveTintColor: "#FFFFFF",
            tabBarIcon: ({ color }) => {
              return (
                <MaterialCommunityIcons
                  name={"book-clock"}
                  color={color}
                  size={28}
                />
              );
            },
          }}
        >
        </Tab.Screen>


        
        <Tab.Screen
          name="Summary"
          component={SummaryScreen}
          options={() => ({
            title: "Summary",
            headerStyle: {
              backgroundColor: "#FFFFFF",
            },
            headerTintColor: "#009E4D",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => <PlusIconButton />,
            tabBarActiveTintColor: "#000000",
            tabBarInactiveTintColor: "#FFFFFF",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name={"account"} color={color} size={28} />
            ),
          })}
        >
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
  