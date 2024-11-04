import { StyledButton } from './index.styles';
import { I_ButtonProps } from './index.types';

const Button: React.FC<I_ButtonProps> = ({
  handleClick,
  classname = '',
  content,
  ariaLabel = '',
  customTheme = {},
}) => {
  return (
    <StyledButton
      className={
        classname
          ? `sg-library__btn sg-library__btn ${classname}`
          : `sg-library__btn sg-library__btn`
      }
      onClick={handleClick}
      aria-label={ariaLabel}
      $customTheme={customTheme} // transitional prop, not transmitted to DOM
    >
      {content}
    </StyledButton>
  );
};

export default Button;
