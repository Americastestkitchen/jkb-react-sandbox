import SiteBadge from './SiteBadge'

const cloudinaryUrl = 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_270/'

const MediaCard = ({elementType = 'div', headerLevel = 'h2', ...props}) => {
  const Wrapper = elementType
  const Header = headerLevel
  const {
    document_title,
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
    <Wrapper className="relative space-y-4 group">
      <div className={document_cloudinary_id ? 'media-card-image' : 'media-card-image no-image'}>
        <div className='min-h-[2rem]'>
          {document_cloudinary_id && (
            <img src={`${cloudinaryUrl}${document_cloudinary_id}`} alt={document_title} loading="lazy" />
          )}
        </div>
        <div className="z-10 shrink-0 media-card-site">
          <SiteBadge site={site} />
        </div>
      </div>
      <div className="space-y-3">
        <Header className="text-2xl font-semibold leading-tight transition-colors duration-150 group-hover:text-mint group-focus:text-mint">
            {document_title}
        </Header>
        <div dangerouslySetInnerHTML={{ __html: document_description}}></div>
        <div className="flex items-center gap-6 pb-4">
          {document_avg_score && (
            <aside aria-label="Item reviews" className="flex items-center">
              <svg className="block w-5 h-5 text-mint-dark" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 15.2 14.5">
                <path fill="currentColor" d="M7.6 11l-4.7 3.5 1.8-5.6L0 5.5h5.8L7.6 0l1.8 5.5h5.8l-4.7 3.4 1.8 5.6L7.6 11z"></path>
              </svg>
              <p>
                <span className="font-bold">{ document_avg_score.toFixed(0) }</span>
                <span className="sr-only">stars based on</span>
                ({document_total_ratings})
                <span class="sr-only">reviews.</span>
              </p>
            </aside>
          )}
          {document_comment_count > 0 && (
            <aside aria-label="Comments" className='flex items-center gap-1'>
              <svg className="w-4 h-4 text-mint-dark" aria-hidden="true" focusable="false" height="13.284" viewBox="0 0 13.279 13.284" xmlns="http://www.w3.org/2000/svg" width="13.279"><g transform="translate(-13.993 -7.02)"><path d="M27.26,13.252A6.64,6.64,0,1,0,20.452,20.3a6.394,6.394,0,0,0,3.081-.664,1.69,1.69,0,0,1,1.125-.092l2.14.609a.27.27,0,0,0,.332-.332l-.646-1.993a1.594,1.594,0,0,1,.092-1.2A6.653,6.653,0,0,0,27.26,13.252Z" fill="currentColor"></path></g></svg>
              <p>
                <span className="font-bold">{document_comment_count}</span>
                <span className="sr-only">comments</span>
              </p>
            </aside>
          )}
        </div>
        <p>Saved On {document_created_at_formatted}</p>
      </div>
      <a className="absolute transition-all duration-150 -top-5 -right-1 -left-1 -bottom-1 outline-transparent outline-2 focus:outline-dashed outline-offset-2 focus:outline-eclipse" href={`https://www.americastestkitchen.com${document_url}`}>
        <span className="sr-only">{document_title}</span>
      </a>
    </Wrapper>
  )
}

export default MediaCard
