import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom'
import useClickOutside from '../events/ClickOutside';

const SlideInContainer = ({children, isOpen, toggleMenu}) => {
  const containerRef = useRef(null);

  if (!containerRef.current) {
    containerRef.current = document.createElement('div');
  }

  useEffect(() => {
    const slideInRoot = document.getElementById('slide-in-root');
    slideInRoot.appendChild(containerRef.current);
    // unmount the component from the DOM
    return () => slideInRoot.removeChild(containerRef.current);
  }, [])

  function handleOutsideClick() {
    if (!isOpen) return;
    toggleMenu();
  }

  useClickOutside(containerRef, handleOutsideClick);
  const buttonText = isOpen ? 'Close Menu' : 'Open Menu'

  return createPortal(
    <div class="slide-in">
      <div className="space-y-6 grow slide-in-content">{ children }</div>
      <button tabIndex="0" className="p-2 font-medium tracking-widest text-white uppercase transition-colors duration-150 bg-eclipse hover:bg-mint-dark" onClick={toggleMenu}>{buttonText}</button>
    </div>, containerRef.current
  )
}

export default SlideInContainer
