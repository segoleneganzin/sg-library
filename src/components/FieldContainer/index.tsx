import { StyledFieldContainer } from './index.styles';
import { I_FieldContainerProps } from './index.types';
import { themes } from '../../utils/themes/themes';
import deepmerge from 'deepmerge';

const FieldContainer: React.FC<I_FieldContainerProps> = ({
  children,
  field,
  fieldName,
  errors,
  theme, // Predefined theme (e.g., 'light', 'dark')
  customTheme = {},
}) => {
  const {
    label,
    type,
    fieldErrorMessage = 'Veuillez renseigner ce champs',
    hidden = false,
  } = field;

  // Apply the selected theme, defaulting to 'light' if no theme is provided
  const appliedTheme = themes[theme || 'light'];

  // Merge the selected theme with any custom theme passed as props
  // The deepmerge function ensures that nested theme properties are merged properly
  const finalTheme = {
    ...appliedTheme,
    general: deepmerge(appliedTheme.general, customTheme.general || {}),
    button: deepmerge(appliedTheme.button, customTheme.button || {}),
  };

  const getFieldLabel = () => {
    return type === 'checkbox' || type === 'radio' ? (
      <p className='sg-library__form-label'>{label}</p>
    ) : (
      <label htmlFor={fieldName} className='sg-library__form-label'>
        {label}
      </label>
    );
  };

  return (
    <StyledFieldContainer
      className={`sg-library__form-field-container ${hidden ? 'hidden' : ''}`}
      $finalTheme={finalTheme} // transitional prop, not transmitted to the DOM
    >
      {/* label */}
      {label && getFieldLabel()}
      {/* content - manage into Form */}
      {children}
      {/* error message */}
      <p className='sg-library__form-field-container--error'>
        {errors[fieldName]?.type === 'required' && <>{fieldErrorMessage}</>}
        {errors[fieldName]?.type === 'pattern' && <>Champ invalide</>}
      </p>
    </StyledFieldContainer>
  );
};

export default FieldContainer;
