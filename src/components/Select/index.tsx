import { I_Option } from 'src/utils/generalTypes';
import { I_SelectProps } from './index.types';
import { StyledSelect } from './index.styles';
import deepmerge from 'deepmerge';
import { themes } from 'src/utils/themes/themes';

const Select: React.FC<I_SelectProps> = ({
  fieldName,
  field,
  register,
  fieldErrorClass,
  theme,
  customTheme = {},
}) => {
  const {
    options,
    fieldClass = ' ',
    isRequired = true,
    defaultValue = 'Choose an option',
  } = field;

  // Apply the selected theme, defaulting to 'light' if no theme is provided
  const appliedTheme = themes[theme || 'light'];

  // Merge the selected theme with any custom theme passed as props
  // The deepmerge function ensures that nested theme properties are merged properly
  const finalTheme = {
    ...appliedTheme,
    general: deepmerge(appliedTheme.general, customTheme.general || {}),
    form: deepmerge(appliedTheme.form, customTheme.form || {}),
    select: deepmerge(appliedTheme.field, customTheme.field || {}),
  };

  return (
    <StyledSelect
      id={fieldName}
      className={`sg-library__select ${fieldClass} ${fieldErrorClass(
        fieldName
      )}`}
      {...register(fieldName, {
        required: isRequired,
      })}
      $finalTheme={finalTheme}
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
