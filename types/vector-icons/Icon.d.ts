import * as React from 'react';
import {
  ColorValue,
  TabBarIOSItemProps,
  TextProps,
  TextStyle,
  TouchableHighlightProps,
  TouchableNativeFeedbackProps,
  ViewStyle,
} from 'react-native';

export interface IconProps<GLYPHS extends string> extends TextProps {
  /**
   * Size of the icon, can also be passed as fontSize in the style object.
   *
   * @default 12
   */
  size?: number | undefined;

  /**
   * Name of the icon to show
   *
   * See Icon Explorer app
   * {@link https://github.com/oblador/react-native-vector-icons/tree/master/Examples/IconExplorer}
   */
  name: GLYPHS;

  /**
   * Color of the icon
   */
  color?: ColorValue | number | undefined;
}

export interface IconButtonProps<GLYPHS extends string>
  extends IconProps<GLYPHS>,
    TouchableHighlightProps,
    TouchableNativeFeedbackProps {
  /**
   * Text and icon color
   * Use iconStyle or nest a Text component if you need different colors.
   *
   * @default 'white'
   */
  color?: ColorValue | number | undefined;

  /**
   * Border radius of the button
   * Set to 0 to disable.
   *
   * @default 5
   */
  borderRadius?: number | undefined;

  /**
   * Styles applied to the icon only
   * Good for setting margins or a different color.
   *
   * @default {marginRight: 10}
   */
  iconStyle?: TextStyle | undefined;

  /**
   * Style prop inherited from TextProps and TouchableWithoutFeedbackProperties
   * Only exist here so we can have ViewStyle or TextStyle
   */
  style?: ViewStyle | TextStyle | undefined;

  /**
   * Background color of the button
   *
   * @default '#007AFF'
   */
  backgroundColor?: ColorValue | number | undefined;
}

export type ImageSource = any;

export interface TabBarItemIOSProps extends TabBarIOSItemProps {
  /**
   * Name of the default icon (similar to TabBarIOS.Item icon)
   */
  iconName: string;

  /**
   * Name of the selected icon (similar to TabBarIOS.Item selectedIcon)
   *
   * Defaults to iconName
   */
  selectedIconName?: string | undefined;

  /**
   * Size of the icon
   *
   * @default 30
   */
  iconSize?: number | undefined;

  /**
   * Color of the icon
   */
  iconColor?: ColorValue | number | undefined;

  /**
   * Color of the selected icon.
   *
   * Defaults to iconColor
   */
  selectedIconColor?: string | undefined;
}

export type GlyphMap<G extends string> = {
  [K in G]: number | string;
};

export interface Icon<G extends string, FN extends string> {
  getImageSource(
    name: string,
    size?: number,
    color?: ColorValue | number,
  ): Promise<ImageSource>;
  getImageSourceSync(
    name: string,
    size?: number,
    color?: ColorValue | number,
  ): ImageSource;
  getFontFamily(): FN;
  getRawGlyphMap(): GlyphMap<G>;
  loadFont(file?: string): Promise<void>;
  hasIcon(name: G): boolean;

  new (props: IconProps<G>): React.Component<IconProps<G>>;

  Button: React.ComponentClass<IconButtonProps<G>>;
  TabBarItem: React.ComponentClass<TabBarItemIOSProps, any>;
  TabBarItemIOS: React.ComponentClass<TabBarItemIOSProps, any>;
}

export namespace Icon {
  class TabBarItem extends React.Component<TabBarItemIOSProps, any> {}
  class TabBarItemIOS extends React.Component<TabBarItemIOSProps, any> {}
}
