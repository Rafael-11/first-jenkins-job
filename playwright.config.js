import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: 4,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',
    trace: 'retain-on-failure',
    //video: 'on-first-retry',
    video: {'mode': 'retain-on-failure', size: { width: 1920, height: 1080} },
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [

    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: {width: 1728, height: 1117} 
       },
    },

    
  /* 

  {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: {width: 1850, height: 1080} 
       },
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: {width: 1850, height: 1000} 
       },
    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        viewport: {width: 1850, height: 1000}  
      },
    },


     {
      name: 'Google Chrome',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        viewport: {width: 1850, height: 1080} 
       },
    },

    {
      name: 'Microsoft Edge',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'msedge',
        viewport: {width: 1850, height: 1080} 
       },
    },

*/


 /*
  Test against mobile
     {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },

    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  */
  ],

});


// This is for test

