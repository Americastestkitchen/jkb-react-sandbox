import { useState, useEffect } from 'react'
import MediaCard  from './ui/MediaCard'
import SlideInContainer from './ui/SlideInContainer'

const Favorites = () => {
  const [favorites, setFavorites] = useState(null)
  const [pagination, setPagination] = useState(null)
  const [currentSort, setCurrentSort] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [endpoint, setEndpoint] = useState('recipes')

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/favorite_${endpoint}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setFavorites(data.results)
      setPagination(data.pagination)
    } catch(error) {
      console.error('Error fetching favorites data', error)
    }
  }

  fetchData()
  }, [endpoint])

  const handleEndpointClick = (newEndpoint) => {
    setEndpoint(newEndpoint);
  };

  const sortByPublishDate = () => {
    const sortedResults = [...favorites].sort((a, b) => {
      return new Date(a.created_at) - new Date(b.created_at)
    })
    setFavorites(sortedResults)
    setCurrentSort('date')
  }

  const sortByAlphabetical = () => {
    const sortedResults = [...favorites].sort((a, b) => {
      return a.document_title.localeCompare(b.document_title)
    })
    setFavorites(sortedResults)
    setCurrentSort('alphabetical')
  }

  return (
    <section aria-labelledby='my-favorites' className="px-4 lg:px-0">
      <div className="w-full max-w-[1136px] py-12 mx-auto space-y-12">
        {favorites ? (
          <div className="space-y-6">
            <div className="relative flex items-baseline justify-between pb-2 border-b">
              <div className="flex items-center">
                <h2 id="my-favorites" className="text-2xl font-semibold">My Favorites
                {pagination && (
                  <span>({pagination.total_count})</span>
                )}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={toggleMenu} className="flex items-center gap-1 text-sm group hover:text-mint-dark">
                  Sort & Filter
                  <svg className="w-4 h-4" aria-hidden="true" data-testid="filter-icon" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 12"><g transform="translate(18386.5 -3574.5)"><line x2="17" transform="translate(-18386.5 3577.5)" stroke="currentColor" strokeWidth="2"></line><line x2="17" transform="translate(-18386.5 3583.5)" stroke="currentColor" strokeWidth="2"></line><line y2="6" transform="translate(-18381.5 3574.5)" stroke="currentColor" strokeWidth="2"></line><line y2="6" transform="translate(-18374.5 3580.5)" stroke="currentColor" strokeWidth="2"></line></g></svg>
                </button>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-y-12 lg:gap-x-4 lg:grid-cols-4">
              {
                favorites.map((item) => (
                  <MediaCard
                    key={item.id}
                    id={item.id}
                    {...item }
                    elementType="li"
                    headerLevel='h3'
                  />
                ))
              }
            </ul>
          </div>
        ) : (
          <p>Loading my favorites...</p>
        )}
      </div>
      <div className="w-full max-w-[1136px] px-4 pb-8 mx-auto text-right lg:px-0">
        <a href="#root" className="inline-block">Back to top</a>
      </div>
      {isOpen && (
      <SlideInContainer isOpen={isOpen} toggleMenu={toggleMenu}>
        <p className="font-bold">Sort and Filter By</p>
        <ul className="space-y-1">
          <li>
            <button aria-label="Sort by publish date" className='menu-button' onClick={sortByPublishDate}>
              <span className={`h-4 w-4 rounded-full border transition-colors duration-150 ${currentSort === 'date' ? 'bg-mint border-mint' : 'border-silver group-hover:bg-mint'}`}></span>
              Sort by publish date
            </button>
          </li>
          <li>
            <button aria-label="Sort alphabetically" className='menu-button' onClick={sortByAlphabetical}>
              <span className={`h-4 w-4 rounded-full border transition-colors duration-150 ${currentSort === 'alphabetical' ? 'bg-mint border-mint' : 'border-silver group-hover:bg-mint'}`}></span>
              Sort alphabetically
            </button>
          </li>
        </ul>

        <ul className="space-y-1">
          <li>
            <button className='menu-button' onClick={() => handleEndpointClick('recipes')}>
              <span className={`h-4 w-4 rounded-full border transition-colors duration-150 ${endpoint === 'recipes' ? 'bg-mint border-mint' : 'border-silver group-hover:bg-mint'}`}></span>
              Recipes
            </button>
          </li>
          <li>
            <button className='menu-button' onClick={() => handleEndpointClick('taste_tests')}>
              <span className={`h-4 w-4 rounded-full border transition-colors duration-150 ${endpoint === 'taste_tests' ? 'bg-mint border-mint' : 'border-silver group-hover:bg-mint'}`}></span>
              Taste Tests</button>
          </li>
          <li>
            <button className='menu-button' onClick={() => handleEndpointClick('episodes')}>
              <span className={`h-4 w-4 rounded-full border transition-colors duration-150 ${endpoint === 'episodes' ? 'bg-mint border-mint' : 'border-silver group-hover:bg-mint'}`}></span>
              Episodes</button>
          </li>
        </ul>
      </SlideInContainer>
      )}
    </section>
  )
}

export default Favorites
