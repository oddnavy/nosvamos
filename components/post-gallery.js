import { Image, Transformation } from "cloudinary-react";

export default function PostGallery({ images }) {
  return (
    <div className="mt-8 md:mt-16 lg:mt-24">
      {images.map((image) => (
        <div
          key={`gallery-${image}`}
          data-key={`gallery-${image}`}
          className="my-4 lg:my-10"
        >
          <Image
            responsive
            publicId={`${process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER}/${image}`}
            sizes="100vw"
          >
            <Transformation
              crop="fit"
              width="1200"
              height="1600"
              quality="auto"
              fetchFormat="auto"
            />
          </Image>
        </div>
      ))}
    </div>
  );
}
