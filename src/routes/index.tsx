import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native'
import React from 'react'

import LinkingConfiguration from '../routes/LinkingConfiguration'
import { RootNavigator } from './app.routes'

export function Routes({ colorScheme }) {
  return (
    <NavigationContainer
      independent={true}
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}
