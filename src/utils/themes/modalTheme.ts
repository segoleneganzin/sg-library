const baseModalStyle = {
  width: 'fit-content',
};

export const modalTheme = {
  default: {
    ...baseModalStyle,
    overlayBackgroundColor: 'rgba(0, 0, 0, 0.7)',
    backgroundColor: '#6c757d',
    border: 'none',
    boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1),
                  0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
  },
  dark: {
    ...baseModalStyle,
    overlayBackgroundColor: 'rgba(0, 0, 0, 0.9)',
    backgroundColor: '#343a40',
    border: 'none',
    boxShadow: `0 20px 30px -10px rgba(0, 0, 0, 0.3),
                  0 10px 10px -5px rgba(0, 0, 0, 0.1)`,
  },
  light: {
    ...baseModalStyle,
    overlayBackgroundColor: 'rgba(255, 255, 255, 0.7)',
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
    boxShadow: `0 10px 15px rgba(0, 0, 0, 0.1),
                  0 4px 6px rgba(0, 0, 0, 0.1)`,
  },
};
