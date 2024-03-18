import React from 'react';
import {View} from 'react-native';
import styles from './about.styles';
import Text from '@/components/text';
import Appbar from '@/components/appbar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Logo from '@/components/logo';
import {RootStackScreenProps} from '@/typings/navigator';

export default function AboutScreen({
  navigation,
}: RootStackScreenProps<'About'>) {
  const onBack = () => navigation.goBack();

  return (
    <View style={{flex: 1}}>
      {/* header */}
      <Appbar.Header>
        <Appbar.Action
          render={props => <AntDesign name="close" {...props} size={22} />}
          onPress={onBack}
        />
      </Appbar.Header>
      {/* main content */}
      <View style={styles.container}>
        <View style={styles.logo_container}>
          <Logo size={100} />
          <Text style={styles.logo_title}>ChatGPT</Text>
        </View>

        {/* information container */}
        <View>
          <View style={styles.text_card}>
            <Text style={styles.sm_title}>Custom Instructions</Text>
            <Text style={styles.lg_title}>
              What would you like ChatGPT to know about you to provide better
              responses?
            </Text>
          </View>
          <Text style={styles.sub_title}>
            How would you like ChatGPT to respond?
          </Text>
          <View style={styles.text_card}>
            <Text style={styles.sm_title}>Model info</Text>
            <Text style={styles.lg_body}>
              Default (GPT-3.5){'\n'}Our fastest model, great for meet everyday
              tasks.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
