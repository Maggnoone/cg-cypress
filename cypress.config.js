const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "experimentalOriginDependencies": true
  },
  env: {
    userCredentials: {
      username: "magg.development@gmail.com",
      password: "maugarG@96"
    }
  }
});
