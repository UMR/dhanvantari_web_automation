const cypress = require("cypress");
const { defineConfig } = require("cypress")
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib')
const { Client } = require('pg')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: "patient-portal-test-report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false, 
    reportDir: "cypress/reports",
    quite: true,
    overwrite: true,
    html: true, 
    json: false
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run')
        await beforeRunHook(details)
      })
      on('after:run', async () => {
        console.log('override after:run')
        await afterRunHook()
      })
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },

    setupNodeEvents(on, config) {
      on("task", {
        async pinServer() {
          const client = new Client({
            user: "smsa",
            password: "smsa",
            host: "172.16.6.13",
            database: "testsmsa",
            ssl: false,
            port: 5432
          })
          await client.connect()
          const res = await client.query("select substring(sms,'([0-9]{1,4})') as otp from smslog s where mobileno = '01684403513' and transtype = 'Agrani-Ib-OTP' order by createdon desc limit 1")
          await client.end()
          return res.rows;
        }
      })
    },

    setupNodeEvents(on, config) {
      on("task", {
        async pinServer1() {
          const client = new Client({
            user: "ibprod",
            password: "ibprod",
            host: "172.16.6.157",
            database: "ibprod",
            ssl: false,
            port: 5432
          })
          await client.connect()
          const res = await client.query("select DeleteBeneficiariesAndAccounts()")
          await client.end()
          return res.rows;
        }
      })
    },
    
    experimentalRunAllSpecs: false,
    testIsolation: false
  },

  //retries: { "runMode": 1, "openMode": 1 },
  watchForFileChanges: false,
  screenshotOnRunFailure: true,
  video: false,
  redirectionLimit: 20,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 60000,
  requestTimeout: 5000,
  responseTimeout: 3000,
  execTimeout: 60000,
  defaultCommandTimeout: 10000,
  // viewportWidth: 1920,
  // viewportHeight: 1080  
  viewportWidth: 2560,
  viewportHeight: 1440 
})
