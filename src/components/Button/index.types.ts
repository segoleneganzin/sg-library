import { I_Theme } from '../../utils/Theme';

export interface I_ButtonProps {
  handleClick: () => void;
  classname?: string;
  content: string | React.ReactNode;
  ariaLabel?: string;
  theme?: string; // Thème optionnel pour le bouton (ex: 'light', 'dark')
  customTheme?: Partial<I_Theme>;
}
