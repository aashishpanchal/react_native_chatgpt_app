import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const RW = (dimension: number) => {
  return wp((dimension / 375) * 100 + '%');
};

export const RH = (dimension: number) => {
  return hp((dimension / 812) * 100 + '%');
};

export const RF = (dimension: number) => {
  return hp((dimension / 812) * 100 + '%');
};

export const heightPercent = (percent: number | string) => {
  return hp(percent);
};

export const widthPercent = (percent: number | string) => {
  return wp(percent);
};

export const fontPercent = (percent: number | string) => {
  return hp(percent);
};
