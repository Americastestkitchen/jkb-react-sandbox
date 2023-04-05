const SlideInContainer = ({children, isOpen, toggleMenu}) => {
  const buttonText = isOpen ? 'Close Menu' : 'Open Menu'
  return (
    <div className={isOpen ? 'slide-in open' : 'slide-in closed'}>
      <div className="space-y-6 grow">{ children }</div>
      <button className="p-2 font-medium tracking-widest text-white uppercase transition-colors duration-150 bg-eclipse hover:bg-mint-dark" onClick={toggleMenu}>{buttonText}</button>
    </div>
  )
}

export default SlideInContainer
