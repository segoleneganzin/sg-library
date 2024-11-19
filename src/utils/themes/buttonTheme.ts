const baseButtonStyle = {
  border: 'none',
  boxShadow: 'none',
  textColor: 'rgb(247, 235, 235)', // Light text color for better contrast
};

export const buttonTheme = {
  light: {
    ...baseButtonStyle,
    backgroundColor: 'rgb(4, 78, 139)', // Green background color for light mode
  },
  dark: {
    ...baseButtonStyle,
    backgroundColor: 'rgb(74, 75, 75)', // Dark gray background color
    textColor: 'rgb(200, 200, 200)', // Light text color for better contrast
  },
};
