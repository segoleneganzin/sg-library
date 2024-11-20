const baseButtonStyle = {
  border: 'none',
  boxShadow: 'none',
  textColor: 'rgb(247, 235, 235)', // light grey
};

export const buttonTheme = {
  light: {
    ...baseButtonStyle,
    backgroundColor: 'rgb(4, 78, 139)', // blue
  },
  dark: {
    ...baseButtonStyle,
    backgroundColor: 'rgb(74, 75, 75)', // dark grey
    textColor: 'rgb(200, 200, 200)', // grey
  },
};
