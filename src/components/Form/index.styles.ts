import { I_Theme } from '../../utils/themes/themes.types';
import styled, { css } from 'styled-components';

/**
 * Helper function to retrieve general and formField styles based on the provided theme.
 */
const getFormStyles = ($finalTheme: I_Theme) => {
  return {
    fontSize: $finalTheme.general.fontSize,
    border: $finalTheme.fieldContainer.border,
    textColor: $finalTheme.fieldContainer.textColor,
  };
};

/**
 * Styled formField component with dynamic styles based on the provided theme.
 * @param {Object} props
 * @param {I_Theme} props.$finalTheme
 * @returns {JSX.Element}
 */
export const StyledForm = styled.form<{ $finalTheme: I_Theme }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 20px;
  position: relative;
  width: 100%;
  ${({ $finalTheme }) => {
    const { textColor, fontSize, border } = getFormStyles($finalTheme);
    return css`
      color: ${textColor};
      font-size: ${fontSize};
      border: ${border};
    `;
  }}
`;
