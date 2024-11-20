import { I_Theme } from '../../utils/themes/themes.types';
import styled, { css } from 'styled-components';
import Color from 'color';

/**
 * Helper function to retrieve general and button styles based on the provided theme.
 */
const getButtonStyles = ($finalTheme: I_Theme) => {
  return {
    fontSize: $finalTheme.general.fontSize,
    borderRadius: $finalTheme.general.radius,
    backgroundColor: $finalTheme.button.backgroundColor,
    textColor: $finalTheme.button.textColor,
    border: $finalTheme.button.border,
    boxShadow: $finalTheme.button.boxShadow,
  };
};

/**
 * Styled button component with dynamic styles based on the provided theme.
 * It includes hover effects, background color adjustments, and box shadow manipulation.
 * @param {Object} props
 * @param {I_Theme} props.$finalTheme
 * @returns {JSX.Element}
 */
export const StyledButton = styled.button<{ $finalTheme: I_Theme }>`
  cursor: pointer;
  height: auto;
  padding: 5px 15px;
  width: fit-content;
  transition: all 0.2s ease;
  ${({ $finalTheme }) => {
    const {
      backgroundColor,
      textColor,
      fontSize,
      borderRadius,
      border,
      boxShadow,
    } = getButtonStyles($finalTheme);
    return css`
      background-color: ${backgroundColor};
      color: ${textColor};
      font-size: ${fontSize};
      border-radius: ${borderRadius};
      border: ${border};
      box-shadow: ${boxShadow};
    `;
  }}
  &:hover {
    ${({ $finalTheme }) => {
      const { backgroundColor } = getButtonStyles($finalTheme);
      const color = Color(backgroundColor);
      return css`
        background-color: ${color.lighten(0.2).string()};
        box-shadow: 0 0 5px ${color.darken(0.2).string()};
      `;
    }}
  }
`;
