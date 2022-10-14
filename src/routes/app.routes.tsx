import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
const Tab = createBottomTabNavigator()
import { Home } from '../screens/Home'
import { NewExpenses } from '../screens/NewExpenses'
import { ShowExpenses } from '../screens/ShowExpenses'
import { User } from '../screens/User'

export function AppRoutes() {
  const Stack = createNativeStackNavigator()

  const [showPlus, setShowPlus] = useState(true)
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
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
              <Icon name="home" size={26} color={color} />
            )
          })}
        />
        <Tab.Screen
          name="TabMain"
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
    </NavigationContainer>
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
