import { I_Field } from '../../utils/generalTypes';
import { I_Theme, T_theme } from '../../utils/themes/themes.types';
import { FieldErrors } from 'react-hook-form';

export interface I_FieldContainerProps {
  children?: React.ReactNode;
  field: I_Field;
  fieldName: string;
  errors: FieldErrors;
  theme?: T_theme; // Optional theme for the button (e.g., 'light', 'dark')
  customTheme?: Partial<I_Theme>; // Custom theme to override the default button styles
}
