import { I_Theme } from '../../utils/themes/themes.types';
import styled, { css } from 'styled-components';

/**
 * Helper function to retrieve general and formField styles based on the provided theme.
 */
const getFieldStyles = ($finalTheme: I_Theme) => {
  return {
    fontSize: $finalTheme.general.fontSize,
    radius: $finalTheme.general.radius,
    formTextColor: $finalTheme.form.textColor,
    formBorder: $finalTheme.form.border,
    inputTextColor: $finalTheme.field.textColor,
    inputBackgroundColor: $finalTheme.field.backgroundColor,
    inputBorder: $finalTheme.field.border,
    inputBorderColor: $finalTheme.field.borderColor,
  };
};

const sharedFieldStyles = (styles: ReturnType<typeof getFieldStyles>) => css`
  background-color: ${styles.inputBackgroundColor};
  color: ${styles.inputTextColor};
  border: ${styles.inputBorder};
  border-radius: ${styles.radius};
  &:focus,
  &:hover {
    outline: 1px solid ${styles.inputBorderColor};
  }
`;

export const StyledForm = styled.form<{ $finalTheme: I_Theme }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 20px;
  position: relative;
  width: 100%;
  ${({ $finalTheme }) => {
    const styles = getFieldStyles($finalTheme);
    return css`
      color: ${styles.formTextColor};
      font-size: ${styles.fontSize};
      border: ${styles.formBorder};
    `;
  }}
`;

export const StyledCheckFieldsContainer = styled.div<{ $finalTheme: I_Theme }>`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const StyledCheckField = styled.div<{ $finalTheme: I_Theme }>`
  display: inline-flex;
  gap: 10px;
  ${({ $finalTheme }) => {
    const { formTextColor } = getFieldStyles($finalTheme);
    return css`
      color: ${formTextColor};
    `;
  }}
`;

export const StyledInput = styled.input<{ $finalTheme: I_Theme }>`
  padding: 5px 10px;
  transition: all 0.2s ease-in-out;
  width: 100%;
  ${({ $finalTheme }) => {
    const styles = getFieldStyles($finalTheme);
    return sharedFieldStyles(styles);
  }}
`;

export const StyledSelect = styled.select<{ $finalTheme: I_Theme }>`
  overflow-y: scroll;
  padding: 5px 10px;
  transition: all 0.2s ease-in-out;
  width: 100%;
  ${({ $finalTheme }) => {
    const styles = getFieldStyles($finalTheme);
    return sharedFieldStyles(styles);
  }}
`;

export const StyledTextarea = styled.textarea<{ $finalTheme: I_Theme }>`
  overflow-y: scroll;
  padding: 5px 10px;
  outline: 0;
  width: 100%;
  ${({ $finalTheme }) => {
    const styles = getFieldStyles($finalTheme);
    return sharedFieldStyles(styles);
  }}
`;
