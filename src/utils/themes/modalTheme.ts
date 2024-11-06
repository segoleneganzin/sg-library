const baseModalStyle = {
  width: 'fit-content',
};

export const modalTheme = {
  default: {
    ...baseModalStyle,
    overlayBackgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background for overlay
    backgroundColor: 'rgb(108, 117, 125)', // Gray background color
    border: 'none', // No border
    boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1),   // Shadow effect with opacity
                0 10px 10px -5px rgba(0, 0, 0, 0.04)`, // Subtle shadow for depth
  },
  dark: {
    ...baseModalStyle,
    overlayBackgroundColor: 'rgba(0, 0, 0, 0.9)', // Darker semi-transparent black for overlay
    backgroundColor: 'rgb(52, 58, 64)', // Dark background color
    border: 'none', // No border
    boxShadow: `0 20px 30px -10px rgba(0, 0, 0, 0.3), // Stronger shadow effect for dark mode
                0 10px 10px -5px rgba(0, 0, 0, 0.1)`, // Subtle shadow for depth
  },
  light: {
    ...baseModalStyle,
    overlayBackgroundColor: 'rgba(255, 255, 255, 0.7)', // Light semi-transparent background for overlay
    backgroundColor: 'rgb(248, 249, 250)', // Light background color
    border: '1px solid rgb(221, 221, 221)', // Light gray border color
    boxShadow: `0 10px 15px rgba(0, 0, 0, 0.1),         // Light shadow for better separation
                0 4px 6px rgba(0, 0, 0, 0.1)`, // Subtle shadow for depth
  },
};
