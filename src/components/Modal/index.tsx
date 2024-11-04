import { useRef, useEffect } from 'react';
import { I_ModalProps } from './index.types';
import IconClose from '../icons/IconClose';
import Button from '../Button';
import useBodyScrollLock from './hooks/useBodyScrollLock';
import { StyledModalOverlay, StyledModal } from './index.styles';

/**
 * Modal component provides a dialog interface that can be toggled open or closed.
 * It displays content and, by default a cross close button on top right.
 * Optionally, it can have a title, a bottom custom button text, a style theme.
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
  customTheme = {},
  fadeDuration = 0,
  children,
}) => {
  const modalRef = useRef(null);

  useBodyScrollLock(isOpen);

  // Function to handle overlay clicks to close the modal
  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (overlayClickClose && modalRef.current === event.target) {
      toggleModal();
    }
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
      data-testid='modal-parent'
      className={`sg-library__modal sg-library__modal ${
        isOpen ? 'sg-library__modal--open' : 'sg-library__modal--close'
      }`}
      aria-hidden={!isOpen}
      $customTheme={customTheme}
      $isOpen={isOpen}
      $fadeDuration={fadeDuration}
    >
      {/* Modal window*/}
      <StyledModal
        className={`sg-library__modal-dialog ${
          isOpen
            ? 'sg-library__modal-dialog--open'
            : 'sg-library__modal-dialog--close'
        }`}
        aria-describedby={title ? title : 'modal'}
        data-testid='modal-dialog'
        $customTheme={customTheme}
        $fadeDuration={fadeDuration}
      >
        {/* Optional title */}
        {title && (
          <h2
            className='sg-library__modal-title'
            id='modalTitle'
            data-testid='modal-title'
          >
            {title}
          </h2>
        )}

        {/* Close button cross */}
        {showClose && (
          <button
            className='sg-library__modal-close'
            onClick={toggleModal}
            data-testid='modal-close'
            aria-label='Close modal'
            autoFocus
          >
            <IconClose />
          </button>
        )}

        {/* Modal content */}
        <div className='sg-library__modal-children'>{children}</div>

        {/* Optional button */}
        {btnText && (
          <Button
            handleClick={toggleModal}
            classname='sg-library__modal-btn'
            content={btnText}
            customTheme={customTheme}
          />
        )}
      </StyledModal>
    </StyledModalOverlay>
  );
};

export default Modal;
