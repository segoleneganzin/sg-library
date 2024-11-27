export type T_theme = 'dark' | 'light';

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
  fieldContainer: {
    textColor?: string;
    border?: string;
  };
  field: {
    textColor?: string;
    border?: string;
    backgroundColor?: string;
    borderColor?: string;
  };
  form: {
    textColor?: string;
    border?: string;
    backgroundColor?: string;
  };
}
