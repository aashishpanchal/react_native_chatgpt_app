import Assets from '@/constants/Assets';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

export interface ILogoProps {
  size: number;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function Logo({size, style, containerStyle}: ILogoProps) {
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.container,
        {width: size, height: size, backgroundColor: colors.text},
        containerStyle,
      ]}>
      <Image
        source={Assets.APP_LOGO}
        resizeMode="cover"
        style={[
          {
            width: '80%',
            height: '80%',
          },
          style,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
