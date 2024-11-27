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

// for radio button and checkbox
export interface I_Option {
  label: string;
  value: string;
  checked?: boolean;
}

export interface I_Field {
  tag: 'select' | 'input' | 'textarea';
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
  // [key: string]: any; // Can accept other properties as needed
}

export interface I_FieldError {
  type: 'required' | 'pattern';
  message?: string;
}
