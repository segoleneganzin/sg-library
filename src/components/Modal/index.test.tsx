import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Modal from './index';

describe('<Modal>', () => {
  const defaultProps = {
    isOpen: true,
    toggleModal: vi.fn(), // Mock function
    children: <div>Modal Content</div>,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const setup = (props = defaultProps) => {
    return render(<Modal {...props} />);
  };

  it('renders the modal with content when open', () => {
    setup();
    expect(screen.getByText('Modal Content')).toBeTruthy();
  });

  it('renders the modal without title if no provided', () => {
    setup();
    expect(screen.queryByTestId('modal-title')).toBeNull();
  });

  it('renders the modal with title if provided', () => {
    const props = {
      ...defaultProps,
      title: 'Test Modal',
    };
    setup(props);
    expect(screen.queryByTestId('modal-title')).toBeTruthy();
    expect(screen.getByText('Test Modal')).toBeTruthy();
  });

  it('renders the modal without button if no provided', () => {
    setup();
    expect(screen.queryByTestId('modal-additional-button')).toBeNull();
  });

  it('renders the modal with button if provided', () => {
    const props = {
      ...defaultProps,
      btnText: 'Close',
    };
    setup(props);
    expect(screen.getByTestId('sg-library-button')).toBeTruthy();
    expect(screen.getByText('Close')).toBeTruthy();
  });

  it('calls toggleModal when the close button is clicked', () => {
    setup();
    fireEvent.click(screen.getByTestId('modal-close-cross'));
    expect(defaultProps.toggleModal).toHaveBeenCalledTimes(1);
  });

  it('closes the modal when clicking on the overlay if overlayClickClose is not in props (true as default value)', () => {
    const props = {
      ...defaultProps,
    };
    setup(props);
    fireEvent.click(screen.getByTestId('modal-overlay'));
    expect(defaultProps.toggleModal).toHaveBeenCalledTimes(1);
  });

  it('does not close the modal when clicking on the overlay if overlayClickClose is false', () => {
    const props = {
      ...defaultProps,
      overlayClickClose: false,
    };
    setup(props);
    fireEvent.click(screen.getByTestId('modal-overlay'));
    expect(defaultProps.toggleModal).not.toHaveBeenCalled();
  });

  it('closes the modal when pressing Escape if escapeClose is not in props (true as default value)', () => {
    setup();
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    expect(defaultProps.toggleModal).toHaveBeenCalledTimes(1);
  });

  it('does not close the modal when pressing Escape if escapeClose is false', () => {
    const props = {
      ...defaultProps,
      escapeClose: false,
    };
    setup(props);
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    expect(defaultProps.toggleModal).not.toHaveBeenCalled();
  });

  it('shows the close button if showClose is not in props (true as default value)', () => {
    setup();
    expect(screen.queryByTestId('modal-close-cross')).toBeTruthy();
  });

  it('does not show the close button if showClose is false', () => {
    const props = {
      ...defaultProps,
      showClose: false,
    };
    setup(props);
    expect(screen.queryByTestId('modal-close-cross')).toBeNull();
  });

  it('applies the correct fade duration for visibility and transition', () => {
    const props = {
      ...defaultProps,
      fadeDuration: 500,
    };
    setup(props);
    const dialogElement = screen.getByTestId('modal-dialog');
    const styles = window.getComputedStyle(dialogElement);
    expect(styles.transition).toBe(
      'opacity 500ms ease-in-out,transform 500ms ease-in-out'
    );
  });

  it('applies aria-hidden="true" when the modal is closed', () => {
    const props = {
      ...defaultProps,
      isOpen: false,
    };
    setup(props);
    const modalParent = screen.getByTestId('modal-overlay');
    expect(modalParent.getAttribute('aria-hidden')).toBe('true');
  });

  it('applies aria-hidden="false" when the modal is open', () => {
    setup();
    const modalParent = screen.getByTestId('modal-overlay');
    expect(modalParent.getAttribute('aria-hidden')).toBe('false');
  });

  it('locks body scrolling when the modal is open', () => {
    setup();
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('unlocks body scrolling when the modal is closed', () => {
    const props = {
      ...defaultProps,
      isOpen: false,
    };
    setup(props);
    expect(document.body.style.overflow).toBe('unset');
  });
});
