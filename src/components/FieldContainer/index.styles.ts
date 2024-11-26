import { I_Theme } from '../../utils/themes/themes.types';
import styled, { css } from 'styled-components';

/**
 * Helper function to retrieve general and formField styles based on the provided theme.
 */
const getFieldContainerStyles = ($finalTheme: I_Theme) => {
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
export const StyledFieldContainer = styled.div<{ $finalTheme: I_Theme }>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  ${({ $finalTheme }) => {
    const { textColor, fontSize, border } =
      getFieldContainerStyles($finalTheme);
    return css`
      color: ${textColor};
      font-size: ${fontSize};
      border: ${border};
    `;
  }}
`;
