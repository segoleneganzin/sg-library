import { useRef, useEffect } from 'react';
import { I_ModalProps } from './index.types';
import IconClose from '../icons/IconClose';
import Button from '../Button';
import useBodyScrollLock from './hooks/useBodyScrollLock';
import {
  StyledModalOverlay,
  StyledModal,
  StyledModalTitle,
  StyledModalCloseCross,
  StyledModalChildren,
} from './index.styles';
import { themes } from '../../utils/themes/themes';
import deepmerge from 'deepmerge';

/**
 * Modal component provides a dialog interface that can be toggled open or closed.
 * It displays content and, by default a cross close button on top right.
 * Optionally, it can have a title, a bottom custom button text, a style theme.
 * It is possible to add custom css for styledComponent with customTheme.
 * It is possible to unset the escape for close functionality
 * It is possible to unset the click on overlay for close functionality
 * It is possible to unset the close button
 * It is possible to set a fade duration for smoothly diplay
 */
const Modal: React.FC<I_ModalProps> = ({
  isOpen,
  toggleModal,
  escapeClose = true,
  overlayClickClose = true,
  showClose = true,
  title,
  btnText,
  theme = 'default',
  customTheme = {},
  fadeDuration = 0,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useBodyScrollLock(isOpen);

  // Function to handle overlay clicks to close the modal
  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (overlayClickClose && modalRef.current === event.target) {
      toggleModal();
    }
  };
  const appliedTheme = themes[theme];
  const finalTheme = {
    ...appliedTheme,
    general: deepmerge(appliedTheme.general, customTheme.general || {}),
    modal: deepmerge(appliedTheme.modal, customTheme.modal || {}),
  };

  // Effect to handle closing the modal with the Escape key
  useEffect(() => {
    // Function to handle closing the modal with the Escape key
    const handleEscKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && escapeClose && isOpen) {
        toggleModal();
      }
    };
    if (escapeClose && isOpen) {
      document.addEventListener('keydown', handleEscKey);
      return () => {
        document.removeEventListener('keydown', handleEscKey);
      };
    }
  }, [isOpen, escapeClose, toggleModal]);

  return (
    // Overlay of modal
    <StyledModalOverlay
      ref={modalRef}
      onClick={handleOverlayClick}
      data-testid='modal-overlay'
      className={`sg-library__modal`}
      aria-hidden={!isOpen}
      $finalTheme={finalTheme} // transitional prop, not transmitted to DOM
      $isOpen={isOpen} // transitional prop, not transmitted to DOM
      $fadeDuration={fadeDuration} // transitional prop, not transmitted to DOM
    >
      {/* Modal window*/}
      <StyledModal
        className={`sg-library__modal-dialog`}
        aria-describedby={title ? title : 'modal'}
        data-testid='modal-dialog'
        $finalTheme={finalTheme} // transitional prop, not transmitted to DOM
        $isOpen={isOpen} // transitional prop, not transmitted to DOM
        $fadeDuration={fadeDuration} // transitional prop, not transmitted to DOM
      >
        {/* Optional title */}
        {title && (
          <StyledModalTitle
            className='sg-library__modal-title'
            id='modalTitle'
            data-testid='modal-title'
          >
            {title}
          </StyledModalTitle>
        )}

        {/* Close button cross */}
        {showClose && (
          <StyledModalCloseCross
            className='sg-library__modal-close-cross'
            onClick={toggleModal}
            data-testid='modal-close-cross'
            aria-label='Close modal'
            autoFocus
            $finalTheme={finalTheme} // transitional prop, not transmitted to DOM
          >
            <IconClose />
          </StyledModalCloseCross>
        )}

        {/* Modal content */}
        <StyledModalChildren className='sg-library__modal-children'>
          {children}
        </StyledModalChildren>

        {/* Optional button */}
        {btnText && (
          <Button
            handleClick={toggleModal}
            classname='sg-library__modal-btn'
            content={btnText}
            customTheme={finalTheme}
          />
        )}
      </StyledModal>
    </StyledModalOverlay>
  );
};

export default Modal;
