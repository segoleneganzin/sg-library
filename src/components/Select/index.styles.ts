import { I_Theme } from '../../utils/themes/themes.types';
import styled, { css } from 'styled-components';

/**
 * Helper function to retrieve general and field styles based on the provided theme.
 */
const getSelectStyles = ($finalTheme: I_Theme) => {
  return {
    fontSize: $finalTheme.general.fontSize,
    radius: $finalTheme.general.radius,
    border: $finalTheme.field.border,
    borderColor: $finalTheme.field.borderColor,
    textColor: $finalTheme.field.textColor,
    backgroundColor: $finalTheme.field.backgroundColor,
  };
};

/**
 * Styled field component with dynamic styles based on the provided theme.
 * @param {Object} props
 * @param {I_Theme} props.$finalTheme
 * @returns {JSX.Element}
 */
export const StyledSelect = styled.select<{ $finalTheme: I_Theme }>`
  overflow-y: scroll;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  width: 100%;

  ${({ $finalTheme }) => {
    const { textColor, fontSize, border, borderColor, radius } =
      getSelectStyles($finalTheme);
    return css`
      background-color: ${textColor};
      color: ${textColor};
      font-size: ${fontSize};
      border: ${border};
      border-radius: ${radius};
      &:focus,
      &:hover {
        outline: 2px solid ${borderColor};
      }
    `;
  }}
`;
