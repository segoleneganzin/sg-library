export type T_theme = 'default' | 'dark' | 'light';

export interface I_Theme {
  general: {
    textColor?: string;
    fontSize?: string;
    radius?: string;
    errorColor?: string;
  };
  modal: {
    width?: string;
    overlayBackgroundColor?: string;
    backgroundColor?: string;
    border?: string;
    boxShadow?: string;
  };
  button: {
    backgroundColor?: string;
    textColor?: string;
    border?: string;
    boxShadow?: string;
  };
}
