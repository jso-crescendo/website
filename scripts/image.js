const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Function to convert an image file to webp in different sizes
async function convertToWebp(imagePath, width, suffix) {
  try {
    const img = sharp(imagePath);

    const {width: metadataWith} = await img.metadata();

    // skip resizing if image is smaller than desired width
    if (metadataWith > width) {
      img.resize(width);
    }

    // TOOD: strip unused Metadata

    // convert to webP
    img.webp();
    const {name} = path.parse(imagePath);
    const dir = path.dirname(imagePath);
    await img
      .withMetadata({
        exif: {
          IFD0: {
            Copyright: `© ${new Date().getFullYear()} Alle Rechte vorbehalten JSO Crescendo`,
          },
        },
      })
      .toFile(`${dir}/${name}_${suffix}.webp`);
    console.log(`Image converted to webp with size: ${width}`);
    console.log(`${dir}/${name}_${suffix}.webp`);
  } catch (err) {
    console.error(`Error converting image to webp: ${err}`);
  }
}

// Function to get all image files in a folder
function getImageFiles(folderPath) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  return fs
    .readdirSync(folderPath)
    .filter((file) =>
      imageExtensions.includes(path.extname(file).toLowerCase()),
    );
}

// Main function to convert all image files in a folder to webp
async function convertImagesToWebp(folderPath) {
  try {
    const imageFiles = getImageFiles(folderPath);

    if (imageFiles.length === 0) {
      console.log('No image files found in the folder.');
      return;
    }

    console.log(`Converting ${imageFiles.length} image files to webp `);

    for (const file of imageFiles) {
      const imagePath = path.join(folderPath, file);
      await convertToWebp(imagePath, 640, 'sm');
      await convertToWebp(imagePath, 1280, 'md');
      await convertToWebp(imagePath, 1920, 'lg');
      await convertToWebp(imagePath, 3840, 'xl');
    }

    console.log('Image conversion completed successfully.');
  } catch (err) {
    console.error(`Error converting images to webp: ${err}`);
  }
}

// Usage: node script.js <folder_path>
const folderPath = process.argv[2]; // Get folder path from command line argument

if (!folderPath) {
  console.error('Please provide a folder path as an argument.');
} else {
  convertImagesToWebp(folderPath);
}
