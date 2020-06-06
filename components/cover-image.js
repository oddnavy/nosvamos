import cn from 'classnames'
import Link from 'next/link'
import { Image, Transformation } from 'cloudinary-react'

export default function CoverImage({ title, src, slug }) {
  const image = src ? (
    <Image
      responsive
      publicId={`${process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER}/${src}`}
      className={cn('w-full shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      sizes="100vw"
      quality="auto"
      fetchFormat="auto"
      alt={title}
      width="1280"
      height="960"
      loading="lazy"
    >
      <Transformation crop="fill" width="1280" height="960" gravity="faces" />
    </Image>
  ) : null

  return (
    <div className="-mx-4 lg:-mx-10">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
