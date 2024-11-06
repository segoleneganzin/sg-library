const baseButtonStyle = {
  border: 'none',
  boxShadow: 'none',
};

export const buttonTheme = {
  default: {
    ...baseButtonStyle,
    backgroundColor: 'rgb(0, 123, 255)', // Default blue background color
    textColor: 'rgb(247, 235, 235)', // Light text color for better contrast
  },
  dark: {
    ...baseButtonStyle,
    backgroundColor: 'rgb(108, 117, 125)', // Dark gray background color
    textColor: 'rgb(247, 235, 235)', // Light text color for better contrast
  },
  light: {
    ...baseButtonStyle,
    backgroundColor: 'rgb(40, 167, 69)', // Green background color for light mode
    textColor: 'rgb(247, 235, 235)', // Light text color for better contrast
  },
};
