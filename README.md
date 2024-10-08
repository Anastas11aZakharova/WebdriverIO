# WebdriverIO

## Latest test results
Available at https://anastas11azakharova.github.io/WebdriverIO/

## summary
20 test cases for https://www.saucedemo.com/ website using WebDriverIO framework and PageObjectModel pattern

GitHub actions configured to run 2 jobs in parallel:
1. Local execution on the runner
2. Starting a docker container and executing the tests there

## requirements:
- npm
- docker

## steps to install:
1. Clone repository
2. ``` npm install ```

## steps to launch:
```
npm run chrome
```

## steps to launch with alternative configuratgions 
based on cross-env variables (firefox, edge, different screen resolutions and headless mode). See package.json and config for details
```
npm run firefox
npm run edge
npm run chrome-prod
npm run firefox-prod
npm run edge-prod
```
## steps to generate report
```
npm run generate-report
npm run open-report
```

## steps to launch on docker locally
```
docker build -t webdriverio-tests -f Dockerfile .
docker run --rm -it webdriverio-tests
```
