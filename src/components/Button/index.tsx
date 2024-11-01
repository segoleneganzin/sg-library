import { defaultTheme } from '../../utils/Theme';
import { I_ButtonProps } from './types';

const Button: React.FC<I_ButtonProps> = ({
  handleClick,
  classname = '',
  content,
  ariaLabel = '',
  theme = 'light',
  customTheme = {},
}) => {
  const buttonStyle = {
    backgroundColor: customTheme?.primary || defaultTheme.primary,
    color: customTheme?.textColor || defaultTheme.textColor,
    fontSize: customTheme?.fontSize || defaultTheme.fontSize,
  };

  return (
    <button
      className={
        classname
          ? `sg-library__btn sg-library__btn--${theme} ${classname}`
          : `sg-library__btn sg-library__btn--${theme}`
      }
      onClick={handleClick}
      aria-label={ariaLabel}
      style={buttonStyle}
    >
      {content}
    </button>
  );
};

export default Button;
