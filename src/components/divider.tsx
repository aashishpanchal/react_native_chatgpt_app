import {useTheme} from '@react-navigation/native';
import Text from './text';
import {View, StyleSheet, TextStyle, StyleProp, ViewStyle} from 'react-native';
import {FontSize} from '@/constants/styles';

export interface DividerProps {
  middleText?: string;
  dividerColor?: string;
  style?: StyleProp<ViewStyle>;
  middleTextStyle?: StyleProp<TextStyle>;
  lineBorderStyle?: 'solid' | 'dotted' | 'dashed';
}

export default function Divider({
  style,
  middleText,
  lineBorderStyle,
  middleTextStyle,
  dividerColor,
}: DividerProps) {
  const {colors} = useTheme();

  const LineStyle = [
    {
      opacity: 0.5,
      borderStyle: lineBorderStyle,
      borderColor: dividerColor || colors.border,
    },
    styles.line,
  ];

  return (
    <View style={[styles.container, style]}>
      {!middleText ? (
        <View style={LineStyle} />
      ) : (
        <>
          <View style={LineStyle} />
          <Text style={[{fontSize: FontSize.md}, middleTextStyle]}>
            {middleText}
          </Text>
          <View style={LineStyle} />
        </>
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  line: {
    flex: 1,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderRadius: 1 / 2,
  },
});
