import React from 'react';
import {Text as NativeText} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {FontSize, Fonts} from '@/constants/styles';

const Text = React.forwardRef<NativeText, NativeText['props']>(
  ({style, ...props}, ref) => {
    const {colors} = useTheme();

    return (
      <NativeText
        ref={ref}
        style={[
          {
            color: colors.text,
            fontSize: FontSize.md,
            fontFamily: Fonts.medium,
          },
          style,
        ]}
        {...props}
      />
    );
  },
);

export default Text;
