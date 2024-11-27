import { I_Option } from '../../../utils/generalTypes';
import { I_FieldProps } from '../index.types';
import { StyledSelect } from '../index.styles';

const Select: React.FC<I_FieldProps> = ({
  fieldName,
  field,
  register,
  fieldErrorClass,
  handleChange,
  customTheme,
}) => {
  const {
    options,
    fieldClass = ' ',
    isRequired = true,
    defaultValue = 'Choose an option',
  } = field;

  return (
    <StyledSelect
      id={fieldName}
      className={`sg-library__select ${fieldClass} ${fieldErrorClass(
        fieldName
      )}`}
      {...register(fieldName, {
        required: isRequired,
        onChange: (e) => {
          if (handleChange) {
            handleChange(e);
          }
        },
      })}
      $finalTheme={customTheme}
    >
      <option value=''>{defaultValue}</option>
      {options?.map((option: I_Option, index: number) => {
        const { value, label } = option;
        return (
          <option value={value} key={index}>
            {label}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default Select;
