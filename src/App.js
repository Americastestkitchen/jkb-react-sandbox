import React from 'react'
import Favorites from './components/Favorites'
import Collections from './components/Collections'

function App() {
  return (
    <div className="py-12 space-y-12 bg-white-smoke text-eclipse">
      <Collections />
      <div className="w-full max-w-5xl py-12 mx-auto space-y-12">
        <Favorites />
      </div>
    </div>
  )
}

export default App;
