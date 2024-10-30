export interface I_Theme {
  primary: string;
  secondary: string;
  textColor: string;
  fontSize: string;
  overlayBackgroundColor: string;
  modalBackgroundColor: string;
}

// Theme default value
export const defaultTheme: I_Theme = {
  primary: '#007bff',
  secondary: '#6c757d',
  textColor: 'rgba(0, 0, 0)',
  fontSize: '16px',
  overlayBackgroundColor: 'rgba(0, 0, 0, 0.7)',
  modalBackgroundColor: 'rgb(236, 234, 234)',
};
