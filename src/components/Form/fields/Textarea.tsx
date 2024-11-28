import { StyledTextarea } from '../index.styles';
import { I_FieldProps } from '../index.types';

const Textarea: React.FC<I_FieldProps> = ({
  fieldName,
  field,
  register,
  fieldErrorClass,
  handleChange,
  finalTheme,
}) => {
  const {
    hidden = false,
    rows = 3,
    cols = 33,
    isRequired = true,
    pattern = undefined,
    fieldClass = '',
    autocomplete = 'on',
    placeholder = '',
  } = field;

  return (
    <StyledTextarea
      id={fieldName}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      autoComplete={autocomplete}
      className={`sg-library__textarea ${fieldClass}  ${
        hidden && ' hidden'
      } ${fieldErrorClass(fieldName)}`}
      {...register(fieldName, {
        required: isRequired,
        pattern: pattern,
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

export default Textarea;
