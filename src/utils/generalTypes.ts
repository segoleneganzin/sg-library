import { ValidationRule } from 'react-hook-form';

export interface I_Option {
  label: string;
  value: string;
}

export interface I_Field {
  type: 'select' | 'radio' | 'checkbox' | string;
  tag?: 'input' | 'textarea';
  label?: string;
  isRequired?: boolean;
  fieldErrorMessage?: string;
  defaultValue?: string | number;
  hidden?: boolean;
  pattern?: ValidationRule<RegExp>;
  options?: I_Option[];
  [key: string]: any; // Can accept other properties as needed
}

export interface I_FieldError {
  type: 'required' | 'pattern';
  message?: string;
}
