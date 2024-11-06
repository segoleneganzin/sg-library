const baseButtonStyle = {
  border: 'none',
  boxShadow: `none`,
};

export const buttonTheme = {
  default: {
    ...baseButtonStyle,
    backgroundColor: 'rgb(0, 123, 255)',
    textColor: 'rgb(255, 255, 255)',
  },
  dark: {
    ...baseButtonStyle,
    backgroundColor: 'rgb(108, 117, 125)',
    textColor: 'rgb(0, 0, 0)',
  },
  light: {
    ...baseButtonStyle,
    backgroundColor: 'rgb(40, 167, 69)',
    textColor: 'rgb(247, 235, 235)',
  },
};
