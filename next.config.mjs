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
  // Opções de desenvolvimento e construção
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Configuração de imagem - importante para o Netlify
  images: {
    // Unoptimized pode ser útil para evitar problemas de build, mas você pode querer
    // configurar domínios ou usar Netlify Image CDN em vez disso
    unoptimized: true,
    // Se quiser usar o Netlify Image Optimization, comente a linha acima e descomente abaixo:
    // loader: 'custom',
    // loaderFile: './netlify-image-loader.js',
  },
  
  // Configurações específicas para o Netlify
  output: 'standalone', // Recomendado para Netlify
  
  // Opções experimentais desativadas para maior compatibilidade
  experimental: {
    webpackBuildWorker: false,
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },
  
  // Configuração do webpack
  webpack: (config) => {
    // Opções de observação para desenvolvimento
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    
    return config
  },
}

// Função para mesclar a configuração do usuário com a configuração padrão
function mergeConfig(baseConfig, userConfig) {
  if (!userConfig) {
    return baseConfig
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
  
  return baseConfig
}

// Aplicar a configuração do usuário
const finalConfig = mergeConfig(nextConfig, userConfig)

// Exportar a configuração final
export default finalConfig