import { useEffect } from 'react';

/**
 * Custom hook to lock/unlock body scroll based on the `isOpen` state.
 * When `isOpen` is true, body scroll is disabled by setting `overflow: hidden`.
 * When `isOpen` is false, body scroll is restored by setting `overflow: unset`.
 */
const useBodyScrollLock = (isOpen: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    // Cleanup function to reset scroll behavior when the component is unmounted or `isOpen` changes
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
};

export default useBodyScrollLock;
