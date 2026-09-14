import clsx from 'clsx'
import Link from 'next/link'

import cloudinary from '../lib/cloudinary'

export default function CoverImage({
  title,
  src,
  slug,
  hasImagePriority = false,
}) {
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
      className={clsx('w-full shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={cloudinaryImage.getAttr('src')}
      srcSet={cloudinaryImage.getAttr('srcset')}
      sizes="100vw"
      alt={title}
      width={1280}
      height={960}
      fetchPriority={hasImagePriority ? 'high' : undefined}
    />
  ) : null

  return (
    <div className="-mx-4 lg:-mx-10 bg-gray-200">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
