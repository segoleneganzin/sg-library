import { centerFlex } from '../../utils/style/styleVariables';
import { I_Theme } from '../../utils/themes/themes.types';
import styled, { css } from 'styled-components';

/**
 * Generates transition styles for the modal based on its open state and fade duration.
 */
const transitionStyles = ({
  $isOpen,
  $fadeDuration,
}: {
  $isOpen: boolean;
  $fadeDuration: number;
}) => css`
  transition: opacity ${$fadeDuration}ms ease-in-out,
    transform ${$fadeDuration}ms ease-in-out;
  opacity: ${$isOpen ? 1 : 0};
  transform: ${$isOpen ? 'scale(1)' : 'scale(0.95)'};
`;

/**
 * Helper function to retrieve general and modal styles based on the provided theme.
 */
const getModalStyles = ($finalTheme: I_Theme) => {
  return {
    overlayBackgroundColor: $finalTheme.modal.overlayBackgroundColor,
    backgroundColor: $finalTheme.modal.backgroundColor,
    textColor: $finalTheme.general.textColor,
    fontSize: $finalTheme.general.fontSize,
    errorColor: $finalTheme.general.errorColor,
    borderRadius: $finalTheme.general.radius,
    border: $finalTheme.modal.border,
    boxShadow: $finalTheme.modal.boxShadow,
    width: $finalTheme.modal.width,
  };
};

/**
 * Styled modal overlay component with dynamic styles based on the theme and open state.
 * @param {Object} props
 * @param {I_Theme} props.$finalTheme
 * @param {boolean} props.$isOpen - Whether the modal is open or closed.
 * @param {number} props.$fadeDuration - The fade duration in milliseconds.
 * @returns {JSX.Element}
 */
export const StyledModalOverlay = styled.div<{
  $finalTheme: I_Theme;
  $isOpen: boolean;
  $fadeDuration: number;
}>`
  ${centerFlex};
  position: fixed;
  inset: 0;
  height: 100vh;
  overflow-y: auto;
  z-index: 999;
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity ${(props) => props.$fadeDuration}ms ease-in-out,
    visibility 0ms ${(props) => (!props.$isOpen ? props.$fadeDuration : 0)}ms;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  background-color: ${({ $finalTheme }) =>
    getModalStyles($finalTheme).overlayBackgroundColor};
`;

/**
 * Styled modal component with dynamic content layout and appearance based on the theme and open state.
 * @param {Object} props
 * @param {I_Theme} props.$finalTheme
 * @param {boolean} props.$isOpen - Whether the modal is open or closed.
 * @param {number} props.$fadeDuration - The fade duration in milliseconds.
 * @returns {JSX.Element}
 */
export const StyledModal = styled.div<{
  $finalTheme: I_Theme;
  $isOpen: boolean;
  $fadeDuration: number;
}>`
  display: flex;
  flex-direction: column;
  gap: 0px 50px;
  padding: 5px 10px;
  min-width: 300px;
  position: relative;
  z-index: 1000;

  ${transitionStyles};
  ${({ $finalTheme }) => {
    const {
      backgroundColor,
      textColor,
      fontSize,
      borderRadius,
      border,
      boxShadow,
      width,
    } = getModalStyles($finalTheme);
    return css`
      background-color: ${backgroundColor};
      color: ${textColor};
      font-size: ${fontSize};
      border-radius: ${borderRadius};
      border: ${border};
      box-shadow: ${boxShadow};
      width: ${width};
    `;
  }}

  .sg-library__modal-btn {
    margin: 0 auto 5px;
  }
`;

/**
 * Styled modal title component with word wrapping and a maximum width.
 * @returns {JSX.Element}
 */
export const StyledModalTitle = styled.h2`
  justify-self: start;
  max-width: 95%;
  word-wrap: break-word;
`;

/**
 * Styled close button (cross) for the modal, with dynamic theme color.
 * @param {Object} props
 * @param {I_Theme} props.$finalTheme
 * @returns {JSX.Element} The styled close button (cross).
 */
export const StyledModalCloseCross = styled.button<{
  $finalTheme: I_Theme;
}>`
  background: none;
  border: none;
  cursor: pointer;
  justify-self: end;
  position: absolute;
  right: 0;
  top: 5px;
  fill: ${({ $finalTheme }) => getModalStyles($finalTheme).errorColor};
`;

/**
 * Styled container for modal content with centered text and padding.
 * @returns {JSX.Element}
 */
export const StyledModalChildren = styled.div`
  text-align: center;
  padding: 15px 0;
  width: 100%;
`;
