import { useUI } from '../../context/UIContext';
import Lightbox from './Lightbox';
import Toast from './Toast';

export default function GlobalUI() {
  const { lightbox, closeLightbox, toast, hideToast } = useUI();

  return (
    <>
      <Lightbox 
        open={lightbox.isOpen} 
        src={lightbox.image} 
        alt={lightbox.title} 
        onClose={closeLightbox} 
      />
      <Toast 
        open={toast.show} 
        message={toast.message} 
        type={toast.type}
        onClose={hideToast} 
      />
    </>
  );
}
