module.exports = {
  apps: [
    {
      name: "smartcode_admin",
      script: "./index.js",
      instances: "3",
      exec_mode: "cluster",
      max_memory_restart: "300M",
      instance_var: 'INSTANCE_ID',
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development"
      },
      wait_ready: true,
      out_file: "./out.log",
      error_file: "./error.log",
      merge_logs: true,
      log_date_format: "DD-MM HH:mm:ss Z",
      log_type: "json",
    },
  ],
};
