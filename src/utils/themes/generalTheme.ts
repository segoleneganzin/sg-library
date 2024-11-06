const baseGeneralStyle = {
  fontSize: '1rem',
  radius: '10px',
};

export const generalTheme = {
  default: {
    ...baseGeneralStyle,
    textColor: 'rgb(255, 255, 255)', // white
    errorColor: 'rgb(248, 64, 64)', // red
  },
  dark: {
    ...baseGeneralStyle,
    textColor: 'rgb(255, 255, 255)', // white
    errorColor: 'rgb(248, 64, 64)', // red
  },
  light: {
    ...baseGeneralStyle,
    textColor: 'rgb(0, 0, 0)', // black
    errorColor: 'rgb(248, 64, 64)', // red
  },
};
