import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

describe('<Button>', () => {
  const defaultProps = {
    content: 'Click Me',
    handleClick: vi.fn(),
  };

  const setup = (props = defaultProps) => {
    return render(<Button {...props} />);
  };

  it('renders the button text', () => {
    setup();
    const button = screen.getByText(/Click Me/i);
    expect(button).toBeTruthy(); // Ensure the button is rendered
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
    expect(button).toHaveClass(customClass); // Ensure custom class is applied
  });

  it('applies the default theme correctly', () => {
    setup();
    const button = screen.getByText(/Click Me/i);
    fireEvent.mouseOut(button);
    const styles = window.getComputedStyle(button); // Get computed styles for the button
    expect(styles.color).toBe('rgb(247, 235, 235)'); // Ensure the background color is the default theme's textColor (white)
  });

  it('applies the non default theme correctly if applied', () => {
    const props = {
      ...defaultProps,
      theme: 'light',
    };
    setup(props);
    const button = screen.getByText(/Click Me/i);
    const styles = window.getComputedStyle(button); // Get computed styles for the button
    expect(styles.color).toBe('rgb(247, 235, 235)'); // Ensure the text color is the light theme's textColor (grey)
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
    const styles = window.getComputedStyle(button); // Get computed styles for the button
    expect(styles.fontSize).toBe('2rem'); // Ensure custom font size is applied
    expect(styles.color).toBe('rgb(0, 0, 0)'); // Ensure custom text color (black) is applied
  });

  it('combines default values and custom theme values correctly', () => {
    const customTheme = {
      general: { fontSize: '2rem' }, // Custom font size
      button: { textColor: 'rgb(214, 13, 13)' }, // Custom text color and background color
    };
    const props = {
      ...defaultProps,
      theme: 'light', // Default theme is light
      customTheme, // Pass the custom theme
    };
    setup(props);
    const button = screen.getByText(/Click Me/i);
    const styles = window.getComputedStyle(button);
    // Check that the font size from the custom theme is applied
    expect(styles.fontSize).toBe('2rem');
    // Check that the text color from the custom theme is applied
    expect(styles.color).toBe('rgb(214, 13, 13)');
    // Ensure the background color from the default 'light' theme is NOT applied
    const defaultTextColor = 'rgb(247, 235, 235)'; // Default background color for 'light' theme
    expect(styles.color).not.toBe(defaultTextColor); // The custom theme should override the default background color
  });
});
