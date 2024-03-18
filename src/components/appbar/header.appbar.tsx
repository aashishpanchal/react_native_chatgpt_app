import React from 'react';
import {RH} from '@/utils/dimensions';
import {Spaces} from '@/constants/styles';
import {StatusBar, View} from 'react-native';

const Header = React.forwardRef<View, View['props']>(
  ({style, ...props}, ref) => {
    const height = React.useMemo(() => {
      return StatusBar.currentHeight ? StatusBar.currentHeight : 24; // eslint-disable-line no-nested-ternary
    }, [StatusBar.currentHeight]);

    return (
      <>
        <View
          ref={ref}
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              height: RH(height + 75),
              paddingHorizontal: Spaces.hs.sm,
            },
            style,
          ]}
          {...props}
        />
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
      </>
    );
  },
);

Header.displayName = 'Header';

export default Header;
