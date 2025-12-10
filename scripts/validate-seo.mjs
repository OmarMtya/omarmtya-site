#!/usr/bin/env node

/**
 * Script de validación SEO
 * Verifica que todos los elementos SEO estén configurados correctamente
 */

import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const checks = {
  passed: [],
  failed: [],
  warnings: []
};

console.log('🔍 Validando configuración SEO...\n');

// 1. Verificar astro.config.mjs
console.log('📄 Verificando astro.config.mjs...');
const astroConfig = readFileSync('astro.config.mjs', 'utf-8');

if (astroConfig.includes("site: 'https://omarmontoya.dev'")) {
  checks.warnings.push('⚠️  Dominio en astro.config.mjs es placeholder - actualiza con tu dominio real');
} else if (astroConfig.includes('site:')) {
  checks.passed.push('✅ Dominio configurado en astro.config.mjs');
} else {
  checks.failed.push('❌ Falta configurar "site" en astro.config.mjs');
}

if (astroConfig.includes('@astrojs/sitemap')) {
  checks.passed.push('✅ Integración de sitemap instalada');
} else {
  checks.failed.push('❌ Falta integración @astrojs/sitemap');
}

// 2. Verificar robots.txt
console.log('🤖 Verificando robots.txt...');
if (existsSync('public/robots.txt')) {
  const robots = readFileSync('public/robots.txt', 'utf-8');
  if (robots.includes('Sitemap:')) {
    checks.passed.push('✅ robots.txt configurado correctamente');
  } else {
    checks.warnings.push('⚠️  robots.txt existe pero no tiene referencia al sitemap');
  }
} else {
  checks.failed.push('❌ Falta archivo public/robots.txt');
}

// 3. Verificar imágenes requeridas
console.log('🖼️  Verificando imágenes...');
const requiredImages = [
  { path: 'public/og-default.svg', desc: 'Imagen Open Graph por defecto' },
  { path: 'public/logo.svg', desc: 'Logo para Schema.org' },
  { path: 'public/favicon.svg', desc: 'Favicon del sitio' }
];

requiredImages.forEach(({ path, desc }) => {
  if (existsSync(path)) {
    checks.passed.push(`✅ ${desc} existe (${path})`);
  } else {
    checks.warnings.push(`⚠️  Falta ${desc} (${path})`);
  }
});

// 4. Verificar componentes SEO
console.log('🧩 Verificando componentes...');
const requiredComponents = [
  { path: 'src/components/SEO.astro', desc: 'Componente SEO' },
  { path: 'src/components/SchemaOrg.astro', desc: 'Componente Schema.org' }
];

requiredComponents.forEach(({ path, desc }) => {
  if (existsSync(path)) {
    checks.passed.push(`✅ ${desc} existe`);
  } else {
    checks.failed.push(`❌ Falta ${desc} (${path})`);
  }
});

// 5. Verificar blog posts tienen campos SEO
console.log('📝 Verificando blog posts...');
const blogDir = 'src/content/blog';
if (existsSync(blogDir)) {
  const { readdirSync } = await import('fs');
  const posts = readdirSync(blogDir).filter(f => f.endsWith('.md'));
  
  if (posts.length > 0) {
    checks.passed.push(`✅ ${posts.length} blog post(s) encontrado(s)`);
    
    posts.forEach(post => {
      const content = readFileSync(`${blogDir}/${post}`, 'utf-8');
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      
      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        
        if (!frontmatter.includes('description:')) {
          checks.warnings.push(`⚠️  ${post} no tiene "description"`);
        }
        if (!frontmatter.includes('tags:')) {
          checks.warnings.push(`⚠️  ${post} no tiene "tags"`);
        }
        if (!frontmatter.includes('lang:')) {
          checks.warnings.push(`⚠️  ${post} no tiene "lang"`);
        }
      }
    });
  } else {
    checks.warnings.push('⚠️  No hay blog posts aún');
  }
}

// 6. Verificar package.json
console.log('📦 Verificando dependencias...');
const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));

if (pkg.dependencies['@astrojs/sitemap']) {
  checks.passed.push('✅ @astrojs/sitemap instalado');
} else {
  checks.failed.push('❌ Falta dependencia @astrojs/sitemap');
}

// Mostrar resultados
console.log('\n' + '='.repeat(50));
console.log('📊 RESULTADOS\n');

if (checks.passed.length > 0) {
  console.log('✅ CORRECTO:\n');
  checks.passed.forEach(check => console.log(`   ${check}`));
  console.log('');
}

if (checks.warnings.length > 0) {
  console.log('⚠️  ADVERTENCIAS:\n');
  checks.warnings.forEach(check => console.log(`   ${check}`));
  console.log('');
}

if (checks.failed.length > 0) {
  console.log('❌ ERRORES:\n');
  checks.failed.forEach(check => console.log(`   ${check}`));
  console.log('');
}

console.log('='.repeat(50));
console.log(`\n📈 Resumen: ${checks.passed.length} OK | ${checks.warnings.length} Advertencias | ${checks.failed.length} Errores\n`);

if (checks.failed.length > 0) {
  console.log('❌ Hay errores críticos que deben corregirse.\n');
  process.exit(1);
} else if (checks.warnings.length > 0) {
  console.log('⚠️  Todo funcional, pero hay mejoras recomendadas.\n');
  console.log('📖 Consulta SEO-GUIDE.md para más detalles.\n');
  process.exit(0);
} else {
  console.log('🎉 ¡SEO configurado perfectamente!\n');
  process.exit(0);
}
