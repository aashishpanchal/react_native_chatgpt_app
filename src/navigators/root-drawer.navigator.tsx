import {RW} from '@/utils/dimensions';
import {StyleSheet} from 'react-native';
import ChatScreen from '@/screens/chat/chat.screen';
import {RootDrawerParamList} from '@/typings/navigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootHeader from './components/root-header';
import RootDrawerContent from './components/root-drawer-content';

const RootDrawer = createDrawerNavigator<RootDrawerParamList>();

export default function RootDrawerNavigator() {
  return (
    <RootDrawer.Navigator
      initialRouteName="Chat"
      screenOptions={{
        header: props => <RootHeader {...props} />,
        drawerType: 'slide',
        drawerStyle: styles.drawerStyle,
      }}
      drawerContent={props => <RootDrawerContent {...props} />}>
      <RootDrawer.Screen name="Chat" component={ChatScreen} />
    </RootDrawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    width: RW(250),
  },
});
