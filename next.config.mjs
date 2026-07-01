/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF/WebP primero: reduce peso de imagen sin intervención manual (optimización LCP).
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
