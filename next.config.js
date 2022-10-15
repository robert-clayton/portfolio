/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    loader: "custom",
    imageSizes: [48, 64, 128, 256, 384],
    deviceSizes: [750, 828, 1080, 1200, 1920, 2048],    
  },
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: 75,
    nextImageExportOptimizer_storePicturesInWEBP: true,
    nextImageExportOptimizer_generateAndUseBlurImages: true,
  },
}
