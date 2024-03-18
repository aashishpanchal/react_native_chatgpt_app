import {DrawerScreenProps} from '@react-navigation/drawer';
import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootDrawerParamList = {
  Chat: undefined;
};

export type RootStackParamList = {
  Drawer: NavigatorScreenParams<RootDrawerParamList> | undefined;
  Splash: undefined;
  About: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootDrawerScreenProps<T extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, T>;
