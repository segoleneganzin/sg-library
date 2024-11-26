import { UseFormRegister } from 'react-hook-form';
import { I_Field } from '../../utils/generalTypes';
import { I_Theme, T_theme } from 'src/utils/themes/themes.types';

export interface I_SelectProps {
  fieldName: string;
  field: I_Field;
  register: UseFormRegister<any>;
  fieldErrorClass: (fieldName: string) => string;
  handleChange: (name: string, value: string) => void;
  theme?: T_theme; // Optional theme for the button (e.g., 'light', 'dark')
  customTheme?: Partial<I_Theme>; // Custom theme to override the default button styles
}
