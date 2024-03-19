import deepmerge from 'deepmerge';
import {DarkTheme as NativeDarkTheme} from '@react-navigation/native';

// chat gpt dark theme
export const DarkTheme = deepmerge(NativeDarkTheme, {
  dark: true,
  colors: {
    text: '#fff',
    border: '#2d2d2d',
    primary: '#252524',
    background: '#0d0d0d',
  },
});
