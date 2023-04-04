const cloudinaryUrl = 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,h_128,q_auto:low,w_128/'


const CardChip = ({elementType = 'div', headerLevel = 'h2', ...props}) => {
  const Wrapper = elementType
  const Header = headerLevel
  const {
    count,
    document_cloudinary_ids,
    name,
    slug
  } = props

  const itemLabel = count === 1 ? 'item' : 'items'

  return (
    <Wrapper className="flex h-32 w-[21.5rem] bg-white relative shrink-0">
      <div className="basis-32 shrink-0">
        <img src={`${cloudinaryUrl}${document_cloudinary_ids}`} alt={name} />
      </div>
      <div className="flex items-center grow">
        <div className="px-4 space-y-1">
          <div className="inline-flex gap-px px-1 py-px text-[.75rem] text-white bg-gray-600 rounded font-semibold items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z" clipRule="evenodd" />
              <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z" />
              <path d="M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z" />
            </svg>

            {count} {itemLabel}
          </div>
          <Header className="font-semibold">{name}</Header>
        </div>
      </div>
      <a href={`/collections/${slug}`} className="absolute inset-0"><span class="sr-only">{name}</span></a>
    </Wrapper>
  )
}

export default CardChip
