import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import PostMeta from './post-meta'

export default function PostHeader({ title, coverImage, date, location }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-16 text-center md:text-left">
        <PostMeta date={date} location={location} />
      </div>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} hasImagePriority />
      </div>
    </>
  )
}
