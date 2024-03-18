import ChatScreen from '@/screens/chat/chat.screen';
import {RootDrawerParamList} from '@/typings/navigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootHeader from './header/root.header';

const RootDrawer = createDrawerNavigator<RootDrawerParamList>();

export default function RootDrawerNavigator() {
  return (
    <RootDrawer.Navigator
      initialRouteName="Chat"
      screenOptions={{header: props => <RootHeader {...props} />}}>
      <RootDrawer.Screen name="Chat" component={ChatScreen} />
    </RootDrawer.Navigator>
  );
}
