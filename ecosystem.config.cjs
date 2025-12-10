// PM2 configuration for production
module.exports = {
  apps: [{
    name: 'omarmtya-site',
    script: './dist/server/entry.mjs',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      HOST: '0.0.0.0',
      PORT: 4321
    }
  }]
};
