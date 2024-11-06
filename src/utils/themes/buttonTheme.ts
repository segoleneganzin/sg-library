const baseButtonStyle = {
  border: 'none',
  boxShadow: `none`,
};

export const buttonTheme = {
  default: {
    ...baseButtonStyle,
    backgroundColor: '#007bff',
    textColor: '#ffffff',
  },
  dark: {
    ...baseButtonStyle,
    backgroundColor: '#6c757d',
    textColor: '#ffffff',
  },
  light: {
    ...baseButtonStyle,
    backgroundColor: '#28a745',
    textColor: '#ffffff',
  },
};
