import React from "react";
import { NavigationContainer,  DefaultTheme, DarkTheme } from '@react-navigation/native';
import LinkingConfiguration from '../routes/LinkingConfiguration'
import { RootNavigator } from './app.routes';

export function Routes({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer  linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator/>
    </NavigationContainer>
  );
}
