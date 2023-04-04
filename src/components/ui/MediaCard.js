const cloudinaryUrl = 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_270/'

const MediaCard = ({elementType = 'div', headerLevel = 'h2', ...props}) => {
  const Wrapper = elementType
  const Header = headerLevel
  const {
    document_title,
    document_klass,
    document_cloudinary_id,
    site,
    document_description,
    document_avg_score,
    document_total_ratings,
    document_comment_count,
    document_created_at_formatted,
    document_url
  } = props
  return (
    <Wrapper className="space-y-4">
      <div className={document_cloudinary_id ? 'media-card-image' : 'media-card-image no-image'}>
        <div className='min-h-[2rem]'>
          {document_cloudinary_id && (
            <a aria-label={`${document_title} ${document_klass}`} className="group" href={`https://www.americastestkitchen.com${document_url}`}>
              <img src={`${cloudinaryUrl}${document_cloudinary_id}`} alt={document_title} loading="lazy" />
            </a>
          )}
        </div>
        <div className="z-10 flex items-center justify-center w-6 h-6 text-[8px] font-semibold text-white uppercase bg-gray-900 rounded-full top-2 left-2 shrink-0 media-card-site">
          { site }
        </div>
      </div>
      <div className="space-y-2">
        <a className="block group" href={`https://www.americastestkitchen.com${document_url}`}>
          <Header className="text-2xl font-semibold leading-tight transition-colors duration-150 group-hover:text-teal-700">{document_title}</Header>
        </a>
        <div dangerouslySetInnerHTML={{ __html: document_description}}></div>
        <div className="flex items-center gap-4">
          {document_avg_score && (
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <span><strong>{ document_avg_score.toFixed(0) }</strong>({document_total_ratings})</span>
            </p>
          )}
          {document_comment_count > 0 && (
            <p className='flex items-center gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
              </svg>
              {document_comment_count}</p>
          )}
        </div>
        <p>Saved On {document_created_at_formatted}</p>
      </div>
    </Wrapper>
  )
}

export default MediaCard
