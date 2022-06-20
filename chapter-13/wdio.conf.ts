import { ConsoleReporter } from '@serenity-js/console-reporter';
import { ArtifactArchiver } from '@serenity-js/core';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';
import { Photographer, TakePhotosOfFailures } from '@serenity-js/web';
import { WebdriverIOConfig } from '@serenity-js/webdriverio';
import { resolve } from 'path';
import { Actors } from './domain';

const baseUrl = 'http://localhost:3000';

export const config: WebdriverIOConfig = {

    specs: [
        './features/**/*.feature',
    ],

    baseUrl,

    framework: '@serenity-js/webdriverio',

// Cucumber.js configuration
    // see: https://serenity-js.org/modules/cucumber/class/src/cli/CucumberConfig.ts~CucumberConfig.html
    serenity: {
        actors: new Actors(baseUrl),
        runner: 'cucumber',
        crew: [
            ConsoleReporter.forDarkTerminals(),
            new SerenityBDDReporter(),
            Photographer.whoWill(TakePhotosOfFailures),
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity')
        ]
    },
    //
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: [
            './features/**/*.steps.ts'
        ],
        // <string[]> (type[:path]) specify native Cucumber.js output format, if needed. Optionally supply PATH to redirect formatter output (repeatable)
        // format: [ ],
        // <string> (name) specify the profile to use
        // profile: '',
        // <string[] | string> (expression) only execute the features or scenarios with tags matching the expression
        // tags: [
            // '@only'
        // ],
    },

    reporters: [
        // 'spec',
    ],
    //
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: false,
            project: resolve(__dirname, './tsconfig.json'),
        },
    },
    //
    // automationProtocol: 'devtools',
    //
    // runner: 'local',
    //
    // maxInstances: 1,
    //
    capabilities: [{

        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--headless',
                '--disable-infobars',
                '--no-sandbox',
                '--disable-gpu',
                '--window-size=1024x768',
            ],
        }
    }],

    logLevel: 'warn',
    //
    // waitforTimeout: 10_000,
    //
    // connectionRetryTimeout: 90_000,
    //
    // connectionRetryCount: 3,
};
