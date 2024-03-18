import React from 'react';
import {DarkTheme} from './theme';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './navigators/root-stack.navigator';

export default function MyApp() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
