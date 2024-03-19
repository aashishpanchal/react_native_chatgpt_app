import React from 'react';
import styles from './style';
import {View, ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Logo from '@/components/logo';
import Text from '@/components/text';
import Divider from '@/components/divider';
import {Chat_data} from '@/constants/data';
import {FontSize} from '@/constants/styles';

export default function RootDrawerContent(props: DrawerContentComponentProps) {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      {/* search bar */}
      <View style={{margin: 10}}>
        <TouchableOpacity
          style={[styles.search_bar, {backgroundColor: colors.primary}]}
          activeOpacity={0.8}>
          <MaterialIcons name="search" size={20} />
          <Text style={styles.search_bar_text}>Search</Text>
        </TouchableOpacity>
      </View>
      {/* Drawer items */}
      <ScrollView>
        <ListItem
          active
          title="ChatGPT"
          renderIcon={({size}) => <Logo size={size} />}
        />
        <ListItem
          title="Explore GPTs"
          renderIcon={props => <MaterialIcons name="category" {...props} />}
        />
        <Divider />
        {Chat_data.map(({value, data}, index) => (
          <View key={index}>
            <Text
              style={{
                fontSize: FontSize.xs,
                paddingHorizontal: 18,
                paddingVertical: 15,
              }}>
              {value}
            </Text>
            {data.map(item => (
              <ListItem key={item.id} title={item.title} />
            ))}
            {index !== Chat_data.length - 1 && <Divider />}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const ListItem = (props: {
  title: string;
  active?: boolean;
  renderIcon?: (props: {size: number; color: string}) => JSX.Element;
}) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        gap: 15,
        paddingHorizontal: 18,
        paddingVertical: 15,
        backgroundColor: props.active ? colors.primary : 'transparent',
      }}
      activeOpacity={0.8}>
      {props.renderIcon?.({size: 25, color: colors.text})}
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};
