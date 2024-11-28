import { I_Theme } from '../../utils/themes/themes.types';
import styled, { css } from 'styled-components';

const sharedFieldStyles = ($finalTheme: I_Theme) => {
  return css`
    font-size: ${$finalTheme.field.fontSize};
    background-color: ${$finalTheme.field.backgroundColor};
    color: ${$finalTheme.field.textColor};
    border: ${$finalTheme.field.border};
    border-radius: ${$finalTheme.general.radius};
    &:focus,
    &:hover {
      outline: 1px solid ${$finalTheme.field.borderColor};
    }
  `;
};

export const StyledForm = styled.form<{ $finalTheme: I_Theme }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 20px;
  position: relative;
  width: 100%;
  ${({ $finalTheme }) => {
    return css`
      color: ${$finalTheme.form.textColor};
      border: ${$finalTheme.form.border};
    `;
  }}
`;

export const StyledFieldContainer = styled.div<{ $finalTheme: I_Theme }>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  ${({ $finalTheme }) => {
    return css`
      color: ${$finalTheme.form.textColor};
      font-size: ${$finalTheme.general.fontSize};
      border: ${$finalTheme.fieldContainer.border};
    `;
  }}
  .sg-library__form-field-container--error {
    ${({ $finalTheme }) => {
      return css`
        color: ${$finalTheme.general.errorColor};
      `;
    }}
  }
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
    return css`
      font-size: ${$finalTheme.field.fontSize};
      color: ${$finalTheme.form.textColor};
    `;
  }}
`;

export const StyledInput = styled.input<{ $finalTheme: I_Theme }>`
  padding: 5px 10px;
  transition: all 0.2s ease-in-out;
  width: 100%;
  ${({ $finalTheme }) => {
    return sharedFieldStyles($finalTheme);
  }}
`;

export const StyledSelect = styled.select<{ $finalTheme: I_Theme }>`
  overflow-y: scroll;
  padding: 5px 10px;
  transition: all 0.2s ease-in-out;
  width: 100%;
  ${({ $finalTheme }) => {
    return sharedFieldStyles($finalTheme);
  }}
`;

export const StyledTextarea = styled.textarea<{ $finalTheme: I_Theme }>`
  overflow-y: scroll;
  padding: 5px 10px;
  outline: 0;
  width: 100%;
  ${({ $finalTheme }) => {
    return sharedFieldStyles($finalTheme);
  }}
`;
