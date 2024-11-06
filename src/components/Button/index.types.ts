import { T_theme, I_Theme } from '../../utils/themes/themes.types';

export interface I_ButtonProps {
  handleClick: () => void; // Function to execute when the button is clicked
  classname?: string; // Optional CSS class to customize the button's style
  content: string | React.ReactNode; // Content to display inside the button (either text or React element)
  ariaLabel?: string; // Optional aria-label attribute for accessibility
  theme?: T_theme; // Optional theme for the button (e.g., 'light', 'dark')
  customTheme?: Partial<I_Theme>; // Custom theme to override the default button styles
}
