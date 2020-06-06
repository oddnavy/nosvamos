import { Cloudinary } from 'cloudinary-core/cloudinary-core-shrinkwrap.js'

const cloudinary = new Cloudinary({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
})

export default cloudinary
