import { StyledFieldContainer } from './index.styles';
import { I_FieldContainerProps } from './index.types';

const FieldContainer: React.FC<I_FieldContainerProps> = ({
  children,
  field,
  fieldName,
  errors,
  customTheme,
}) => {
  const {
    label,
    type,
    fieldErrorMessage = 'Veuillez renseigner ce champs',
    hidden = false,
  } = field;

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
      $finalTheme={customTheme} // transitional prop, not transmitted to the DOM
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
