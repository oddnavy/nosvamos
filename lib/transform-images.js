const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const imagesDirectory = path.join(process.cwd(), 'images')

function getAllImages() {
  return fs.readdirSync(imagesDirectory)
}

async function resizeImage(image) {
  const fullPath = path.join(imagesDirectory, image)

  try {
    // Gallery Small
    await sharp(fullPath)
      .resize({
        width: 1080,
        height: 1080,
        fit: 'inside',
      })
      .jpeg({
        quality: 80,
        progressive: true,
      })
      .toFile(`./public/images/gallery/small/${image}`)

    // Gallery Large
    // await sharp(fullPath)
    //   .resize({
    //     width: 1920,
    //     height: 1920,
    //     fit: "inside",
    //   })
    //   .jpeg({
    //     quality: 80,
    //     progressive: true,
    //   })
    //   .toFile(`./public/images/gallery/large/${image}`);

    // Open Graph
    // await sharp(fullPath)
    //   .resize({
    //     width: 1200,
    //     height: 630,
    //     fit: "cover",
    //   })
    //   .jpeg({
    //     quality: 80,
    //     progressive: true,
    //   })
    //   .toFile(`./public/images/open-graph/${image}`);

    console.error(`[OK] ${image}`)
  } catch (error) {
    console.error(`[Failed] ${image}`, error)
  }
}

function resizeImages() {
  const images = getAllImages()
  return images.forEach(async (image) => await resizeImage(image))
}

resizeImages()
