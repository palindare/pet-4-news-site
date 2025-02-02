import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,  // Отключаем оптимизацию изображений
  },
};

export default nextConfig;