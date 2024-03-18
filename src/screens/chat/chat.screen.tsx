import React from 'react';
import {View} from 'react-native';
// custom modules / components
import styles from './chat.styles';
import Logo from '@/components/logo';
import Text from '@/components/text';
import {MessageInput} from '@/components/input';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      {/* middle container */}
      <View style={styles.main_container}>
        <Logo size={45} />
        <Text style={styles.logo_title}>How can I help you today?</Text>
      </View>
      <MessageInput />
    </View>
  );
}
