import { useState } from 'react'
import SiteBadge from './SiteBadge'
import SlideInContainer from './SlideInContainer'

const cloudinaryUrl = 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_270/'

const MediaCard = ({elementType = 'div', headerLevel = 'h2', id, ...props}) => {
  const Wrapper = elementType
  const Header = headerLevel
  const {
    document_title,
    document_cloudinary_id,
    site,
    document_avg_score,
    document_total_ratings,
    document_comment_count,
    document_created_at_formatted,
    document_url
  } = props

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper className="relative group" id={id}>
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
      <div className="pt-3">
        <div className="flex items-start justify-between gap-2 grow">
          <Header className="text-2xl font-semibold leading-tight transition-colors duration-150 group-hover:text-mint-dark group-focus:text-mint">
            {document_title}
          </Header>
          <div className="relative z-10 w-4 h-4 shrink-0">
            <button onClick={toggleMenu} className="font-bold">...</button>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {document_avg_score && (
            <aside aria-label="Item reviews" className="flex items-center pt-2">
              <svg className="block w-5 h-5 text-mint-dark" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 15.2 14.5">
                <path fill="currentColor" d="M7.6 11l-4.7 3.5 1.8-5.6L0 5.5h5.8L7.6 0l1.8 5.5h5.8l-4.7 3.4 1.8 5.6L7.6 11z"></path>
              </svg>
              <p>
                <span className="font-bold">{ document_avg_score.toFixed(0) }</span>
                <span className="sr-only">stars based on</span>
                ({document_total_ratings})
                <span className="sr-only">reviews.</span>
              </p>
            </aside>
          )}
          {document_comment_count > 0 && (
            <aside aria-label="Comments" className='flex items-center gap-1 pt-2'>
              <svg className="w-4 h-4 text-mint-dark" aria-hidden="true" focusable="false" height="13.284" viewBox="0 0 13.279 13.284" xmlns="http://www.w3.org/2000/svg" width="13.279"><g transform="translate(-13.993 -7.02)"><path d="M27.26,13.252A6.64,6.64,0,1,0,20.452,20.3a6.394,6.394,0,0,0,3.081-.664,1.69,1.69,0,0,1,1.125-.092l2.14.609a.27.27,0,0,0,.332-.332l-.646-1.993a1.594,1.594,0,0,1,.092-1.2A6.653,6.653,0,0,0,27.26,13.252Z" fill="currentColor"></path></g></svg>
              <p>
                <span className="font-bold">{document_comment_count}</span>
                <span className="sr-only">comments</span>
              </p>
            </aside>
          )}
        </div>
        <p className="pt-4">Saved On {document_created_at_formatted}</p>
      </div>
      <a className="absolute -top-1 -right-1 -left-1 -bottom-1" href={`https://www.americastestkitchen.com${document_url}`}>
        <span className="sr-only">{document_title}</span>
      </a>
      {/* TODO:
          Get this out of the DOM unless it's requested
          Figure out React Transitions, to allow for a slide in effect
          in association with the conditional visiblity
          Look at https://github.com/reactjs/react-transition-group
      */}
      <SlideInContainer isOpen={isOpen} toggleMenu={toggleMenu}>
        <div className="flex items-center gap-4 pb-4 border-b border-silver">
          <div className='w-20 shrink-0'>
            {document_cloudinary_id && (
              <img src={`${cloudinaryUrl}${document_cloudinary_id}`} alt={document_title} loading="lazy" />
            )}
          </div>
          <p className="text-lg font-semibold grow">{document_title}</p>
        </div>
        <div>
          <p>Do some stuff to this item...</p>
        </div>
      </SlideInContainer>
    </Wrapper>
  )
}

export default MediaCard
