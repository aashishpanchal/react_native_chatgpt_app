import {useTheme} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';

type IconButtonProps = {
  onPress?: () => void;
  render: (props: {size: number; color: string}) => JSX.Element;
  size?: number;
  color?: string;
};

export default function IconButton({
  size = 20,
  color,
  onPress,
  render,
}: IconButtonProps) {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: colors.text}]}
      activeOpacity={0.8}>
      {render({size: size || 25, color: color || colors.primary})}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40 / 2,
  },
});
