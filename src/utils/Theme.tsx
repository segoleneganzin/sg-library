export interface I_Theme {
  // general
  primary: string;
  secondary: string;
  textColor: string;
  fontSize: string;
  radius: string;
  // modal component
  overlayBackgroundColor: string;
  modalBackgroundColor: string;
  // button component
  btnBackgroundColor: string;
  btnTextColor: string;
  btnFontSize: string;
}

export const defaultTheme: I_Theme = {
  // general
  primary: '#007bff',
  secondary: '#6c757d',
  textColor: 'rgba(0, 0, 0)',
  fontSize: '1rem',
  radius: '10px',
  // modal component
  overlayBackgroundColor: 'rgba(0, 0, 0, 0.7)',
  modalBackgroundColor: 'rgb(236, 234, 234)',
  // button component
  btnBackgroundColor: '#000000',
  btnTextColor: '#ffffff',
  btnFontSize: '1rem',
};
