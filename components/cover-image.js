import cn from 'classnames'
import Link from 'next/link'

import cloudinary from '../lib/cloudinary'

export default function CoverImage({ title, src, slug }) {
  const cloudinaryImage = cloudinary.imageTag(
    `${process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER}/${src}`,
    {
      quality: 'auto',
      fetchFormat: 'auto',
      width: 1280,
      height: 960,
      crop: 'fill',
      gravity: 'faces',
      srcset: {
        breakpoints: [376, 768, 992, 1280],
      },
    }
  )

  const image = src ? (
    <img
      className={cn('w-full shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={cloudinaryImage.getAttr('src')}
      srcSet={cloudinaryImage.getAttr('srcset')}
      sizes="100vw"
      alt={title}
      width="1280"
      height="960"
      loading="lazy"
    />
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
