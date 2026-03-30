// PM2 process config — run from the repo root on your VPS
// Usage: pm2 start ecosystem.config.cjs
//        pm2 save && pm2 startup   (to auto-start on reboot)

module.exports = {
  apps: [
    {
      name: "smartlearn-api",
      script: "./artifacts/api-server/dist/index.mjs",
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 8080,
      },
    },
  ],
};
