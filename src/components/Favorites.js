import { useState, useEffect } from 'react'
import MediaCard  from './ui/MediaCard'

const Favorites = () => {
  const [favorites, setFavorites] = useState(null)
  const [pagination, setPagination] = useState(null)
  const [currentSort, setCurrentSort] = useState()

  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/favorites')
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
  }, [])

  const sortByPublishDate = () => {
    // sort later
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
    <section aria-labelledby='my-favorites' className="px-4 space-y-6 lg:px-0">
      <div>
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
                <button aria-label="Sort by publish date" className={currentSort === 'date' ? 'bg-black text-white p-1 rounded' : 'p-1 rounded transition-color duration-150 hover:bg-gray-300'} onClick={sortByPublishDate}>
                  <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>
                </button>
                <button aria-label="Sort alphabetically" className={currentSort === 'alphabetical' ? 'bg-black text-white p-1 rounded' : 'p-1 rounded transition-color duration-150 hover:bg-gray-300'} onClick={sortByAlphabetical}>
                  <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                  </svg>
                </button>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-12 lg:grid-cols-3">
              {
                favorites.map((item, index) => (
                  <MediaCard
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
    </section>
  )
}

export default Favorites
