import React from 'react';
import MyApp from '@/my-app';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <MyApp />
    </>
  );
}
