// PM2 process config — run from the repo root on your VPS.
// Usage: pm2 start ecosystem.config.cjs
//        pm2 save && pm2 startup   (to auto-start on reboot)
//
// Reads DATABASE_URL, ADMIN_PASSWORD, PORT from the shell environment.
// Always start via deploy.sh which sources .env first.

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
        PORT: process.env.PORT || 8080,
        DATABASE_URL: process.env.DATABASE_URL,
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD,
      },
    },
  ],
};
