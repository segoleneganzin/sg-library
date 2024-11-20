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
 * It displays content and, by default, a close button in the top right corner.
 * Optionally, it can have a title, a custom button text, and a theme (dark or light).
 * Custom CSS can be applied to the modal through the `customTheme` prop.
 * The modal can be configured to prevent closing via escape key or overlay click.
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
  theme,
  customTheme = {},
  fadeDuration = 0,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Lock body scroll when the modal is open
  useBodyScrollLock(isOpen);

  /**
   * Handles overlay click to close the modal.
   * Closes the modal only if overlayClickClose is enabled and the click target is the overlay.
   */
  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (overlayClickClose && modalRef.current === event.target) {
      toggleModal();
    }
  };

  // Apply the selected theme, defaulting to 'light' if no theme is provided
  const appliedTheme = themes[theme || 'light'];

  // Merge the selected theme with any custom theme passed as props
  // The deepmerge function ensures that nested theme properties are merged properly
  const finalTheme = {
    ...appliedTheme,
    general: deepmerge(appliedTheme.general, customTheme.general || {}),
    modal: deepmerge(appliedTheme.modal, customTheme.modal || {}),
    button: deepmerge(appliedTheme.button, customTheme.button || {}),
  };

  /**
   * Effect hook to close the modal when the Escape key is pressed.
   * Adds and cleans up the event listener for 'keydown' events.
   */
  useEffect(() => {
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
