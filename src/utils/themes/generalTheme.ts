const baseGeneralStyle = {
  fontSize: '1rem',
  radius: '10px',
};

export const generalTheme = {
  default: {
    ...baseGeneralStyle,
    textColor: '#ffffff',
    errorColor: 'rgb(248, 64, 64)',
  },
  dark: {
    ...baseGeneralStyle,
    textColor: '#ffffff',
    errorColor: 'rgb(248, 64, 64)',
  },
  light: {
    ...baseGeneralStyle,
    textColor: '#000000',
    errorColor: 'rgb(248, 64, 64)',
  },
};
