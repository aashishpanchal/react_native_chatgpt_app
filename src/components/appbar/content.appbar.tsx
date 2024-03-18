import Text from '../text';
import {StyleSheet} from 'react-native';
import {FontSize, Fonts, Spaces} from '@/constants/styles';

type ContentProps = {
  title: string;
};

export default function Content({title}: ContentProps) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    flexGrow: 1,
    fontSize: FontSize.lg,
    fontFamily: Fonts.semiBold,
    marginLeft: Spaces.vs.sm,
  },
});
