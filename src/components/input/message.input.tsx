import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {IconButton} from '../button';
import Feather from 'react-native-vector-icons/Feather';
import {FontSize, Fonts, Spaces} from '@/constants/styles';
import {useTheme} from '@react-navigation/native';

export default function MessageInput() {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          {
            color: colors.text,
            backgroundColor: colors.primary,
          },
        ]}
        multiline
        placeholderTextColor={colors.text}
        placeholder="Message ChatGPT..."
      />
      <IconButton
        render={props => <Feather name="send" {...props} />}
        size={25}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spaces.vs.sm,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingVertical: Spaces.vs.sm,
    paddingHorizontal: Spaces.vs.md,
    borderRadius: 50 / 2,
    fontSize: FontSize.md,
    fontFamily: Fonts.medium,
    elevation: 2,
  },
});
