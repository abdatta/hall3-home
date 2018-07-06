var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "../hall3-server/server/files/people"//"./src/images/webp",            // Output folder
  PNGImages = "../hall3-server/server/files/people/*.png"//"./src/images/**/*.png",         // PNG images
  JPEGImages = "../hall3-server/server/files/people/*.jpg"//"./src/images/**/*.jpg";        // JPEG images

imagemin([PNGImages], outputFolder, {
  plugins: [webp({
      lossless: true // Losslessly encode images
  })]
});

imagemin([JPEGImages], outputFolder, {
  plugins: [webp({
    quality: 65 // Quality setting from 0 to 100
  })]
});