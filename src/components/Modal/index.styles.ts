import { defaultTheme, I_Theme } from '../../utils/Theme';
import styled from 'styled-components';

export const StyledModalOverlay = styled.div<{
  $customTheme: Partial<I_Theme>;
  $isOpen: boolean;
  $fadeDuration: number;
}>`
  background-color: ${({ $customTheme }) =>
    $customTheme.overlayBackgroundColor || defaultTheme.overlayBackgroundColor};
  transition: ${({ $isOpen, $fadeDuration }) =>
    $isOpen
      ? `visibility 0ms`
      : `visibility 0ms ${$fadeDuration}ms`}; // delay to permit dialog animation before disappear
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) =>
    $isOpen ? 'auto' : 'none'}; // To prevent interaction when closed
`;

export const StyledModal = styled.div<{
  $customTheme: Partial<I_Theme>;
  $fadeDuration: number;
}>`
  background-color: ${({ $customTheme }) =>
    $customTheme.modalBackgroundColor || defaultTheme.modalBackgroundColor};
  color: ${({ $customTheme }) =>
    $customTheme.textColor || defaultTheme.textColor};
  font-size: ${({ $customTheme }) =>
    $customTheme.fontSize || defaultTheme.fontSize};
  transition: opacity ${({ $fadeDuration }) => $fadeDuration}ms ease-in-out,
    transform ${({ $fadeDuration }) => $fadeDuration}ms ease-in-out;
  border-radius: ${({ $customTheme }) =>
    $customTheme.radius || defaultTheme.radius};
`;
