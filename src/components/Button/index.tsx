import { themes } from '../../utils/themes/themes';
import { StyledButton } from './index.styles';
import { I_ButtonProps } from './index.types';
import deepmerge from 'deepmerge';

/**
 * Button component that renders a styled button with customizable themes and content.
 */
const Button: React.FC<I_ButtonProps> = ({
  handleClick,
  classname = '',
  content,
  ariaLabel = '',
  theme = 'default',
  customTheme = {},
}) => {
  const appliedTheme = themes[theme];

  // Merge the applied theme with any custom theme passed, allowing for customizations
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
