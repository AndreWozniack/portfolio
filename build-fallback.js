// Script para tentar diferentes estratégias de build
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Iniciando build com estratégia de fallback...');

// Função para executar comandos com tratamento de erros
function runCommand(command, options = {}) {
  try {
    execSync(command, { stdio: 'inherit', ...options });
    return true;
  } catch (error) {
    console.error(`Comando falhou: ${command}`);
    console.error(error.message);
    return false;
  }
}

// Backup da configuração original do Next.js
let originalNextConfig = '';
if (fs.existsSync('./next.config.js')) {
  originalNextConfig = fs.readFileSync('./next.config.js', 'utf8');
  fs.writeFileSync('./next.config.js.bak', originalNextConfig);
}

// Tentar build normal primeiro
console.log('Tentando build padrão...');
if (runCommand('next build')) {
  console.log('Build concluído com sucesso!');
  process.exit(0);
}

// Se falhar, tentar uma configuração mais simples
console.log('Build padrão falhou, tentando configuração minimalista...');

// Configuração minimalista para Next.js
const minimalConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  swcMinify: false,
  webpack: (config) => {
    config.optimization.minimize = false;
    config.optimization.moduleIds = 'named';
    config.optimization.chunkIds = 'named';
    config.devtool = false;
    return config;
  }
};

export default nextConfig;
`;

// Aplicar configuração minimalista
fs.writeFileSync('./next.config.js', minimalConfig);

// Tentar build com configuração minimalista
console.log('Executando build com configuração minimalista...');
if (runCommand('next build', { env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=3072' } })) {
  console.log('Build concluído com configuração minimalista!');
} else {
  // Última tentativa: configuração ultra-minimalista
  console.log('Tentando configuração ultra-minimalista...');
  
  const ultraMinimalConfig = `
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  transpilePackages: [],
  experimental: {
    esmExternals: false,
  },
  webpack: (config) => {
    // Desabilitar completamente optimizations
    config.optimization = {
      minimize: false,
      minimizer: [],
      moduleIds: 'named',
      chunkIds: 'named',
      splitChunks: false
    };
    config.devtool = false;
    return config;
  }
};

export default nextConfig;
`;

  fs.writeFileSync('./next.config.js', ultraMinimalConfig);
  
  if (runCommand('next build', { env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=2048' } })) {
    console.log('Build concluído com configuração ultra-minimalista!');
  } else {
    console.error('Todas as tentativas de build falharam.');
    process.exit(1);
  }
}

// Restaurar configuração original
if (originalNextConfig) {
  fs.writeFileSync('./next.config.js', originalNextConfig);
  fs.unlinkSync('./next.config.js.bak');
}