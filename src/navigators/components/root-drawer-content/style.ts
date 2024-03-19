import {StyleSheet} from 'react-native';
import {Fonts, FontSize, Spaces} from '@/constants/styles';

const styles = StyleSheet.create({
  container: {flex: 1},
  search_bar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spaces.vs.sm,
    paddingHorizontal: Spaces.vs.md,
    height: 45,
    borderRadius: 100,
    elevation: 2,
  },
  search_bar_text: {
    fontSize: FontSize.md,
    fontFamily: Fonts.medium,
  },
});

export default styles;
