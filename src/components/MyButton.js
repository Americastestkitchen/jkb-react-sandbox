import React, { useState } from 'react'

const MyButton = () => {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }
  return (
    <button className="bg-black text-white p-2 rounded hover:bg-opacity-75 transition-all duration-150" onClick={handleClick}>Clicked {count} times</button>
  )
}

export default MyButton
