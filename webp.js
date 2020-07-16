var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "../../Pictures/Mobile_SS/WebP"//"./src/images/webp",            // Output folder
  PNGImages = "../../Pictures/Mobile_SS/*.png"//"./src/images/**/*.png",         // PNG images
  JPEGImages = "../../Pictures/Mobile_SS/*.jpg"//"./src/images/**/*.jpg";        // JPEG images

imagemin([PNGImages], outputFolder, {
  plugins: [webp({
      lossless: true // Losslessly encode images
  })]
});

imagemin([JPEGImages], outputFolder, {
  plugins: [webp({
    quality: 70 // Quality setting from 0 to 100
  })]
});