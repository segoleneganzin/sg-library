import { I_Theme, T_theme } from './themes.types';
import { generalTheme } from './generalTheme';
import { modalTheme } from './modalTheme';
import { buttonTheme } from './buttonTheme';

export const themes: { [key in T_theme]: I_Theme } = {
  default: {
    general: generalTheme.default,
    modal: modalTheme.default,
    button: buttonTheme.default,
  },
  dark: {
    general: generalTheme.dark,
    modal: modalTheme.dark,
    button: buttonTheme.dark,
  },
  light: {
    general: generalTheme.light,
    modal: modalTheme.light,
    button: buttonTheme.light,
  },
};
