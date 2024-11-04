import { defaultTheme, I_Theme } from '../../utils/Theme';
import styled, { css } from 'styled-components';
import Color from 'color';

const getButtonStyles = ($customTheme: Partial<I_Theme>) => {
  return {
    backgroundColor:
      $customTheme.btnBackgroundColor || defaultTheme.btnBackgroundColor,
    textColor: $customTheme.btnTextColor || defaultTheme.btnTextColor,
    fontSize: $customTheme.fontSize || defaultTheme.fontSize,
    borderRadius: $customTheme.radius || defaultTheme.radius,
    border: $customTheme.btnBorder || defaultTheme.btnBorder,
    boxShadow: $customTheme.btnBoxShadow || defaultTheme.btnBoxShadow,
  };
};

export const StyledButton = styled.button<{ $customTheme: Partial<I_Theme> }>`
  border: none;
  cursor: pointer;
  height: auto;
  padding: 5px 20px;
  width: fit-content;
  transition: background-color 0.2s ease;
  ${({ $customTheme }) => {
    const {
      backgroundColor,
      textColor,
      fontSize,
      borderRadius,
      border,
      boxShadow,
    } = getButtonStyles($customTheme);
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
    ${({ $customTheme }) => {
      const { backgroundColor } = getButtonStyles($customTheme);
      const color = Color(backgroundColor);
      return css`
        background-color: ${color.lighten(0.2).string()};
        box-shadow: 0 0 5px ${color.darken(0.2).string()};
      `;
    }}
  }
`;
