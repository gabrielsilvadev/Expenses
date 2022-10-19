import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View,  StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Home } from "../screens/Home";
import { NewExpenses } from "../screens/NewExpenses";
import { User } from "../screens/User";
import { ShowExpenses} from '../screens/ShowExpenses'
import {Wallet} from '../screens/Wallet'
import {Pix} from '../screens/Pix'

export function RootNavigator() {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator >
      <Stack.Screen name="Root" component={AppRoutes} options={{ headerShown: false }} />
      <Stack.Screen name="ShowExpenses" component={ShowExpenses} options={{ headerShown: false,  }} />
      <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
      <Stack.Screen name="Pix" component={Pix} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function AppRoutes() {
  const Tab = createBottomTabNavigator();
  const [showPlus, setShowPlus] = useState(true);
  return (
      <Tab.Navigator screenOptions={{tabBarShowLabel: false, 
      tabBarStyle:{
        flex: 1,
        backgroundColor: '#fff',
        position: 'absolute',
        alignContent: 'center',
        width: 327,
        bottom: 30,
        left: 40,
        alignItems: 'center',
        height: 65,
        borderRadius: 100
      }
      }}>
        <Tab.Screen
          name="Home"
          component={Home}
          listeners={{
            tabPress: (e) => {
              setShowPlus(true)
            }
          }}
          options={() => ({
            headerShown: false,
            title: '',
            tabBarActiveTintColor: '#27AE60',
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={26} color={color}  />
            )
          })}
        />
        <Tab.Screen
          name="Plus"
          component={NewExpenses}
          listeners={{
            tabPress: (e) => {
              setShowPlus(false)
            }
          }}
          options={() => ({
            headerShown: false,
            title: '',
            tabBarActiveTintColor: '#719A82',
            tabBarVisible: true,
            tabBarIcon: ({ color }) =>
              showPlus ? (
                <View style={styles.iconTabRound}>
                  <Icon name="plus" size={26} color="#fff" />
                </View>
              ) : (
                <View
                  style={[
                    styles.iconTabRound,
                    { width: 40, marginTop: '20%', opacity: 0.5, height: 40 }
                  ]}
                >
                  <Icon name="plus" size={26} color="#fff" />
                </View>
              )
          })}
        />
        <Tab.Screen
          name="User"
          component={User}
          listeners={{
            tabPress: (e) => {
              setShowPlus(true)
            }
          }}
          options={() => ({
            headerShown: false,
            title: '',
            tabBarActiveTintColor: '#27AE60',
            tabBarIcon: ({ color }) => (
              <Icon name="user" size={26} color={color} />
            )
          })}
        />
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: '#27AE60',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: '#27AE60',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5
  }
})
