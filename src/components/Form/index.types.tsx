import { I_Field } from '../../utils/generalTypes';
import { I_Theme, T_theme } from '../../utils/themes/themes.types';

export interface I_FormProps {
  formId: string;
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
