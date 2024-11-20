import { themes } from '../../utils/themes/themes';
import { StyledButton } from './index.styles';
import { I_ButtonProps } from './index.types';
import deepmerge from 'deepmerge';

/**
 * Button component that renders a styled button with customizable themes and content.
 * It allows applying both predefined and custom themes.
 */
const Button: React.FC<I_ButtonProps> = ({
  handleClick,
  classname = '',
  content,
  ariaLabel = '',
  theme, // Predefined theme (e.g., 'light', 'dark')
  customTheme = {},
}) => {
  // Apply the selected theme, defaulting to 'light' if no theme is provided
  const appliedTheme = themes[theme || 'light'];

  // Merge the selected theme with any custom theme passed as props
  // The deepmerge function ensures that nested theme properties are merged properly
  const finalTheme = {
    ...appliedTheme,
    general: deepmerge(appliedTheme.general, customTheme.general || {}),
    button: deepmerge(appliedTheme.button, customTheme.button || {}),
  };

  return (
    <StyledButton
      className={classname ? `sg-library__btn ${classname}` : `sg-library__btn`}
      onClick={handleClick}
      aria-label={ariaLabel}
      data-testid='sg-library-button'
      $finalTheme={finalTheme} // transitional prop, not transmitted to the DOM
    >
      {content}
    </StyledButton>
  );
};

export default Button;
