
import React, {useEffect} from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import Loader from '../Loader/Loader';

const modalRoot = document.querySelector('#modal-root');

export default function Modal ({img, toggleModal}) {
 useEffect(() => {
  const handleKeyDown = e => {
    if(e.code === 'Escape') {
      toggleModal();
    }
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  }
 }, [toggleModal]);
 
 const handleBackdropClick = e => {
   if (e.target === e.currentTarget){
    toggleModal();
   }
 }

 return createPortal(
  <div className={styles.Overlay} onClick={handleBackdropClick}>
    <Loader />
    <div className={styles.Modal}>
      <img className={styles['modal-img']} src={img.src} alt={img.id} />
    </div>
  </div>,
  modalRoot,
);
}