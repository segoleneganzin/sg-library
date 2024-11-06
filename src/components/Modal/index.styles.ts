import { I_Theme, defaultTheme } from '../../utils/Theme';
import styled, { css } from 'styled-components';

const breakpoints = {
  tablet: '768px',
};

const centerFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const getModalStyles = ($customTheme: Partial<I_Theme>) => {
  return {
    overlayBackgroundColor:
      $customTheme.overlayBackgroundColor ||
      defaultTheme.overlayBackgroundColor,
    backgroundColor:
      $customTheme.modalBackgroundColor || defaultTheme.modalBackgroundColor,
    textColor: $customTheme.textColor || defaultTheme.textColor,
    fontSize: $customTheme.fontSize || defaultTheme.fontSize,
    errorColor: $customTheme.errorColor || defaultTheme.errorColor,
    borderRadius: $customTheme.radius || defaultTheme.radius,
    border: $customTheme.modalBorder || defaultTheme.modalBorder,
    boxShadow: $customTheme.modalBoxShadow || defaultTheme.modalBoxShadow,
  };
};

export const StyledModalOverlay = styled.div<{
  $customTheme: Partial<I_Theme>;
  $isOpen: boolean;
  $fadeDuration: number;
}>`
  position: fixed;
  inset: 0;
  ${centerFlex};
  height: 100vh;
  overflow-y: auto;
  z-index: 999;
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity ${(props) => props.$fadeDuration}ms ease-in-out,
    visibility 0ms ${(props) => (!props.$isOpen ? props.$fadeDuration : 0)}ms;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  background-color: ${({ $customTheme }) =>
    getModalStyles($customTheme).overlayBackgroundColor};
`;

export const StyledModal = styled.div<{
  $customTheme: Partial<I_Theme>;
  $isOpen: boolean;
  $fadeDuration: number;
}>`
  display: flex;
  flex-direction: column;
  gap: 0px 50px;
  padding: 5px 10px;
  width: fit-content;
  min-width: 300px;
  position: relative;
  z-index: 1000;

  ${transitionStyles};
  ${({ $customTheme }) => {
    const {
      backgroundColor,
      textColor,
      fontSize,
      borderRadius,
      border,
      boxShadow,
    } = getModalStyles($customTheme);
    return css`
      background-color: ${backgroundColor};
      color: ${textColor};
      font-size: ${fontSize};
      border-radius: ${borderRadius};
      border: ${border};
      box-shadow: ${boxShadow};
    `;
  }}

  .sg-library__modal-btn {
    margin: 0 auto 5px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    min-width: 400px;
  }
`;

export const StyledModalTitle = styled.h2`
  justify-self: start;
  max-width: 95%;
  word-wrap: break-word;
`;

export const StyledModalCloseCross = styled.button<{
  $customTheme: Partial<I_Theme>;
}>`
  background: none;
  border: none;
  cursor: pointer;
  justify-self: end;
  position: absolute;
  right: 0;
  top: 5px;
  fill: ${({ $customTheme }) => getModalStyles($customTheme).errorColor};
`;

export const StyledModalChildren = styled.div`
  text-align: center;
  padding: 15px 0;
  width: 100%;
`;
