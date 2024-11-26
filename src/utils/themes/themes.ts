import { I_Theme, T_theme } from './themes.types';
import { generalTheme } from './generalTheme';
import { modalTheme } from './modalTheme';
import { buttonTheme } from './buttonTheme';
import { fieldContainerTheme } from './fieldContainerTheme';
import { fieldTheme } from './fieldTheme';
import { formTheme } from './formTheme';

export const themes: { [key in T_theme]: I_Theme } = {
  dark: {
    general: generalTheme.dark,
    modal: modalTheme.dark,
    button: buttonTheme.dark,
    fieldContainer: fieldContainerTheme.dark,
    field: fieldTheme.dark,
    form: formTheme.dark,
  },
  light: {
    general: generalTheme.light,
    modal: modalTheme.light,
    button: buttonTheme.light,
    fieldContainer: fieldContainerTheme.light,
    field: fieldTheme.light,
    form: formTheme.light,
  },
};
