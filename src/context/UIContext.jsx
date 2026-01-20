import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const UIContext = createContext();

export function UIProvider({ children }) {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    image: null,
    title: ''
  });

  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success' // success, error, info
  });

  const openLightbox = useCallback((image, title) => {
    setLightbox({ isOpen: true, image, title });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ show: true, message, type });
    // Auto-hide after 3 seconds
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3000);
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, show: false }));
  }, []);

  const value = useMemo(() => ({
    lightbox,
    openLightbox,
    closeLightbox,
    toast,
    showToast,
    hideToast
  }), [lightbox, toast, openLightbox, closeLightbox, showToast, hideToast]);

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
