const baseModalStyle = {
  width: 'fit-content',
  border: 'none', // No border
};

export const modalTheme = {
  light: {
    ...baseModalStyle,
    overlayBackgroundColor: 'rgba(255, 255, 255, 0.7)', // Light semi-transparent background for overlay
    backgroundColor: 'rgb(253, 255, 252)', // Light background color
    border: '1px solid rgb(250, 250, 250)', // Light gray border color
    boxShadow: `0 10px 15px rgba(0, 0, 0, 0.1),         // Light shadow for better separation
                0 4px 6px rgba(0, 0, 0, 0.1)`, // Subtle shadow for depth
  },
  dark: {
    ...baseModalStyle,
    overlayBackgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker semi-transparent black for overlay
    backgroundColor: 'rgb(52, 58, 64)', // Dark background color
    boxShadow: `0 20px 30px -10px rgba(0, 0, 0, 0.3), // Stronger shadow effect for dark mode
                0 10px 10px -5px rgba(0, 0, 0, 0.1)`, // Subtle shadow for depth
  },
};
