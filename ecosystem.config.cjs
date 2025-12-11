// PM2 configuration for production
// Load .env file if exists
require('fs').existsSync('.env') && require('dotenv').config();

module.exports = {
  apps: [{
    name: 'omarmtya-site',
    script: './dist/server/entry.mjs',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      HOST: '0.0.0.0',
      PORT: 4321,
      // Keystatic environment variables
      KEYSTATIC_GITHUB_CLIENT_ID: process.env.KEYSTATIC_GITHUB_CLIENT_ID,
      KEYSTATIC_GITHUB_CLIENT_SECRET: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
      KEYSTATIC_SECRET: process.env.KEYSTATIC_SECRET,
      PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: process.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
    }
  }]
};
