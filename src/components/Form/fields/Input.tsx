import { I_FieldProps } from '../index.types';
import { StyledInput } from '../index.styles';

const Input: React.FC<I_FieldProps> = ({
  fieldName,
  field,
  register,
  fieldErrorClass,
  handleChange,
  finalTheme,
}) => {
  const {
    type,
    hidden = false,
    step = null,
    isRequired = true,
    pattern = undefined,
    fieldClass = '',
    autocomplete = 'on',
    placeholder = '',
    minLength,
    maxLength,
  } = field;
  return (
    <StyledInput
      id={fieldName}
      type={type}
      step={step}
      placeholder={placeholder}
      autoComplete={autocomplete}
      className={`sg-library__input sg-library__${type}  ${fieldClass} ${
        hidden && ' hidden'
      } ${fieldErrorClass(fieldName)}`}
      {...register(fieldName, {
        required: isRequired,
        pattern: pattern,
        minLength: minLength,
        maxLength: maxLength,
        onChange: (e) => {
          if (handleChange) {
            handleChange(e);
          }
        },
      })}
      $finalTheme={finalTheme}
    />
  );
};

export default Input;
