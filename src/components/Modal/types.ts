import { I_Theme } from '../../utils/Theme';

export interface I_ModalProps {
  isOpen: boolean; // Indique si le modal est ouvert
  toggleModal: () => void; // Fonction pour basculer la visibilité du modal
  escapeClose?: boolean; // Permet de fermer le modal avec la touche Échap
  overlayClickClose?: boolean; // Permet de fermer le modal en cliquant sur l'overlay
  showClose?: boolean; // Affiche un bouton/icon de fermeture
  title?: string; // Titre optionnel pour le modal
  btnText?: string; // Texte optionnel pour un bouton dans le modal
  fadeDuration?: number; // Durée pour la transition de fondu en millisecondes
  theme?: string; // Thème optionnel pour le modal (ex: 'light', 'dark')
  customTheme?: Partial<I_Theme>;
  children: React.ReactNode; // Contenu à afficher à l'intérieur du modal
}
