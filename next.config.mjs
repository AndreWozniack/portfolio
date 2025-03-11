// Tenta importar a configuração personalizada do usuário
let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config.js')
  // Se estamos usando ESM, precisamos acessar o default
  userConfig = userConfig.default || userConfig
} catch (e) {
  // Ignora o erro se o arquivo não existir
  console.log('Configuração personalizada não encontrada, usando padrões')
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Opções para reduzir uso de memória durante build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Otimização de imagens
  images: {
    unoptimized: true, // Evita processamento de imagens durante build
  },
  
  // Reduzir a quantidade de memória usada pelo webpack
  webpack: (config, { dev, isServer }) => {
    // Limitar o paralelismo do webpack para usar menos memória
    config.parallelism = 1;
    
    // Desativar source maps em produção para economizar memória
    if (!dev) {
      config.devtool = false;
    }
    
    // Opções de memória para o webpack
    config.optimization = {
      ...config.optimization,
      minimize: true,
      // Evita quebrar em muitos chunks pequenos
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 3,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          }
        }
      }
    };
    
    return config
  },
  
  // Configurações para reduzir uso de CPU durante build
  experimental: {
    webpackBuildWorker: false,
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },
  
  // Modo de saída Static para evitar geração de funções serverless complexas
  output: 'export',
  
  // Desativar geração de fonte para economizar memória
  productionBrowserSourceMaps: false,
};

// Função para mesclar a configuração do usuário com a configuração padrão
function mergeConfig(baseConfig, userConfig) {
  if (!userConfig) {
    return baseConfig;
  }

  for (const key in userConfig) {
    if (
      typeof baseConfig[key] === 'object' &&
      !Array.isArray(baseConfig[key]) &&
      baseConfig[key] !== null
    ) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...userConfig[key],
      }
    } else {
      baseConfig[key] = userConfig[key]
    }
  }
  
  return baseConfig;
}

// Aplicar a configuração do usuário
const finalConfig = mergeConfig(nextConfig, userConfig);

export default finalConfig;