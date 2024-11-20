import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

describe('<Button>', () => {
  const defaultProps = {
    content: 'Click Me',
    handleClick: vi.fn(), // Mock function
  };

  const setup = (props = defaultProps) => {
    return render(<Button {...props} />);
  };

  it('renders the button text', () => {
    setup();
    const button = screen.getByText(/Click Me/i);
    expect(button).toBeTruthy();
  });

  it('calls handleClick on click', () => {
    setup();
    const button = screen.getByText(/Click Me/i);
    fireEvent.click(button);
    expect(defaultProps.handleClick).toHaveBeenCalledTimes(1); // Ensure the click handler is called once
  });

  it('applies the aria-label attribute if provided', () => {
    const ariaLabel = 'submit-button';
    const props = {
      ...defaultProps,
      ariaLabel,
    };
    setup(props);
    expect(screen.getByText(/Click Me/i)).toHaveAttribute(
      'aria-label',
      ariaLabel
    );
  });

  it('applies a custom className if provided', () => {
    const customClass = 'my-custom-class';
    const props = {
      ...defaultProps,
      classname: customClass,
    };
    setup(props);
    const button = screen.getByText(/Click Me/i);
    expect(button).toHaveClass('sg-library__btn'); // Ensure default class is applied
    expect(button).toHaveClass(customClass);
  });

  it('applies the light theme by default', () => {
    setup();
    const button = screen.getByText(/Click Me/i);
    fireEvent.mouseOut(button);
    const styles = window.getComputedStyle(button);
    expect(styles.color).toBe('rgb(247, 235, 235)');
  });

  it('applies the dark theme correctly if applied', () => {
    const props = {
      ...defaultProps,
      theme: 'dark',
    };
    setup(props);
    const button = screen.getByText(/Click Me/i);
    const styles = window.getComputedStyle(button);
    expect(styles.color).toBe('rgb(200, 200, 200)');
  });

  it('applies the custom theme correctly', () => {
    const customTheme = {
      general: { fontSize: '2rem' },
      button: { textColor: 'black' },
    };
    const props = {
      ...defaultProps,
      customTheme,
    };
    setup(props);
    const button = screen.getByText(/Click Me/i);
    const styles = window.getComputedStyle(button);
    expect(styles.fontSize).toBe('2rem');
    expect(styles.color).toBe('rgb(0, 0, 0)');
  });

  it('combines default values and custom theme values correctly', () => {
    const customTheme = {
      general: { fontSize: '2rem' },
      button: { textColor: 'rgb(214, 13, 13)' },
    };
    const props = {
      ...defaultProps,
      theme: 'dark',
      customTheme,
    };
    setup(props);
    const button = screen.getByText(/Click Me/i);
    const styles = window.getComputedStyle(button);
    // Check that the font size from the custom theme is applied
    expect(styles.fontSize).toBe('2rem');
    // Check that the text color from the custom theme is applied
    expect(styles.color).toBe('rgb(214, 13, 13)');
    // Ensure the text color from the 'dark' theme is NOT applied
    const defaultTextColor = 'rgb(200, 200, 200)'; // Default text color for 'dark' theme
    expect(styles.color).not.toBe(defaultTextColor); // The custom theme should override the default background color
  });
});
