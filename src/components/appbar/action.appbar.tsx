import React from 'react';
import {RH, RW} from '@/utils/dimensions';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

type Props = Omit<TouchableOpacity['props'], 'children'> & {
  render: (props: {size: number; color: string}) => React.ReactNode;
};

const Action = React.forwardRef<TouchableOpacity, Props>(
  ({style, render, ...props}, ref) => {
    const {colors} = useTheme();

    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.8}
        style={[{width: RW(30), height: RH(30), padding: 1}, style]}
        {...props}
        children={render({size: RW(25), color: colors.text})}
      />
    );
  },
);

Action.displayName = 'Action';

export default Action;
