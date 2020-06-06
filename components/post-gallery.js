import cloudinary from '../lib/cloudinary'

export default function PostGallery({ images }) {
  return (
    <div className="mt-8 md:mt-16 lg:mt-24">
      {images.map((image) => {
        const cloudinaryImage = cloudinary.imageTag(
          `${process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER}/${image}`,
          {
            quality: 'auto',
            fetchFormat: 'auto',
            width: 1200,
            height: 1600,
            crop: 'fit',
            srcset: {
              breakpoints: [376, 768, 992, 1200],
            },
          }
        )

        return (
          <div
            key={`gallery-${image}`}
            data-key={`gallery-${image}`}
            className="my-4 lg:my-10"
          >
            <img
              src={cloudinaryImage.getAttr('src')}
              srcSet={cloudinaryImage.getAttr('srcset')}
              sizes="100vw"
              loading="lazy"
            />
          </div>
        )
      })}
    </div>
  )
}
