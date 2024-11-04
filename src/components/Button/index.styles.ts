import { defaultTheme, I_Theme } from '../../utils/Theme';
import styled from 'styled-components';
import Color from 'color';

export const StyledButton = styled.button<{ $customTheme: Partial<I_Theme> }>`
  background-color: ${({ $customTheme }) =>
    $customTheme.btnBackgroundColor || defaultTheme.btnBackgroundColor};
  color: ${({ $customTheme }) =>
    $customTheme.btnTextColor || defaultTheme.btnTextColor};
  transition: background-color 0.2s ease;
  font-size: ${({ $customTheme }) =>
    $customTheme.btnFontSize || defaultTheme.btnFontSize};
  border-radius: ${({ $customTheme }) =>
    $customTheme.radius || defaultTheme.radius};

  &:hover {
    background-color: ${({ $customTheme }) => {
      const color = Color(
        $customTheme.btnBackgroundColor || defaultTheme.btnBackgroundColor
      );
      return color.lighten(0.2).string();
    }};
    box-shadow: 0 0 5px
      ${({ $customTheme }) => {
        const color = Color(
          $customTheme.btnBackgroundColor || defaultTheme.btnBackgroundColor
        );
        return color.darken(0.2).string();
      }};
  }
`;
