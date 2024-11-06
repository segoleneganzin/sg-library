import { I_Theme } from '../../utils/themes/themes.types';
import styled, { css } from 'styled-components';
import Color from 'color';

const getButtonStyles = ($finalTheme: I_Theme) => {
  return {
    backgroundColor: $finalTheme.button.backgroundColor,
    textColor: $finalTheme.general.textColor,
    fontSize: $finalTheme.general.fontSize,
    borderRadius: $finalTheme.general.radius,
    border: $finalTheme.button.border,
    boxShadow: $finalTheme.button.boxShadow,
  };
};

export const StyledButton = styled.button<{ $finalTheme: I_Theme }>`
  cursor: pointer;
  height: auto;
  padding: 10px 15px;
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
