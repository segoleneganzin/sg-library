import { useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { defaultFieldConfig } from '../../utils/formConfig/default-config';
import OtherField from './fields/OtherField';
import CheckField from './fields/CheckField';
import FieldContainer from '../FieldContainer';
import { I_FormProps } from './index.types';
import { I_Field } from 'src/utils/generalTypes';
import { themes } from 'src/utils/themes/themes';
import deepmerge from 'deepmerge';
import { StyledForm } from './index.styles';
import Select from '../Select';

/**
 * Form component dynamically generates a form based on provided configurations.
 */
const Form: React.FC<I_FormProps> = ({
  formId,
  fieldsConfig = defaultFieldConfig,
  title,
  subtitle,
  btnText,
  onSubmitFunction,
  validationMessage,
  errorMessage,
  fieldNames,
  fieldValue,
  onFieldChange,
  theme,
  customTheme = {},
}) => {
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
  // Destructuring properties from the useForm hook
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{ [key: string]: any }>();

  const form = useRef<HTMLFormElement>(null);

  /**
   * Effect to set initial values for fields if provided.
   * e.g. for update form
   */
  useEffect(() => {
    if (fieldValue) {
      fieldNames.forEach((fieldName) => {
        setValue(fieldName, fieldValue[fieldName]);
      });
    }
  }, [fieldNames, fieldValue, setValue]);

  /**
   * Manage onChange fields
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    onFieldChange && onFieldChange(name, value);
  };

  const handleSubmitFunction: SubmitHandler<{ [key: string]: any }> = (
    data
  ) => {
    const formData = fieldNames.reduce((acc, fieldName) => {
      acc[fieldName] = data[fieldName];
      return acc;
    }, {} as { [key: string]: any });
    onSubmitFunction(formData);
  };

  /**
   * Function to get the error class for a given field and manage if display is necessary (error or not).
   */
  const fieldErrorClass = (fieldName: string): string => {
    return errors[fieldName] ? ' sg-library__form-field--error' : '';
  };

  const renderField = (field: I_Field, commonProps: any) => {
    switch (field.type) {
      case 'select':
        return <Select {...commonProps} />;
      case 'radio':
      case 'checkbox':
        return <CheckField {...commonProps} />;
      default:
        return <OtherField {...commonProps} />;
    }
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(handleSubmitFunction)}
      className='sg-library__form'
      id={formId}
      ref={form}
      noValidate // validate by useForm hook
      $finalTheme={finalTheme} // transitional prop, not transmitted to DOM
    >
      {/* Titles section */}
      {(title || subtitle) && (
        <div className='sg-library__form-section-title'>
          {title && <h2 className='sg-library__form-title'>{title}</h2>}
          {subtitle && <p className='sg-library__form-subtitle'>{subtitle}</p>}
        </div>
      )}
      {/* form content (fields + validation message + submit button) */}
      <div className='sg-library__form-content'>
        {fieldNames.map((fieldName, index) => {
          const field = fieldsConfig[fieldName];
          const commonProps = {
            fieldName,
            field,
            register,
            fieldErrorClass,
            handleChange,
          };

          return (
            <FieldContainer
              field={field}
              fieldName={fieldName}
              errors={errors}
              key={index}
            >
              {renderField(field, commonProps)}
            </FieldContainer>
          );
        })}

        <p className='sg-library__form-message--validation'>
          {validationMessage}
        </p>
        <p className='sg-library__form-message--error'>{errorMessage}</p>
        <button type='submit' className='sg-library__form-btn'>
          {btnText}
        </button>
      </div>
    </StyledForm>
  );
};

export default Form;
