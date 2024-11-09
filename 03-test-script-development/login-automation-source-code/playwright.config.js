const { devices } = require('@playwright/test');
const { environments } = require('./testData/environments');

const config = {
    testDir: './tests',
    timeout: 30000,
    expect: {
        timeout: 5000
    },
    use: {
        actionTimeout: 0,
        baseURL: environments[process.env.TEST_ENV || 'prod'].baseUrl,
        trace: 'on-first-retry',
        // Screenshot configuration
        screenshot: 'on',
        video: 'on-first-retry'
    },
    retries: process.env.CI ? 2 : 0,
    reporter: [
        ['list'],
        ['html', { 
            open: 'never',
            outputFolder: 'test-results/html-report'
        }],
        ['junit', {
            outputFile: 'test-results/junit-report.xml'
        }]
    ],
    projects: [
        {
            name: 'chromium',
            use: { 
                browserName: 'chromium',
                viewport: { width: 1280, height: 720 }
            }
        },
        {
            name: 'firefox',
            use: { 
                browserName: 'firefox',
                viewport: { width: 1280, height: 720 }
            }
        },
        {
            name: 'webkit',
            use: { 
                browserName: 'webkit',
                viewport: { width: 1280, height: 720 }
            }
        }
    ]
};

module.exports = config;
