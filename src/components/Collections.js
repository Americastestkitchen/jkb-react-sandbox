import { useState, useEffect } from 'react'
import CardChip  from './ui/CardChip'
import SlideInContainer from './ui/SlideInContainer'

const Collections = () => {
  const [collections, setCollections] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/collections')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setCollections(data)
    } catch(error) {
      console.error('Error fetching Collections data', error)
    }
  }

  fetchData()
  }, [])

  return (
    <section aria-labelledby="my-collections" className="px-4 pt-12 lg:px-0">
      <div>
        {collections ? (
          <div className="space-y-6">
            <div className="w-full max-w-[1136px] mx-auto">
              <div className="relative flex items-baseline justify-between pb-2 border-b">
                <h1 id="my-collections" className="text-2xl font-semibold">My Collections</h1>
                <button onClick={toggleMenu} className="text-sm font-semibold hover:text-mint-dark">+ Create new collection</button>
              </div>
            </div>
            <ul className="flex items-center gap-4 px-4 py-1 overflow-x-scroll">
              {
                collections.meta_data.collections.map((item, index) => (
                  <CardChip {...item }
                    key={item.id}
                    elementType="li"
                    headerLevel='h2' />
                ))
              }
            </ul>
          </div>
        ) : (
          <p>Loading my collections...</p>
        )}
      </div>
      {/* TODO:
          Get this out of the DOM unless it's requested
          Figure out React Transitions, to allow for a slide in effect
          in association with the conditional visiblity.
      */}
      <SlideInContainer isOpen={isOpen} toggleMenu={toggleMenu}>
          <p className="font-semibold">Create a new collection</p>
          <form>
            <label htmlFor="collection-name" class="sr-only">Collection name</label>
            <div className="relative w-full h-10 bg-white-smoke">
              <input type="text" name="collection-name" id="collection-name" placeholder="Collection name" className="w-full h-full pl-4 pr-8 bg-transparent focus:ring-mint focus:border-eclipse " />
              <span className='absolute transform -translate-y-1/2 right-4 top-1/2'>+</span>
            </div>
          </form>
      </SlideInContainer>
    </section>
  )
}

export default Collections
