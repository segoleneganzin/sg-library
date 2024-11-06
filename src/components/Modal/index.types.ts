import { T_theme, I_Theme } from '../../utils/themes/themes.types';

export interface I_ModalProps {
  isOpen: boolean; // Indicates if the modal is open
  toggleModal: () => void; // Function to toggle the visibility of the modal
  escapeClose?: boolean; // Allows closing the modal with the Escape key
  overlayClickClose?: boolean; // Allows closing the modal by clicking on the overlay
  showClose?: boolean; // Displays a close button/icon
  title?: string; // Optional title for the modal
  btnText?: string; // Optional text for a button inside the modal
  fadeDuration?: number; // Duration for the fade transition in milliseconds
  theme?: T_theme; // Optional theme for the modal (e.g., 'light', 'dark')
  customTheme?: Partial<I_Theme>; // Custom theme for overriding modal styles
  children: React.ReactNode; // Content to display inside the modal
}
