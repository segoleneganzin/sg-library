import { useRef, useEffect } from 'react';
import { defaultTheme } from '../../utils/Theme';
import { I_ModalProps } from './types';
import IconClose from '../icons/IconClose';

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
  theme = 'light',
  customTheme = {},
  fadeDuration = 0,
  children,
}) => {
  const modalRef = useRef(null);

  const modalStyle = {
    backgroundColor: customTheme?.primary || defaultTheme.primary,
    color: customTheme?.textColor || defaultTheme.textColor,
    fontSize: customTheme?.fontSize || defaultTheme.fontSize,
    transition: `opacity ${fadeDuration}ms ease-in-out, transform ${fadeDuration}ms ease-in-out`,
  };

  // Pure function to determine body overflow style
  const getBodyOverflowStyle = (isOpen: boolean): 'hidden' | 'unset' =>
    isOpen ? 'hidden' : 'unset';

  // Effect to lock or unlock scrolling on the body when the modal opens or closes
  useEffect(() => {
    document.body.style.overflow = getBodyOverflowStyle(isOpen);
    return () => {
      document.body.style.overflow = 'unset'; // reset on unmount
    };
  }, [isOpen]);

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
    <div
      ref={modalRef}
      onClick={handleOverlayClick}
      data-testid='modal-parent'
      className={`sg-library__modal sg-library__modal--${theme} ${
        isOpen ? 'sg-library__modal--open' : 'sg-library__modal--close'
      }`}
      style={
        isOpen
          ? {
              transition: `visibility 0ms`,
            }
          : {
              transition: `visibility 0ms ${fadeDuration}ms`, // delay to permitted dialog animation before disappear
            }
      }
      aria-hidden={!isOpen}
    >
      {/* Modal window*/}
      <dialog
        className={`sg-library__modal-dialog ${
          isOpen
            ? 'sg-library__modal-dialog--open'
            : 'sg-library__modal-dialog--close'
        }`}
        style={modalStyle}
        aria-describedby={title ? title : 'modal'}
        data-testid='modal-dialog'
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
          <button
            className='sg-library__modal-btn'
            onClick={toggleModal}
            data-testid='modal-additional-button'
          >
            {btnText}
          </button>
        )}
      </dialog>
    </div>
  );
};

export default Modal;
