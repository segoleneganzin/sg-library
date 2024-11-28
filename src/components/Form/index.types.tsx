import { UseFormRegister } from 'react-hook-form';
import { I_Theme, T_theme } from '../../utils/themes/themes.types';
import { FieldErrors } from 'react-hook-form';
import { ValidationRule } from 'react-hook-form';

type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'url'
  | 'tel'
  | 'number'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'range'
  | 'color'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'hidden'
  | 'submit'
  | 'button'
  | 'image';

type InputTag = 'select' | 'input' | 'textarea';

// for radio button and checkbox
export interface I_Option {
  label: string;
  value: string;
  checked?: boolean;
}

export interface I_Field {
  tag: InputTag;
  type?: InputType;
  label?: string;
  isRequired?: boolean;
  fieldErrorMessage?: string;
  fieldClass?: string;
  defaultValue?: string | number;
  hidden?: boolean;
  pattern?: ValidationRule<RegExp>;
  options?: I_Option[];
  minLength?: number;
  maxLength?: number;
  size?: number;
  step?: any;
  rows?: number;
  cols?: number;
  autocomplete?: any;
  placeholder?: string;
}

export interface I_FieldError {
  type: 'required' | 'pattern';
  message?: string;
}

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

// **************************fieldContainer

export interface I_FieldContainerProps {
  children?: React.ReactNode;
  field: I_Field;
  fieldName: string;
  errors: FieldErrors;
  customTheme: I_Theme; // Custom theme to override the default button styles
}

// **************************field
export interface I_FieldProps {
  fieldName: string;
  field: I_Field;
  register: UseFormRegister<any>;
  fieldErrorClass: (fieldName: string) => string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  finalTheme: I_Theme; // Custom theme to override the default button styles
}
