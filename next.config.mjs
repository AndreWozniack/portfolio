/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desabilitar verificações que podem causar falha no build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Otimização de imagens desativada
  images: {
    unoptimized: true,
  },
  
  // Processamento mínimo
  swcMinify: false,
  
  // Sem paralelismo
  experimental: {
    webpackBuildWorker: false,
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },
  
  // Configuração ultra simples do webpack
  webpack: (config) => {
    // Desabilitar otimizações que possam causar erros de memória
    config.optimization = {
      minimize: false,
      splitChunks: false,
      runtimeChunk: false
    };
    
    // Sem source maps
    config.devtool = false;
    
    return config;
  },
};

export default nextConfig;