import { useState, useEffect } from 'react'

const cloudinaryUrl = 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_270/'

const Favorites = () => {
  const [favorites, setFavorites] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/favorites')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setFavorites(data)
    } catch(error) {
      console.error('Error fetching favorites data', error)
    }
  }

  fetchData()
  }, [])

  return (
    <div className="space-y-6">
      <h1 class="border-b pb-2 font-semibold text-2xl">My Favorites</h1>
      <div className="grid grid-cols-3 gap-6">
        {favorites ? (
          favorites.results.map((item, index) => (
            <div key={item.id} className="space-y-2">
              <img src={`${cloudinaryUrl}${item.document_cloudinary_id}`} alt={item.document_title} />
              <h2 className="text-2xl font-semibold">{item.document_title}</h2>
              <div dangerouslySetInnerHTML={{ __html: item.document_description}}></div>
              <div className="flex items-center gap-2">
                <p><strong>★{ item.document_avg_score }</strong>({item.document_total_ratings})</p>
                <p>🗨 {item.document_comment_count}</p>
              </div>
              <p>Saved On {item.favorited_date_formatted}</p>

            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Favorites
