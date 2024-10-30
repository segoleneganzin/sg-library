import { I_Theme, defaultTheme } from '../../utils/Theme';

interface I_ButtonProps {
  handleClick: () => void;
  classname?: string;
  content: string | React.ReactNode;
  ariaLabel?: string;
  theme?: string; // Optional theme for the modal (e.g., 'light', 'dark')
  customTheme?: Partial<I_Theme>;
}

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
