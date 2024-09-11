const env = process.env.ENV || 'dev';
const browser = process.env.BROWSER || 'firefox';


export const config = {
    baseUrl: 'https://www.saucedemo.com/',
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [
        {
            browserName: browser,
            'goog:chromeOptions': {
                args: []
            },
            'moz:firefoxOptions': {
                args: []
            },
            'ms:edgeOptions': {
                args: []
            }
        }
    ],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],    

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            await browser.takeScreenshot();
        }
    }
   
}

if (env === 'prod') {
    config.capabilities[0]['goog:chromeOptions'].args = [
        '--no-sandbox',
        '--disable-infobars',
        '--headless',
        '--disable-gpu',
        '--window-size=1440,735'
    ];
    config.capabilities[0]['moz:firefoxOptions'].args = ['-headless'];
    config.capabilities[0]['ms:edgeOptions'].args = ['--headless', '--disable-gpu'];
} else {
    config.capabilities[0]['goog:chromeOptions'].args = ['--window-size=1280,720'];
    config.capabilities[0]['moz:firefoxOptions'].args = ['--width=1280', '--height=720'];
    config.capabilities[0]['ms:edgeOptions'].args = ['--window-size=1280,720'];
}