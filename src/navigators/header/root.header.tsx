import React from 'react';
import {Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import Assets from '@/constants/Assets';
import Appbar from '@/components/appbar';

export default function RootHeader(props: DrawerHeaderProps) {
  const {colors} = useTheme();

  const onOpenDrawer = () => props.navigation.openDrawer();

  const onAboutNavigate = () => props.navigation.navigate('About');

  return (
    <Appbar.Header>
      <Appbar.Action
        onPress={onOpenDrawer}
        render={() => (
          <Image
            source={Assets.MENU}
            resizeMode="cover"
            style={{
              width: '90%',
              height: '90%',
              tintColor: colors.text,
            }}
          />
        )}
      />
      <Appbar.Content title="ChatGPT" />
      <Appbar.Action
        onPress={onAboutNavigate}
        render={props => <Feather name="coffee" {...props} />}
      />
    </Appbar.Header>
  );
}
