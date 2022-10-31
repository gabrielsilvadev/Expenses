import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native'
import React from 'react'

import { RootNavigator } from './app.routes'
import LinkingConfiguration from './LinkingConfiguration'

export function Routes() {
  return (
    <NavigationContainer independent={true} linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  )
}
