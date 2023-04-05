import Favorites from './components/Favorites'
import Collections from './components/Collections'

function App() {
  return (
    <div className="bg-white-smoke text-eclipse">
      <header className="w-full max-w-[1136px] px-4 py-6 mx-auto lg:px-0">
        <p className="text-3xl font-bold">Joshua's Favorites</p>
      </header>
      <div className="mb-12">
        <Collections />
      </div>
      <Favorites />
    </div>
  )
}

export default App;
