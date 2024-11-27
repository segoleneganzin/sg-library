import { UseFormRegister } from 'react-hook-form';
import { I_Field } from '../../utils/generalTypes';
import { I_Theme, T_theme } from '../../utils/themes/themes.types';

export interface I_FormProps {
  formId?: string;
  fieldsConfig?: { [key: string]: I_Field };
  title?: string;
  subtitle?: string;
  btnText: string;
  onSubmitFunction: (data: { [key: string]: any }) => void;
  validationMessage?: string;
  errorMessage?: string;
  fieldNames: string[];
  fieldValue?: { [key: string]: any };
  onFieldChange?: (name: string, value: string) => void;
  theme?: T_theme; // Optional theme for the button (e.g., 'light', 'dark')
  customTheme?: Partial<I_Theme>; // Custom theme to override the default button styles
}

// **************************field
export interface I_FieldProps {
  fieldName: string;
  field: I_Field;
  register: UseFormRegister<any>;
  fieldErrorClass: (fieldName: string) => string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customTheme: I_Theme; // Custom theme to override the default button styles
}
