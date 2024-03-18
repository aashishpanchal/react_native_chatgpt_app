import {StyleSheet} from 'react-native';
import {FontSize, Fonts, Spaces} from '@/constants/styles';
import {RH} from '@/utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spaces.hs.md,
    paddingVertical: Spaces.vs.sm,
    gap: Spaces.hs.lg,
  },
  logo_container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spaces.hs.sm,
  },
  logo_title: {
    fontSize: FontSize.lg,
    fontFamily: Fonts.semiBold,
  },
  text_card: {
    gap: Spaces.hs.lg,
  },
  sm_title: {
    letterSpacing: 0.1,
    fontSize: FontSize.sm,
    fontFamily: Fonts.semiBold,
  },
  lg_title: {
    lineHeight: RH(22),
    fontSize: FontSize.md,
    fontFamily: Fonts.semiBold,
  },
  sub_title: {
    fontSize: FontSize.md,
    fontFamily: Fonts.semiBold,
    paddingVertical: Spaces.vs.lg,
  },
  lg_body: {
    lineHeight: RH(22),
    fontSize: FontSize.md,
    fontFamily: Fonts.regular,
  },
});

export default styles;
