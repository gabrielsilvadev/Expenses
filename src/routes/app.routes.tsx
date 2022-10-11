import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
const Tab = createBottomTabNavigator();
import { Home } from "../screens/Home";
import { NewOrder } from "../screens/NewExpenses";
import { User } from "../screens/User";

export function AppRoutes() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator  >
        <Tab.Screen name="Home" component={Home} 
         options={() => ({
          headerShown: false,
          title: "",
          tabBarActiveTintColor: '#27AE60',
          tabBarIcon: ({ color }) => <Icon name="home" size={26} color={color} />,
        })}/>
        <Tab.Screen
          name="TabMain"
          component={NewOrder}
          options={() => ({
            headerShown: false,
            title: "",
            tabBarActiveTintColor: '#719A82',
            tabBarIcon: ({ color }) => (
              <View  style={styles.iconTabRound}>
                <Icon name="plus" size={26} color="#fff" />
              </View>
            ),
          })}
        />
        <Tab.Screen name="User" component={User} 
        options={() => ({
          headerShown: false,
          title: "",
          tabBarActiveTintColor: '#27AE60',
          tabBarIcon: ({ color }) => <Icon name="user" size={26} color={color} />,
        })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: "row",
    backgroundColor: "#27AE60",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowColor: "#27AE60",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
});
