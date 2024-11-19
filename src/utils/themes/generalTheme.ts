const baseGeneralStyle = {
  fontSize: '1rem',
  radius: '5px',
  errorColor: 'rgb(181, 38, 7)', // dark red
  textColor: 'rgb(255, 255, 255)', // white
};

export const generalTheme = {
  light: {
    ...baseGeneralStyle,
    textColor: 'rgb(0, 0, 0)', // black
  },
  dark: baseGeneralStyle,
};
