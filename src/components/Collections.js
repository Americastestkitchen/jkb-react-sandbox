import { useState, useEffect } from 'react'
import CardChip  from './ui/CardChip'

const Collections = () => {
  const [collections, setCollections] = useState(null)

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
    <div className="px-4 space-y-6 lg:px-0">
      <div>
        {collections ? (
          <div className="space-y-6">
            <div className="w-full max-w-5xl mx-auto">
              <div className="relative flex items-baseline justify-between pb-2 border-b">
                <h1 className="text-2xl font-semibold">My Collections</h1>
                <p className="text-sm font-semibold">+ Create new collection</p>
              </div>
            </div>
            <div className="flex items-center gap-6 px-4 overflow-x-scroll">
              {
                collections.meta_data.collections.map((item, index) => (
                  <CardChip {...item }
                    elementType="li"
                    headerLevel='h2' />
                ))
              }
            </div>
          </div>
        ) : (
          <p>Loading my collections...</p>
        )}
      </div>
    </div>
  )
}

export default Collections
