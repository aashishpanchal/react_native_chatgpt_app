import SplashScreen from '@/screens/splash.screen';
import {RootStackParamList} from '@/typings/navigator';
import RootDrawerNavigator from './root-drawer.navigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from '@/screens/about/about.screen';

// native stack
const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}>
      <RootStack.Screen name="About" component={AboutScreen} />
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="Drawer" component={RootDrawerNavigator} />
    </RootStack.Navigator>
  );
}
