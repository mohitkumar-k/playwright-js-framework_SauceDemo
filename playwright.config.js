const {defineConfig} = require ('@playwright/test');

module.exports = defineConfig({
  testDir:'./tests',
  timeout : 30000,

  use:{
    headless:false,
    screenshot:'only-on-failure',
    trace:"on-first-retry"
  },

  reporter:'html'
});