import { I_FieldProps } from '../index.types';
import { StyledCheckField, StyledCheckFieldsContainer } from '../index.styles';

/**
 * CheckField component renders a set of radio buttons or checkboxes, based on the provided configuration.
 */
const CheckField: React.FC<I_FieldProps> = ({
  fieldName,
  field,
  register,
  handleChange,
  finalTheme,
}) => {
  const { options, type, fieldClass = ' ', isRequired = true } = field;

  return (
    <StyledCheckFieldsContainer
      className={`sg-library__${type}s`}
      $finalTheme={finalTheme}
    >
      {options?.map((option, index) => {
        const { value, label, checked = false } = option;
        return (
          <StyledCheckField
            key={index}
            className={`sg-library__${type} ${fieldClass}
            `}
            $finalTheme={finalTheme}
          >
            <input
              id={value}
              type={type}
              defaultChecked={checked || false}
              {...register(fieldName, {
                required: isRequired,
                onChange: (e) => {
                  if (handleChange) {
                    handleChange(e);
                  }
                },
              })}
              value={value}
            />
            <label htmlFor={value}>{label}</label>
          </StyledCheckField>
        );
      })}
    </StyledCheckFieldsContainer>
  );
};

export default CheckField;
