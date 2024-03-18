import {StyleSheet} from 'react-native';
import {FontSize, Fonts, Spaces} from '@/constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    paddingHorizontal: Spaces.hs.md,
    paddingVertical: Spaces.vs.sm,
  },
  main_container: {
    flexGrow: 1,
    gap: Spaces.vs.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_title: {
    fontSize: FontSize.xl,
    fontFamily: Fonts.semiBold,
  },
});

export default styles;
