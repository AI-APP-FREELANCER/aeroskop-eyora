module.exports = {
  apps: [
    {
      name: "eyora-app",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/home/aeroskopuser/eyora",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env_production: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};
