import React, { useRef } from 'react';
import useClickOutside from '../events/ClickOutside';

const SlideInContainer = ({children, isOpen, toggleMenu}) => {
  const containerRef = useRef(null);

  function handleOutsideClick() {
    if (!isOpen) return;
    toggleMenu();
  }

  useClickOutside(containerRef, handleOutsideClick);
  const buttonText = isOpen ? 'Close Menu' : 'Open Menu'

  return (
    <div ref={containerRef} className={`slide-in ${isOpen ? 'open' : 'closed'}`}>
      <div className="space-y-6 grow">{ children }</div>
      <button className="p-2 font-medium tracking-widest text-white uppercase transition-colors duration-150 bg-eclipse hover:bg-mint-dark" onClick={toggleMenu}>{buttonText}</button>
    </div>
  )
}

export default SlideInContainer
