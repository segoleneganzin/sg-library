export interface I_Theme {
  // general
  textColor: string;
  fontSize: string;
  radius: string;
  errorColor: string;
  // modal component
  overlayBackgroundColor: string;
  modalBackgroundColor: string;
  modalBorder: string;
  modalBoxShadow: string;
  // button component
  btnBackgroundColor: string;
  btnTextColor: string;
  btnBorder: string;
  btnBoxShadow: string;
}

export const defaultTheme: I_Theme = {
  // general
  textColor: '#ffffff',
  fontSize: '1rem',
  radius: '10px',
  errorColor: 'rgb(248, 64, 64)',
  // modal component
  overlayBackgroundColor: 'rgba(0, 0, 0, 0.7)',
  modalBackgroundColor: '#6c757d',
  modalBorder: 'none',
  modalBoxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
  // button component
  btnBackgroundColor: '#007bff',
  btnTextColor: '#ffffff',
  btnBorder: 'none',
  btnBoxShadow: `none`,
};
