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
  display: grid;
  grid-template: repeat(3, auto) / repeat(2, 1fr);
  gap: 0px 50px;
  padding: 10px;
  width: 85%;
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
    grid-area: 3 / 1 / 4 / 3; // third row, all columns
    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.tablet}) {
    max-width: 650px;
  }
`;

export const StyledModalTitle = styled.h2`
  grid-area: 1 / 1; // first row, first column
  justify-self: start;
`;

export const StyledModalCloseCross = styled.button<{
  $customTheme: Partial<I_Theme>;
}>`
  grid-area: 1 / 2; // first row, second column
  background: none;
  border: none;
  cursor: pointer;
  justify-self: end;
  position: relative;
  right: -5px;
  fill: ${({ $customTheme }) => getModalStyles($customTheme).errorColor};
`;

export const StyledModalChildren = styled.div`
  grid-area: 2 / 1 / 3 / 3; // second row, all columns
  text-align: center;
  margin-bottom: 15px;
  width: 100%;
`;
